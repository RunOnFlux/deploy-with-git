# Deploying an Angular SSR App on Flux Network with Deploy With Git

This is a minimal Angular 19 SSR (Server-Side Rendering) "Hello World" app ready to be deployed on [Flux Network](https://runonflux.com) using the [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/) feature — no Docker required.

## What is Deploy With Git?

[Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction) lets you deploy directly from a Git repository. Flux automatically detects your framework, installs dependencies, builds, and runs your app across its decentralized network of nodes.

---

## SSR vs Standard Angular

Unlike a standard Angular app that builds to static files, Angular SSR runs a **Node.js Express server** that renders pages server-side on each request. This means:

- Pages are fully rendered HTML when they reach the browser (better SEO, faster first paint)
- A Node.js process must stay running — Flux handles this automatically
- The `start` script points to the compiled server bundle: `node dist/server/server.mjs`

---

## How Flux Detects Your Angular SSR App

Flux identifies Node.js projects by looking for `package.json` and lock files. It then:

1. Reads the Node version from `.nvmrc` or `engines.node` in `package.json`
2. Detects your package manager (npm / yarn / pnpm)
3. Runs `npm install` → `npm run build` → `npm run start`

The `start` script runs the compiled Express server, so Flux correctly detects this as `serve type: node` and keeps the process running.

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it's private.

### 2. Register your app on FluxCloud

1. Go to [https://cloud.runonflux.com/apps/register/orbit](https://cloud.runonflux.com/apps/register/orbit)
2. **Login or create an account**
3. Click **Start Deploying** on your preferred plan
4. Paste your **Repository URL**, select your **branch** and the **path** to this folder (e.g., `deploy-angular-ssr/` if it's inside a monorepo), then click **Continue**
   - For private repos, provide your GitHub access token
5. Fill in the configuration form (see [Configuration](#configuration) below) and click **Continue**
6. **Review and Register** your app

Flux will deploy your app across multiple nodes for high availability. Your app will be live at a URL like:
```
https://YOUR-APP-NAME.app.runonflux.com
```

---

## Configuration

This section explains each field on the app configuration page.

### Application Name & Contact Email

- **Application Name**: lowercase letters, numbers, and hyphens only (3–32 characters)
- **Contact Email**: used for deployment notifications and alerts

### Application Port

The Express server defaults to port `4000`. Flux will pre-fill this automatically. The `start` script reads the `PORT` environment variable so Flux can pass in the correct port at runtime:

```ts
const port = process.env["PORT"] || 4000;
```

### Custom Domain (Optional)

Enter your own domain here. You'll need to configure your DNS separately to point to Flux.

### Advanced Options

- **Auto-Update Polling Interval**: how often Flux checks your repository for new commits. Defaults to **24 hours**. For instant deploys on every push, set up a GitHub Webhook and add `WEBHOOK_SECRET` to your environment variables instead.
- **Enterprise App**: encrypts your app specifications and runs exclusively on ArcaneOS nodes for enhanced security and privacy.

### Runtime Version (Optional)

Flux auto-detects your runtime from your repository. Only fill this in if you need a specific version. Select **Node.js** and enter a version (e.g., `18`, `20`, `22` — LTS versions recommended). This project includes a `.nvmrc` file pinning Node 20, so no manual selection is needed.

### Environment Variables (Optional)

Flux exposes a set of **Git Variables** you can configure to override auto-detected behaviour:

| Git Variable | Description | Default |
|---|---|---|
| `BUILD_COMMAND` | Custom build command | Auto-detected from `package.json` scripts (e.g. `build`) |
| `RUN_COMMAND` | Custom startup command | Auto-detected from `package.json` scripts (e.g. `start`) |
| `WEBHOOK_SECRET` | Enables instant CI/CD via GitHub Webhooks | — |

---

## Automatic CI/CD with GitHub Webhooks

To automatically redeploy on every `git push`, set up a GitHub webhook:

1. In your Flux app dashboard, note the **webhook URL**:
   ```
   https://YOUR-APP-NAME-9001.app.runonflux.io/webhook
   ```
2. In your GitHub repo, go to **Settings → Webhooks → Add webhook**
3. Set:
   - **Payload URL**: the webhook URL above
   - **Content type**: `application/json`
   - **Secret**: your `WEBHOOK_SECRET` value (set this in Flux env vars too)
   - **Events**: select "Just the push event"

Every push to your branch will now trigger an automatic redeploy (~2 minutes). Flux automatically rolls back to the previous version if the new build fails.

See the full guide: [GitHub Webhooks on Flux](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)

---

## Deployment Hooks (Optional)

You can run custom scripts at deployment time by adding hook files to the project root:

**`pre-deploy.sh`** — runs after dependencies install, before the build:
```bash
#!/bin/bash
set -e
echo "Running pre-deploy tasks..."
```

**`post-deploy.sh`** — runs after the app starts successfully:
```bash
#!/bin/bash
set -e
echo "App is live!"
```

No `chmod +x` needed — Flux runs these automatically. A failing `pre-deploy.sh` will trigger a rollback; a failing `post-deploy.sh` is logged as a warning only.

See the full guide: [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:4200](http://localhost:4200) to see the app.

To run the SSR server locally:

```bash
npm run build
npm run start
```

Open [http://localhost:4000](http://localhost:4000) to see the server-rendered app.

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git — Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [Deploying Node.js Apps on Flux](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-nodejs)
- [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)
- [GitHub Webhooks CI/CD](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
