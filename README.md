# Deploy With Git: Example Apps

A collection of "Hello World" apps demonstrating how to deploy any framework to [Flux Network](https://runonflux.com) using the **Deploy With Git** feature. No CI pipelines, no Docker knowledge, no infrastructure to manage.

---

## What is Deploy With Git?

[Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/) lets you deploy directly from a GitHub repository to Flux's decentralized cloud in minutes. Point it at your repo, and Flux handles the rest:

- **Auto-detects your framework**: Node.js, Bun, Python, Ruby, PHP, Elixir, Erlang, Dart, Java, .NET, Go, Rust, and more
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
      <td><a href="./express/">express/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=express&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://fastify.dev">Fastify</a></td>
      <td><a href="./fastify/">fastify/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=fastify&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nestjs.com">NestJS</a></td>
      <td><a href="./nestjs/">nestjs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=nestjs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://adonisjs.com">AdonisJS</a></td>
      <td><a href="./adonisjs/">adonisjs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=adonisjs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://loopback.io">LoopBack</a></td>
      <td><a href="./loopback/">loopback/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=loopback&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Bun</strong></td>
    </tr>
    <tr>
      <td><a href="https://elysiajs.com">Elysia</a></td>
      <td><a href="./elysia/">elysia/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=elysia&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://hono.dev">Hono</a></td>
      <td><a href="./hono-bun/">hono-bun/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=hono-bun&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Frontend</strong></td>
    </tr>
    <tr>
      <td><a href="https://react.dev">React</a></td>
      <td><a href="./react/">react/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=react&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://vuejs.org">Vue.js</a></td>
      <td><a href="./vue/">vue/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=vue&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://angular.dev">Angular</a></td>
      <td><a href="./angular/">angular/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=angular&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://svelte.dev">Svelte</a></td>
      <td><a href="./svelte/">svelte/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=svelte&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://preactjs.com">Preact</a></td>
      <td><a href="./preact/">preact/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=preact&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://alpinejs.dev">Alpine.js</a></td>
      <td><a href="./alpinejs/">alpinejs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=alpinejs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://vitejs.dev">Vite</a></td>
      <td><a href="./vite/">vite/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=vite&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Full-Stack & SSR</strong></td>
    </tr>
    <tr>
      <td><a href="https://nextjs.org">Next.js</a></td>
      <td><a href="./nextjs/">nextjs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=nextjs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nextjs.org">Next.js + PostgreSQL</a></td>
      <td><a href="./nextjs-db/">nextjs-db/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=nextjs-db&plan=custom"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nextjs.org">Next.js + MySQL</a></td>
      <td><a href="./nextjs-mysql/">nextjs-mysql/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=nextjs-mysql&plan=custom"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://nuxt.com">Nuxt</a></td>
      <td><a href="./nuxt/">nuxt/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=nuxt&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://remix.run">Remix</a></td>
      <td><a href="./remix/">remix/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=remix&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://astro.build">Astro</a></td>
      <td><a href="./astro/">astro/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=astro&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://angular.dev/guide/ssr">Angular SSR</a></td>
      <td><a href="./angular-ssr/">angular-ssr/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=angular-ssr&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://start.solidjs.com">SolidStart</a></td>
      <td><a href="./solidstart/">solidstart/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=solidstart&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://qwik.dev">QwikCity</a></td>
      <td><a href="./qwikcity/">qwikcity/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=qwikcity&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://tanstack.com/start">TanStack Start</a></td>
      <td><a href="./tanstack-start/">tanstack-start/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=tanstack-start&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Static Site Generators</strong></td>
    </tr>
    <tr>
      <td><a href="https://www.gatsbyjs.com">Gatsby</a></td>
      <td><a href="./gatsby/">gatsby/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=gatsby&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://gridsome.org">Gridsome</a></td>
      <td><a href="./gridsome/">gridsome/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=gridsome&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.11ty.dev">Eleventy</a></td>
      <td><a href="./eleventy/">eleventy/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=eleventy&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://hexo.io">Hexo</a></td>
      <td><a href="./hexo/">hexo/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=hexo&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://docusaurus.io">Docusaurus</a></td>
      <td><a href="./docusaurus/">docusaurus/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=docusaurus&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.mkdocs.org">MkDocs</a></td>
      <td><a href="./mkdocs/">mkdocs/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=mkdocs&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.sphinx-doc.org">Sphinx</a></td>
      <td><a href="./sphinx/">sphinx/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=sphinx&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Python</strong></td>
    </tr>
    <tr>
      <td><a href="https://www.djangoproject.com">Django</a></td>
      <td><a href="./django/">django/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=django&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://fastapi.tiangolo.com">FastAPI</a></td>
      <td><a href="./fastapi/">fastapi/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=fastapi&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://flask.palletsprojects.com">Flask</a></td>
      <td><a href="./flask/">flask/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=flask&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.starlette.io">Starlette</a></td>
      <td><a href="./starlette/">starlette/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=starlette&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://falconframework.org">Falcon</a></td>
      <td><a href="./falcon/">falcon/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=falcon&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://quart.palletsprojects.com">Quart</a></td>
      <td><a href="./quart/">quart/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=quart&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.gradio.app">Gradio</a></td>
      <td><a href="./gradio/">gradio/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=gradio&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://streamlit.io">Streamlit</a></td>
      <td><a href="./streamlit/">streamlit/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=streamlit&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Ruby</strong></td>
    </tr>
    <tr>
      <td><a href="https://rubyonrails.org">Rails</a></td>
      <td><a href="./rails/">rails/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=rails&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>PHP</strong></td>
    </tr>
    <tr>
      <td><a href="https://laravel.com">Laravel</a></td>
      <td><a href="./laravel/">laravel/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=laravel&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://symfony.com">Symfony</a></td>
      <td><a href="./symfony/">symfony/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=symfony&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Elixir</strong></td>
    </tr>
    <tr>
      <td><a href="https://elixir-lang.org">Elixir/OTP</a></td>
      <td><a href="./elixir/">elixir/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=elixir&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Erlang</strong></td>
    </tr>
    <tr>
      <td><a href="https://www.erlang.org">Erlang/OTP</a></td>
      <td><a href="./erlang/">erlang/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=erlang&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Dart</strong></td>
    </tr>
    <tr>
      <td><a href="https://dart.dev/server">Dart HTTP</a></td>
      <td><a href="./dart/">dart/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=dart&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Java</strong></td>
    </tr>
    <tr>
      <td><a href="https://spring.io/projects/spring-boot">Spring Boot</a></td>
      <td><a href="./spring-boot/">spring-boot/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=spring-boot&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://quarkus.io">Quarkus</a></td>
      <td><a href="./quarkus/">quarkus/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=quarkus&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://micronaut.io">Micronaut</a></td>
      <td><a href="./micronaut/">micronaut/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=micronaut&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>.NET</strong></td>
    </tr>
    <tr>
      <td><a href="https://dotnet.microsoft.com/apps/aspnet">ASP.NET Core</a></td>
      <td><a href="./aspnet-core/">aspnet-core/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=aspnet-core&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">Blazor Server</a></td>
      <td><a href="./blazor-server/">blazor-server/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=blazor-server&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://dotnet.microsoft.com/apps/aspnet/web-apps/blazor">Blazor WebAssembly</a></td>
      <td><a href="./blazor-wasm/">blazor-wasm/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=blazor-wasm&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://learn.microsoft.com/en-us/dotnet/core/extensions/workers">Worker Service</a></td>
      <td><a href="./worker-service/">worker-service/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=worker-service&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Go</strong></td>
    </tr>
    <tr>
      <td><a href="https://gin-gonic.com">Gin</a></td>
      <td><a href="./gin/">gin/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=gin&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://echo.labstack.com">Echo</a></td>
      <td><a href="./echo/">echo/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=echo&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://gofiber.io">Fiber</a></td>
      <td><a href="./fiber/">fiber/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=fiber&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://go-chi.io">Chi</a></td>
      <td><a href="./chi/">chi/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=chi&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://www.iris-go.com">Iris</a></td>
      <td><a href="./iris/">iris/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=iris&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td colspan="3"><strong>Rust</strong></td>
    </tr>
    <tr>
      <td><a href="https://actix.rs">Actix Web</a></td>
      <td><a href="./actix-web/">actix-web/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=actix-web&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://rocket.rs">Rocket</a></td>
      <td><a href="./rocket/">rocket/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=rocket&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/seanmonstar/warp">Warp</a></td>
      <td><a href="./warp/">warp/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=warp&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/http-rs/tide">Tide</a></td>
      <td><a href="./tide/">tide/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=tide&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://github.com/thruster-rs/thruster">Thruster</a></td>
      <td><a href="./thruster/">thruster/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=thruster&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://salvo.rs">Salvo</a></td>
      <td><a href="./salvo/">salvo/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=salvo&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
    </tr>
    <tr>
      <td><a href="https://gotham.rs">Gotham</a></td>
      <td><a href="./gotham/">gotham/</a></td>
      <td align="center"><a href="https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=gotham&plan=free"><img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" /></a></td>
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
