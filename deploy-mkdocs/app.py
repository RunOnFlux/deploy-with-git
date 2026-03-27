import os
import http.server
import socketserver

PORT = int(os.environ.get('PORT', 80))
os.chdir(os.path.join(os.path.dirname(os.path.abspath(__file__)), 'site'))

Handler = http.server.SimpleHTTPRequestHandler

with socketserver.TCPServer(('', PORT), Handler) as httpd:
    print(f'Serving MkDocs site on port {PORT}', flush=True)
    httpd.serve_forever()
