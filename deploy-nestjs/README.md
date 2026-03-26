# Deploying a NestJS App on Flux Network with Deploy With Git

This is a minimal NestJS "Hello World" app ready to be deployed on [Flux Network](https://runonflux.com) using the [Deploy With Git](https://cloud.runonflux.com/apps/register/orbit) feature.

## What is Deploy With Git?

[Deploy With Git](https://cloud.runonflux.com/apps/register/orbit) lets you deploy directly from a Git repository. Flux automatically detects your framework, installs dependencies, builds, and runs your app across its decentralized network of nodes.

---

## How Flux Detects Your NestJS App

Flux identifies Node.js projects by looking for `package.json` and lock files. It then:

1. Reads the Node version from `.nvmrc` or `engines.node` in `package.json`
2. Detects your package manager (npm / yarn / pnpm)
3. Runs `npm install` → `npm run build` → `npm run start:prod`

The `start:prod` script runs the compiled output directly with `node dist/main`, which is the recommended way to run NestJS in production.

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it's private.

### 2. Register your app on FluxCloud

1. Go to [https://cloud.runonflux.com/apps/register/orbit](https://cloud.runonflux.com/apps/register/orbit)
2. **Login or create an account**
3. Click **Start Deploying** on your preferred plan
4. Paste your **Repository URL**, select your **branch** and the **path** to the folder (e.g., `deploy-nestjs/` if it's inside a monorepo), then click **Continue**
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

Flux auto-detects the port from your framework. For NestJS it will pre-fill `3000`. Only change this if your app listens on a different port.

The `main.ts` reads the `PORT` environment variable so Flux can pass in the correct port at runtime:

```ts
const port = process.env.PORT || 3000;
await app.listen(port);
```

### Custom Domain (Optional)

Enter your own domain here. You'll need to configure your DNS separately to [point to Flux](https://docs.runonflux.com/fluxcloud/wordpress/custom-domain-setup/).

### Advanced Options

- **Auto-Update Polling Interval**: how often Flux checks your repository for new commits. Defaults to **24 hours**. For instant deploys on every push, set up a GitHub Webhook and add `WEBHOOK_SECRET` to your environment variables instead.
- **Enterprise App**: encrypts your app specifications and runs exclusively on ArcaneOS nodes for enhanced security and privacy.

### Runtime Version (Optional)

Flux auto-detects your runtime from your repository. Only fill this in if you need a specific version. Select **Node.js** and enter a version (e.g., `18`, `20`, `22` — LTS versions recommended). This project includes a `.nvmrc` file pinning Node 20, so no manual selection is needed.

### Environment Variables (Optional)

Flux exposes a set of **Git Variables** you can configure to override auto-detected behaviour:

| Git Variable | Description | Default |
|---|---|---|
| `BUILD_COMMAND` | Custom build command | Auto-detected from `package.json` scripts (e.g. `build`, `build:prod`) |
| `RUN_COMMAND` | Custom startup command | Auto-detected from `package.json` scripts (e.g. `start:prod`, `serve`) |
| `WEBHOOK_SECRET` | Enables instant CI/CD via GitHub Webhooks | — |

For this project, `BUILD_COMMAND` and `RUN_COMMAND` are auto-detected, so you only need to add variables your app actually uses.

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
# e.g. run database migrations
```

**`post-deploy.sh`** — runs after the app starts successfully:
```bash
#!/bin/bash
set -e
echo "App is live!"
# e.g. send a Slack notification
```

No `chmod +x` needed — Flux runs these automatically. A failing `pre-deploy.sh` will trigger a rollback; a failing `post-deploy.sh` is logged as a warning only.

See the full guide: [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)

---

## Running Locally

```bash
npm install
npm run start:dev
```

Open [http://localhost:3000](http://localhost:3000) to see the JSON response:

```json
{
  "message": "Hello from Flux!",
  "framework": "NestJS",
  "network": "Flux Network"
}
```

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git — Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [Deploying Node.js Apps on Flux](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-nodejs)
- [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)
- [GitHub Webhooks CI/CD](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
