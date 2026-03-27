import {RestApplication, RestBindings} from '@loopback/rest';

export class HelloFluxApplication extends RestApplication {
  constructor() {
    super({
      rest: {
        port: +(process.env.PORT ?? 3000),
        host: process.env.HOST ?? '0.0.0.0',
        openApiSpec: {disabled: true},
      },
    });
    this.bind(RestBindings.ERROR_WRITER_OPTIONS).to({debug: false});
  }
}
