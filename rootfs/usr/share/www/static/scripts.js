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
  fetch("./manifest.json").then(function (res) {
    if (res.ok) {
      location.reload();
    } else {
      scheduleTry();
    }
  }, scheduleTry);
}

function fetchLogs() {
  fetch("/observer/logs").then(function (res) {
    if (res.ok) {
      res.text().then(function (text) {
        const logElement = document.querySelector("#log");
        logElement.innerText = logElement.showFull
          ? text
          : ""
              .replace(/\s[A-Z]+\s\(\w+\)\s\[[\w.]+\]/gi, "")
              .replace(/\d{2}-\d{2}-\d{2}\s/gi, "")
              .replace(/\d{2}:\d{2}:\d{2}\s/gi, "");
      });
    }
  }, scheduleFetchLogs());
}

function scheduleTry() {
  setTimeout(testAvailable, 5000);
}

function scheduleFetchLogs() {
  setTimeout(fetchLogs, 5000);
}

scheduleTry();
fetchLogs();

document.getElementById("spinner").addEventListener("click", function (event) {
  const logElement = document.querySelector("#log");
  log.showFull = !logElement.showFull;
  fetchLogs();
});

document.addEventListener("DOMContentLoaded", (event) => {
  if (
    location.search.indexOf("client_id=http://home-assistant.io/android") !==
      -1 ||
    location.search.indexOf("client_id=http://home-assistant.io/iOS") !== -1
  ) {
    // Hide app links if visited from an app
    document.querySelector("#app-links").remove();
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
      value: "#fff",
      animation: {
        enable: true,
        speed: 50,
        sync: false,
      },
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
