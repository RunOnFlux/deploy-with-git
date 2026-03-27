using WorkerService;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHostedService<Worker>();

var app = builder.Build();

var html = """
    <!DOCTYPE html>
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
    </html>
    """;

app.MapGet("/", () => Results.Content(html, "text/html"));

app.Run();
