const restify = require("restify");

const port = process.env.PORT || 3000;

const server = restify.createServer();

const html = `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Hello Flux</title>
      <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
          background: #0a0a0a;
          color: #ededed;
          font-family: sans-serif;
        }
        .card { text-align: center; padding: 2rem; }
        h1 { font-size: 3rem; margin-bottom: 1rem; }
        p { font-size: 1.25rem; color: #a0a0a0; margin-bottom: 2rem; }
        a {
          display: inline-block;
          padding: 0.75rem 2rem;
          background: #2563eb;
          color: #fff;
          border-radius: 0.5rem;
          text-decoration: none;
          font-size: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Hello from Flux! 👋</h1>
        <p>This Restify app is running on the decentralized Flux Network.</p>
        <a href="https://runonflux.com" target="_blank" rel="noopener noreferrer">
          Learn more about Flux
        </a>
      </div>
    </body>
  </html>
`;

server.get("/", (req, res, next) => {
  res.setHeader("Content-Type", "text/html");
  res.sendRaw(200, html);
  return next();
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
