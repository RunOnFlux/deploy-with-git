# Deploying an AdonisJS App on Flux Network with Deploy With Git

This is a minimal AdonisJS 6 "Hello World" app ready to be deployed on [Flux Network](https://runonflux.com) using the [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/) feature.

## What is Deploy With Git?

[Deploy With Git](https://orbit.app.runonflux.io/) lets you deploy directly from a Git repository. Flux automatically detects your framework, installs dependencies, builds, and runs your app across its decentralized network of nodes.

---

## How Flux Detects Your AdonisJS App

Flux identifies Node.js projects by looking for `package.json` and lock files. It then:

1. Reads the Node version from `.nvmrc` or `engines.node` in `package.json`
2. Detects your package manager (npm / yarn / pnpm)
3. Runs `npm install` → `npm run build` → `npm start`

AdonisJS compiles TypeScript to JavaScript using `node ace build`. A `post-build.sh` hook moves the compiled output into `dist/server/`, which Flux recognises as a Node.js server entry point. Flux then runs it as a persistent process.

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it's private.

### 2. Register your app on FluxCloud

Click the button below to open the deployment wizard pre-filled for this project:

[<img width="140" height="28" alt="deploy3" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-adonisjs&plan=free)

Or follow the manual steps:

1. Go to [https://orbit.app.runonflux.io/](https://orbit.app.runonflux.io/)
2. **Login or create an account**
3. Click **Start Deploying** on your preferred plan
4. Paste your **Repository URL**, select your **branch** and the **path** (e.g., `deploy-adonisjs/` if it's inside a monorepo), then click **Continue**
   - For private repos, provide your GitHub access token
5. Fill in the configuration form (see [Configuration](#configuration) below) and click **Continue**
6. **Review and Register** your app

Flux will deploy your app across multiple nodes for high availability. Your app will be live at a URL like:

```
https://YOUR-APP-NAME.app.runonflux.com
```

> **Add Deploy to Flux button to your own project:**
> ```
> [<img width="140" height="28" alt="deploy3" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://your-repo&branch=main&projectPath=/)
> ```

---

## Configuration

This section explains each field on the app configuration page.

### Application Name & Contact Email

- **Application Name**: lowercase letters, numbers, and hyphens only (3–32 characters)
- **Contact Email**: used for deployment notifications and alerts

### Application Port

Set this to `3333` (the port AdonisJS listens on by default). Flux will route external traffic to this port.

### Custom Domain (Optional)

Enter your own domain here. You'll need to configure your DNS separately to [point to Flux](https://docs.runonflux.com/fluxcloud/wordpress/custom-domain-setup/).

### Advanced Options

- **Auto-Update Polling Interval**: how often Flux checks your repository for new commits. Defaults to **24 hours**. For instant deploys on every push, set up a GitHub Webhook and add `WEBHOOK_SECRET` to your environment variables instead.
- **Enterprise App**: encrypts your app specifications, secrets and ENVs and runs exclusively on ArcaneOS nodes for enhanced security and privacy.

### Runtime Version (Optional)

Flux auto-detects your runtime from your repository. Only fill this in if you need a specific version. Select **Node.js** and enter a version (e.g., `18`, `20`, `22` — LTS versions recommended). This project includes a `.nvmrc` file pinning Node 20, so no manual selection is needed.

### Environment Variables (Optional)

Flux exposes a set of **Git Variables** you can configure to override auto-detected behaviour:

| Git Variable | Description | Default |
|---|---|---|
| `BUILD_COMMAND` | Custom build command | Auto-detected from `package.json` scripts (e.g. `build`) |
| `RUN_COMMAND` | Custom startup command | Auto-detected from `package.json` scripts (e.g. `start`) |
| `WEBHOOK_SECRET` | Enables instant CI/CD via GitHub Webhooks | — |

You can also set AdonisJS-specific variables:

| Variable | Description | Default |
|---|---|---|
| `APP_KEY` | Secret key for encryption/cookies | A default is set for demo purposes |
| `LOG_LEVEL` | Pino log level | `info` |

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

## Deployment Hooks

This project uses a `post-build.sh` hook to restructure the AdonisJS build output for Flux compatibility:

```bash
#!/bin/bash
set -e
mkdir -p dist
mv build dist/server
```

After `node ace build` compiles TypeScript to `build/`, the hook moves that directory to `dist/server/`. Flux detects `dist/server/` as a Node.js server entry point and runs `dist/server/bin/server.js`.

You can also add a **`post-deploy.sh`** — runs after the app starts successfully:
```bash
#!/bin/bash
set -e
echo "App is live!"
```

No `chmod +x` needed — Flux runs these automatically.

See the full guide: [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)

---

## Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3333](http://localhost:3333) to see the app.

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git — Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [Deploying Node.js Apps on Flux](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-nodejs)
- [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)
- [GitHub Webhooks CI/CD](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
