package main

import (
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
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

	r := gin.Default()
	r.GET("/", func(c *gin.Context) {
		c.Data(http.StatusOK, "text/html; charset=utf-8", []byte(html))
	})

	r.Run("0.0.0.0:" + port)
}
