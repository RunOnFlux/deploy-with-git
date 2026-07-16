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

Environment variables are injected at runtime and never stored in your repository. For production workloads requiring the highest level of security, **Enterprise Mode** encrypts your entire app specification (including all environment variables and secrets) and runs exclusively on verified [ArcaneOS](https://docs.runonflux.com/fluxnodes/arcaneos-fluxnode/) nodes. Your secrets are never exposed in plaintext anywhere in the deployment pipeline.

---

## Get Started

1. Go to [orbit.app.runonflux.io/](https://orbit.app.runonflux.io/)
2. Paste your repository URL and select your branch
3. Set your port and any environment variables
4. Click **Register** and your app is live

> See the full guide: [Deploy With Git:Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)

---

## Example Apps by Framework

<table width="100%">
  <thead>
    <tr>
      <th align="left">Framework</th>
      <th align="left">Guide</th>
      <th align="center">Deploy</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td colspan="3"><strong>Node.js</strong></td>
    </tr>
    <tr>
      <td><a href="https://expressjs.com">Express</a></td>
      <td><a href="./deploy-express/">deploy-express/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-express&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://fastify.dev">Fastify</a></td>
      <td><a href="./deploy-fastify/">deploy-fastify/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-fastify&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nestjs.com">NestJS</a></td>
      <td><a href="./deploy-nestjs/">deploy-nestjs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-nestjs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://adonisjs.com">AdonisJS</a></td>
      <td><a href="./deploy-adonisjs/">deploy-adonisjs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-adonisjs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://loopback.io">LoopBack</a></td>
      <td><a href="./deploy-loopback/">deploy-loopback/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-loopback&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Bun</strong></td>
    </tr>
    <tr>
      <td><a href="https://elysiajs.com">Elysia</a></td>
      <td><a href="./deploy-elysia/">deploy-elysia/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-elysia&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://hono.dev">Hono</a></td>
      <td><a href="./deploy-hono-bun/">deploy-hono-bun/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-hono-bun&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Frontend</strong></td>
    </tr>
    <tr>
      <td><a href="https://react.dev">React</a></td>
      <td><a href="./deploy-react/">deploy-react/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-react&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://vuejs.org">Vue.js</a></td>
      <td><a href="./deploy-vue/">deploy-vue/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-vue&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://angular.dev">Angular</a></td>
      <td><a href="./deploy-angular/">deploy-angular/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-angular&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://svelte.dev">Svelte</a></td>
      <td><a href="./deploy-svelte/">deploy-svelte/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-svelte&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://preactjs.com">Preact</a></td>
      <td><a href="./deploy-preact/">deploy-preact/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-preact&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://alpinejs.dev">Alpine.js</a></td>
      <td><a href="./deploy-alpinejs/">deploy-alpinejs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-alpinejs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://vitejs.dev">Vite</a></td>
      <td><a href="./deploy-vite/">deploy-vite/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-vite&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Full-Stack & SSR</strong></td>
    </tr>
    <tr>
      <td><a href="https://nextjs.org">Next.js</a></td>
      <td><a href="./deploy-nextjs/">deploy-nextjs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-nextjs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nextjs.org">Next.js + PostgreSQL</a></td>
      <td><a href="./deploy-nextjs-db/">deploy-nextjs-db/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-nextjs-db&plan=custom"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nextjs.org">Next.js + MySQL</a></td>
      <td><a href="./deploy-nextjs-mysql/">deploy-nextjs-mysql/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-nextjs-mysql&plan=custom"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nuxt.com">Nuxt</a></td>
      <td><a href="./deploy-nuxt/">deploy-nuxt/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-nuxt&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://remix.run">Remix</a></td>
      <td><a href="./deploy-remix/">deploy-remix/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-remix&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://astro.build">Astro</a></td>
      <td><a href="./deploy-astro/">deploy-astro/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-astro&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://angular.dev/guide/ssr">Angular SSR</a></td>
      <td><a href="./deploy-angular-ssr/">deploy-angular-ssr/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-angular-ssr&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://start.solidjs.com">SolidStart</a></td>
      <td><a href="./deploy-solidstart/">deploy-solidstart/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-solidstart&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://qwik.dev">QwikCity</a></td>
      <td><a href="./deploy-qwikcity/">deploy-qwikcity/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-qwikcity&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://tanstack.com/start">TanStack Start</a></td>
      <td><a href="./deploy-tanstack-start/">deploy-tanstack-start/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-tanstack-start&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Static Site Generators</strong></td>
    </tr>
    <tr>
      <td><a href="https://www.gatsbyjs.com">Gatsby</a></td>
      <td><a href="./deploy-gatsby/">deploy-gatsby/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-gatsby&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://gridsome.org">Gridsome</a></td>
      <td><a href="./deploy-gridsome/">deploy-gridsome/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-gridsome&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.11ty.dev">Eleventy</a></td>
      <td><a href="./deploy-eleventy/">deploy-eleventy/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-eleventy&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://hexo.io">Hexo</a></td>
      <td><a href="./deploy-hexo/">deploy-hexo/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-hexo&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://docusaurus.io">Docusaurus</a></td>
      <td><a href="./deploy-docusaurus/">deploy-docusaurus/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-docusaurus&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.mkdocs.org">MkDocs</a></td>
      <td><a href="./deploy-mkdocs/">deploy-mkdocs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-mkdocs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.sphinx-doc.org">Sphinx</a></td>
      <td><a href="./deploy-sphinx/">deploy-sphinx/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-sphinx&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Python</strong></td>
    </tr>
    <tr>
      <td><a href="https://www.djangoproject.com">Django</a></td>
      <td><a href="./deploy-django/">deploy-django/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-django&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://fastapi.tiangolo.com">FastAPI</a></td>
      <td><a href="./deploy-fastapi/">deploy-fastapi/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-fastapi&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://flask.palletsprojects.com">Flask</a></td>
      <td><a href="./deploy-flask/">deploy-flask/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-flask&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.starlette.io">Starlette</a></td>
      <td><a href="./deploy-starlette/">deploy-starlette/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-starlette&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://falconframework.org">Falcon</a></td>
      <td><a href="./deploy-falcon/">deploy-falcon/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-falcon&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://quart.palletsprojects.com">Quart</a></td>
      <td><a href="./deploy-quart/">deploy-quart/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-quart&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.gradio.app">Gradio</a></td>
      <td><a href="./deploy-gradio/">deploy-gradio/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-gradio&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://streamlit.io">Streamlit</a></td>
      <td><a href="./deploy-streamlit/">deploy-streamlit/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-streamlit&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Ruby</strong></td>
    </tr>
    <tr>
      <td><a href="https://rubyonrails.org">Rails</a></td>
      <td><a href="./deploy-rails/">deploy-rails/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-rails&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>PHP</strong></td>
    </tr>
    <tr>
      <td><a href="https://laravel.com">Laravel</a></td>
      <td><a href="./deploy-laravel/">deploy-laravel/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-laravel&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://symfony.com">Symfony</a></td>
      <td><a href="./deploy-symfony/">deploy-symfony/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-symfony&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Java</strong></td>
    </tr>
    <tr>
      <td><a href="https://spring.io/projects/spring-boot">Spring Boot</a></td>
      <td><a href="./deploy-spring-boot/">deploy-spring-boot/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-spring-boot&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://quarkus.io">Quarkus</a></td>
      <td><a href="./deploy-quarkus/">deploy-quarkus/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-quarkus&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://micronaut.io">Micronaut</a></td>
      <td><a href="./deploy-micronaut/">deploy-micronaut/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-micronaut&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>.NET</strong></td>
    </tr>
    <tr>
      <td><a href="https://dotnet.microsoft.com/apps/aspnet">ASP.NET Core</a></td>
      <td><a href="./deploy-aspnet-core/">deploy-aspnet-core/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-aspnet-core&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">Blazor Server</a></td>
      <td><a href="./deploy-blazor-server/">deploy-blazor-server/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-blazor-server&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">Blazor WebAssembly</a></td>
      <td><a href="./deploy-blazor-wasm/">deploy-blazor-wasm/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-blazor-wasm&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://learn.microsoft.com/en-us/dotnet/core/extensions/workers">Worker Service</a></td>
      <td><a href="./deploy-worker-service/">deploy-worker-service/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-worker-service&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Go</strong></td>
    </tr>
    <tr>
      <td><a href="https://gin-gonic.com">Gin</a></td>
      <td><a href="./deploy-gin/">deploy-gin/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-gin&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://echo.labstack.com">Echo</a></td>
      <td><a href="./deploy-echo/">deploy-echo/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-echo&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://gofiber.io">Fiber</a></td>
      <td><a href="./deploy-fiber/">deploy-fiber/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-fiber&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://go-chi.io">Chi</a></td>
      <td><a href="./deploy-chi/">deploy-chi/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-chi&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.iris-go.com">Iris</a></td>
      <td><a href="./deploy-iris/">deploy-iris/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-iris&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Rust</strong></td>
    </tr>
    <tr>
      <td><a href="https://actix.rs">Actix Web</a></td>
      <td><a href="./deploy-actix-web/">deploy-actix-web/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-actix-web&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://rocket.rs">Rocket</a></td>
      <td><a href="./deploy-rocket/">deploy-rocket/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-rocket&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/seanmonstar/warp">Warp</a></td>
      <td><a href="./deploy-warp/">deploy-warp/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-warp&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/http-rs/tide">Tide</a></td>
      <td><a href="./deploy-tide/">deploy-tide/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-tide&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/thruster-rs/thruster">Thruster</a></td>
      <td><a href="./deploy-thruster/">deploy-thruster/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-thruster&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://salvo.rs">Salvo</a></td>
      <td><a href="./deploy-salvo/">deploy-salvo/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-salvo&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://gotham.rs">Gotham</a></td>
      <td><a href="./deploy-gotham/">deploy-gotham/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-gotham&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
  </tbody>
</table>

---

## Resources

- [Deploy With Git:Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git:Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [CI/CD with GitHub Webhooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [Environment Variables & Secrets](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
- [Flux Network](https://runonflux.com)
