import os
from fastapi import FastAPI
from fastapi.responses import HTMLResponse
import uvicorn

app = FastAPI()

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


@app.get("/")
async def index():
    return HTMLResponse(HTML)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 8000))
    uvicorn.run(app, host="0.0.0.0", port=port)
