import {HelloFluxApplication} from './application';

async function main() {
  const app = new HelloFluxApplication();
  app.controller(require('./controllers/hello.controller').HelloController);
  await app.start();
  console.log(`Server running on port ${app.restServer.url}`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
