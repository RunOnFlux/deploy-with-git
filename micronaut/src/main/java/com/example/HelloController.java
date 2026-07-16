package com.example;

import io.micronaut.http.MediaType;
import io.micronaut.http.annotation.Controller;
import io.micronaut.http.annotation.Get;
import io.micronaut.http.annotation.Produces;

@Controller("/")
public class HelloController {

    private static final String HTML = """
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

    @Get
    @Produces(MediaType.TEXT_HTML)
    public String index() {
        return HTML;
    }
}
