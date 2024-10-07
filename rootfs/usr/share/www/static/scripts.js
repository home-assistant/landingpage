/* unfetch polyfill */
self.fetch ||
  (self.fetch = function (e, n) {
    return (
      (n = n || {}),
      new Promise(function (t, s) {
        var r = new XMLHttpRequest(),
          o = [],
          u = [],
          i = {},
          a = function () {
            return {
              ok: 2 == ((r.status / 100) | 0),
              statusText: r.statusText,
              status: r.status,
              url: r.responseURL,
              text: function () {
                return Promise.resolve(r.responseText);
              },
              json: function () {
                return Promise.resolve(JSON.parse(r.responseText));
              },
              blob: function () {
                return Promise.resolve(new Blob([r.response]));
              },
              clone: a,
              headers: {
                keys: function () {
                  return o;
                },
                entries: function () {
                  return u;
                },
                get: function (e) {
                  return i[e.toLowerCase()];
                },
                has: function (e) {
                  return e.toLowerCase() in i;
                },
              },
            };
          };
        for (var c in (r.open(n.method || "get", e, !0),
          (r.onload = function () {
            r
              .getAllResponseHeaders()
              .replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, function (e, n, t) {
                o.push((n = n.toLowerCase())),
                  u.push([n, t]),
                  (i[n] = i[n] ? i[n] + "," + t : t);
              }),
              t(a());
          }),
          (r.onerror = s),
          (r.withCredentials = "include" == n.credentials),
          n.headers))
          r.setRequestHeader(c, n.headers[c]);
        r.send(n.body || null);
      })
    );
  });

function testAvailable() {
  fetch("/manifest.json").then(function (res) {
    if (res.ok) {
      location.reload();
    } else {
      scheduleTry();
    }
  }, scheduleTry);
}

var errorCheck = /^[\d -:]+(ERROR|CRITICAL)(.*)/gm

const regexRemoveTimestamp = /^[\[\d \-:.\]]*/gm
const regexColorLines = /^(DEBUG|INFO|WARNING|ERROR|CRITICAL)\s\(\w+\)\s(.*)\n/gm

function fetchLogs() {
  fetch("/observer/logs").then(function (res) {
    if (res.ok) {
      res.text().then(function (text) {
        var logElement = document.getElementById("log");
        if (errorCheck.test(text)) {
          document.body.classList.add("supervisor-error");
          document.getElementById("show_logs").innerText = "Download raw logs";
          logElement.showFull = true;
        }
        if (!logElement.showFull) {
          return;
        }
        var scrolledDown = logElement.scrollTop + logElement.clientHeight === logElement.scrollHeight;
        logElement.innerHTML = text
          .replace(regexRemoveTimestamp, "")
          .replace(regexColorLines, "<span class='$1'>$2</span>\n")
        if (scrolledDown) {
          // Scroll content down if it was already scrolled down
          logElement.scrollTop = logElement.scrollHeight;
        }
      });
    }
  }, scheduleFetchLogs());
}

function scheduleTry() {
  setTimeout(testAvailable, 5000);
}

var scheduleTimeout;

function scheduleFetchLogs() {
  clearTimeout(scheduleTimeout);
  scheduleTimeout = setTimeout(fetchLogs, 5000);
}

function fetchNetworkInfo() {
  fetch("/supervisor/network/info").then(function (res) {
    if (!res.ok)
      return;

    res.json().then(function (data) {
      if (!data.data.host_internet) {
        document.body.classList.add("network-issue");
      }
      else
      {
        document.body.classList.remove("network-issue");
      }

      if (document.body.classList.contains("network-issue")) {
        const primaryInterface = data.data.interfaces.find(intf => intf.primary);
        const dnsElement = document.getElementById("current_dns");
        if (!primaryInterface) {
          dnsElement.innerText = "(no primary interface)";
        } else {
          dnsElement.innerText = [...(primaryInterface.ipv4?.nameservers || []), ...(primaryInterface.ipv6?.nameservers || [])].join(', ');
        }
      }

    });
  }, scheduleFetchNetworkInfo());
}

var scheduleNetworkTimeout;

function scheduleFetchNetworkInfo() {
  clearTimeout(scheduleNetworkTimeout);
  scheduleNetworkTimeout = setTimeout(fetchNetworkInfo, 5000);
}

