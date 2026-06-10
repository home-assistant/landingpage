# Landing page

Home Assistant OS pre-installed landing page. This is a small, temporary
landing page shipped with Home Assistant OS so something is displayed while
Supervisor is downloading the full version of Home Assistant Core on first
startup. The landing page opens a web server on port 8123 and publishes DNS-SD
discovery information. It also listens on port 80 and redirects all requests
there to port 8123. From that perspective the landing page is like a
stripped down version of Home Assistant Core.
