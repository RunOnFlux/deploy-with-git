import os
from wsgiref.simple_server import make_server
import falcon

HTML = """<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Hello, Flux!</title>
    <style>
      body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f4f4f4; }
      h1 { font-size: 3rem; color: #2563eb; }
    </style>
  </head>
  <body><h1>Hello, Flux!</h1></body>
</html>"""


class HelloResource:
    def on_get(self, req, resp):
        resp.content_type = 'text/html'
        resp.text = HTML


app = falcon.App()
app.add_route('/', HelloResource())


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 8000))
    with make_server('0.0.0.0', port, app) as httpd:
        print(f'Serving on port {port}')
        httpd.serve_forever()
