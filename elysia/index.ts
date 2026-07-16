import { Elysia } from 'elysia';

const port = parseInt(process.env.PORT || process.env.APP_PORT || '8080');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Hello, Flux!</title>
  <style>
    body { display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f4f4f4; }
    h1 { font-size: 3rem; color: #2563eb; font-family: sans-serif; }
  </style>
</head>
<body>
  <h1>Hello, Flux!</h1>
</body>
</html>`;

const app = new Elysia()
  .get('/', () => new Response(html, { headers: { 'Content-Type': 'text/html; charset=utf-8' } }))
  .listen(port);

console.log(`Elysia running at http://0.0.0.0:${port}`);
