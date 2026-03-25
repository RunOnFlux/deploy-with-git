import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  hello(): object {
    return {
      message: 'Hello from Flux!',
      framework: 'NestJS',
      network: 'Flux Network',
    };
  }
}
