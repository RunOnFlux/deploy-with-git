import {get, Response, RestBindings} from '@loopback/rest';
import {inject} from '@loopback/core';

const html = `<!DOCTYPE html>
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
</html>`;

export class HelloController {
  constructor(@inject(RestBindings.Http.RESPONSE) private res: Response) {}

  @get('/')
  hello(): void {
    this.res.type('text/html').send(html);
  }
}
