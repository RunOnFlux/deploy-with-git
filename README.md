# Deploy With Git: Example Apps

A collection of "Hello World" apps demonstrating how to deploy any framework to [Flux Network](https://runonflux.com) using the **Deploy With Git** feature. No CI pipelines, no Docker knowledge, no infrastructure to manage.

---

## What is Deploy With Git?

[Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/) lets you deploy directly from a GitHub repository to Flux's decentralized cloud in minutes. Point it at your repo, and Flux handles the rest:

- **Auto-detects your framework**: Node.js, Bun, Python, Ruby, PHP, Java, .NET, Go, Rust, and more
- **Installs dependencies**: `npm install`, `pip install`, `composer install`, `bundle install`, `go mod download`, `cargo build`, etc.
- **Builds your app**: runs your build script automatically when detected
- **Runs your server**: starts the right process for your framework with zero configuration
- **Deploys across multiple nodes**: your app runs on Flux's global decentralized network for high availability

Every push can trigger an automatic redeploy via [GitHub Webhooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks), with automatic rollback if a new build fails.

---

## Secrets & Environment Variables

Environment variables are injected at runtime and never stored in your repository. For production workloads requiring the highest level of security, **Enterprise Mode** encrypts your entire app specification (including all environment variables and secrets) and runs exclusively on verified [ArcaneOS](https://runonflux.com) nodes. Your secrets are never exposed in plaintext anywhere in the deployment pipeline.

---

## Get Started

1. Go to [cloud.runonflux.com/apps/register](https://cloud.runonflux.com/apps/register) and choose **Deploy With Git**
2. Paste your repository URL and select your branch
3. Set your port and any environment variables
4. Click **Register** and your app is live

> See the full guide: [Deploy With Git:Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)

---

## Example Apps by Framework

### Node.js

| Framework | Guide |
|---|---|
| [Express](https://expressjs.com) | [deploy-express](./deploy-express/) |
| [Fastify](https://fastify.dev) | [deploy-fastify](./deploy-fastify/) |
| [NestJS](https://nestjs.com) | [deploy-nestjs](./deploy-nestjs/) |
| [AdonisJS](https://adonisjs.com) | [deploy-adonisjs](./deploy-adonisjs/) |
| [LoopBack](https://loopback.io) | [deploy-loopback](./deploy-loopback/) |

### Bun

| Framework | Guide |
|---|---|
| [Elysia](https://elysiajs.com) | [deploy-elysia](./deploy-elysia/) |
| [Hono](https://hono.dev) | [deploy-hono-bun](./deploy-hono-bun/) |

### Frontend

| Framework | Guide |
|---|---|
| [React](https://react.dev) | [deploy-react](./deploy-react/) |
| [Vue.js](https://vuejs.org) | [deploy-vue](./deploy-vue/) |
| [Angular](https://angular.dev) | [deploy-angular](./deploy-angular/) |
| [Svelte](https://svelte.dev) | [deploy-svelte](./deploy-svelte/) |
| [Preact](https://preactjs.com) | [deploy-preact](./deploy-preact/) |
| [Alpine.js](https://alpinejs.dev) | [deploy-alpinejs](./deploy-alpinejs/) |
| [Vite](https://vitejs.dev) | [deploy-vite](./deploy-vite/) |

### Full-Stack & SSR

| Framework | Guide |
|---|---|
| [Next.js](https://nextjs.org) | [deploy-nextjs](./deploy-nextjs/) |
| [Nuxt](https://nuxt.com) | [deploy-nuxt](./deploy-nuxt/) |
| [Remix](https://remix.run) | [deploy-remix](./deploy-remix/) |
| [Astro](https://astro.build) | [deploy-astro](./deploy-astro/) |
| [Angular SSR](https://angular.dev/guide/ssr) | [deploy-angular-ssr](./deploy-angular-ssr/) |
| [SolidStart](https://start.solidjs.com) | [deploy-solidstart](./deploy-solidstart/) |
| [QwikCity](https://qwik.dev) | [deploy-qwikcity](./deploy-qwikcity/) |
| [TanStack Start](https://tanstack.com/start) | [deploy-tanstack-start](./deploy-tanstack-start/) |

### Static Site Generators

| Framework | Guide |
|---|---|
| [Gatsby](https://www.gatsbyjs.com) | [deploy-gatsby](./deploy-gatsby/) |
| [Gridsome](https://gridsome.org) | [deploy-gridsome](./deploy-gridsome/) |
| [Eleventy](https://www.11ty.dev) | [deploy-eleventy](./deploy-eleventy/) |
| [Hexo](https://hexo.io) | [deploy-hexo](./deploy-hexo/) |
| [Docusaurus](https://docusaurus.io) | [deploy-docusaurus](./deploy-docusaurus/) |
| [MkDocs](https://www.mkdocs.org) | [deploy-mkdocs](./deploy-mkdocs/) |
| [Sphinx](https://www.sphinx-doc.org) | [deploy-sphinx](./deploy-sphinx/) |

### Python

| Framework | Guide |
|---|---|
| [Django](https://www.djangoproject.com) | [deploy-django](./deploy-django/) |
| [FastAPI](https://fastapi.tiangolo.com) | [deploy-fastapi](./deploy-fastapi/) |
| [Flask](https://flask.palletsprojects.com) | [deploy-flask](./deploy-flask/) |
| [Starlette](https://www.starlette.io) | [deploy-starlette](./deploy-starlette/) |
| [Falcon](https://falconframework.org) | [deploy-falcon](./deploy-falcon/) |
| [Quart](https://quart.palletsprojects.com) | [deploy-quart](./deploy-quart/) |
| [Gradio](https://www.gradio.app) | [deploy-gradio](./deploy-gradio/) |
| [Streamlit](https://streamlit.io) | [deploy-streamlit](./deploy-streamlit/) |

### Ruby

| Framework | Guide |
|---|---|
| [Rails](https://rubyonrails.org) | [deploy-rails](./deploy-rails/) |

### PHP

| Framework | Guide |
|---|---|
| [Laravel](https://laravel.com) | [deploy-laravel](./deploy-laravel/) |
| [Symfony](https://symfony.com) | [deploy-symfony](./deploy-symfony/) |

### Java

| Framework | Guide |
|---|---|
| [Spring Boot](https://spring.io/projects/spring-boot) | [deploy-spring-boot](./deploy-spring-boot/) |
| [Quarkus](https://quarkus.io) | [deploy-quarkus](./deploy-quarkus/) |
| [Micronaut](https://micronaut.io) | [deploy-micronaut](./deploy-micronaut/) |

### .NET

| Framework | Guide |
|---|---|
| [ASP.NET Core](https://dotnet.microsoft.com/apps/aspnet) | [deploy-aspnet-core](./deploy-aspnet-core/) |
| [Blazor Server](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor) | [deploy-blazor-server](./deploy-blazor-server/) |
| [Blazor WebAssembly](https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor) | [deploy-blazor-wasm](./deploy-blazor-wasm/) |
| [Worker Service](https://learn.microsoft.com/en-us/dotnet/core/extensions/workers) | [deploy-worker-service](./deploy-worker-service/) |

### Go

| Framework | Guide |
|---|---|
| [Gin](https://gin-gonic.com) | [deploy-gin](./deploy-gin/) |
| [Echo](https://echo.labstack.com) | [deploy-echo](./deploy-echo/) |
| [Fiber](https://gofiber.io) | [deploy-fiber](./deploy-fiber/) |
| [Chi](https://go-chi.io) | [deploy-chi](./deploy-chi/) |
| [Iris](https://www.iris-go.com) | [deploy-iris](./deploy-iris/) |

### Rust

| Framework | Guide |
|---|---|
| [Actix Web](https://actix.rs) | [deploy-actix-web](./deploy-actix-web/) |
| [Rocket](https://rocket.rs) | [deploy-rocket](./deploy-rocket/) |
| [Warp](https://github.com/seanmonstar/warp) | [deploy-warp](./deploy-warp/) |
| [Tide](https://github.com/http-rs/tide) | [deploy-tide](./deploy-tide/) |
| [Thruster](https://github.com/thruster-rs/thruster) | [deploy-thruster](./deploy-thruster/) |
| [Salvo](https://salvo.rs) | [deploy-salvo](./deploy-salvo/) |
| [Gotham](https://gotham.rs) | [deploy-gotham](./deploy-gotham/) |

---

## Resources

- [Deploy With Git:Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git:Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [CI/CD with GitHub Webhooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [Environment Variables & Secrets](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
- [Flux Network](https://runonflux.com)
