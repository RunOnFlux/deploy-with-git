package main

import (
	"os"

	"github.com/kataras/iris/v12"
)

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
</html>`

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	app := iris.New()
	app.Get("/", func(ctx iris.Context) {
		ctx.ContentType("text/html; charset=utf-8")
		ctx.WriteString(html)
	})

	app.Listen("0.0.0.0:" + port)
}