scheduleTry();
fetchLogs();
fetchNetworkInfo();

document.getElementById("show_logs").addEventListener("click", toggleLogs);
function toggleLogs(event) {
  if (document.body.classList.contains("error")) {
    const a = document.createElement("a");
    a.target = "_blank";
    a.href = "/observer/logs";
    a.download = "logs.txt";

    document.body.appendChild(a);
    a.dispatchEvent(new MouseEvent("click"));
    document.body.removeChild(a);
    return;
  }
  var logElement = document.getElementById("log");
  logElement.showFull = !logElement.showFull;
  if (logElement.showFull) {
    event.target.innerText = "Hide details";
    fetchLogs();
  } else {
    logElement.innerText = "";
    event.target.innerText = "Show details";
  }
}

document.getElementById("try_cloudflare_dns").addEventListener("click", function() {
  setDns(["1.1.1.1", "1.0.0.1"], ["2606:4700:4700::1111", "2606:4700:4700::1001"]);
});

document.getElementById("try_google_dns").addEventListener("click", function() {
  setDns(["8.8.8.8", "8.8.4.4"], ["2001:4860:4860::8888", "2001:4860:4860::8844"]);
});

function setDns(ipv4nameservers, ipv6nameservers) {
  // Step 1: Fetch the primary network interface from the /network/info endpoint
  fetch("/supervisor/network/info", {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      }
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to fetch network info');
      }
      return response.json();
  })
  .then(data => {
      // Step 2: Find the primary interface
      const primaryInterface = data.data.interfaces.find(intf => intf.primary && intf.enabled);
      if (!primaryInterface) {
          throw new Error('No primary interface found');
      }

      // Step 3: Update the DNS settings for the primary interface
      const payload = {
          ipv4: {
              method: "auto",
              nameservers: ipv4nameservers
          },
          ipv6: {
              method: "auto",
              nameservers: ipv6nameservers
          }
      };

      return fetch(`/supervisor/network/interface/${primaryInterface.interface}/update`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload)
      });
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Failed to update the interface');
      }
      fetchNetworkInfo();
      return response.json();
  })
  .then(data => {
      console.log('Success:', data);
      // Optionally handle the success case, e.g., updating the UI or showing a message
  })
  .catch((error) => {
      console.error('Error:', error);
      // Optionally handle the error case, e.g., showing an error message
  });
}

var dialogs = document.querySelectorAll('dialog');
dialogs.forEach(dialog => {
  dialogPolyfill.registerDialog(dialog);
})

var communityBtn = document.getElementById("community")
communityBtn.addEventListener("click", showDialogCommunity)
communityBtn.addEventListener("keydown", function (ev) { if (["Enter", " "].includes(ev.key)) { ev.preventDefault(); showDialogCommunity() } });

function showDialogCommunity() {
  document.getElementById("dialog-community").showModal();
}

var appBtn = document.getElementById("app")
appBtn.addEventListener("click", showDialogApp)
appBtn.addEventListener("keydown", function (ev) { if (["Enter", " "].includes(ev.key)) { ev.preventDefault(); showDialogApp() } });

function showDialogApp() {
  document.getElementById("dialog-app").showModal();
}

document.addEventListener("DOMContentLoaded", () => {
  if (
    location.search.indexOf("homeassistant://auth-callback") !==
    -1
  ) {
    // Hide app button if visited from an app
    document.getElementById("app").remove();
  }
});

tsParticles.load("particles", {
  fullScreen: {
    enable: true,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 60,
  motion: {
    disable: false,
    reduce: {
      factor: 4,
      value: true,
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      repulse: {
        distance: 80,
        duration: 0.1,
      },
    },
  },
  particles: {
    color: {
      value: "#03a9f4",
    },
    animation: {
      enable: true,
      speed: 50,
      sync: false,
    },
    links: {
      color: {
        value: "random",
      },
      distance: 100,
      enable: true,
      frequency: 1,
      opacity: 0.7,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.5,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 50,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 0.5,
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
        startValue: "random",
        sync: false,
      },
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: 3,
      animation: {
        destroy: "none",
        enable: true,
        minimumValue: 1,
        speed: 3,
        startValue: "random",
        sync: false,
      },
    },
  },
  pauseOnBlur: true,
});
