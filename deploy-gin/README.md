# Deploying a Gin App on Flux Network with Deploy With Git

This is a minimal Gin "Hello World" app ready to be deployed on [Flux Network](https://runonflux.com) using the [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/) feature.

## What is Deploy With Git?

[Deploy With Git](https://orbit.app.runonflux.io/) lets you deploy directly from a Git repository. Flux automatically detects your framework, installs dependencies, builds, and runs your app across its decentralized network of nodes.

---

## How Flux Detects Your Gin App

Flux identifies Go projects by looking for `go.mod`. It then:

1. Reads the Go version from `.go-version` or the `GO_VERSION` environment variable (defaults to the version in `go.mod`)
2. Downloads dependencies via `go mod download`
3. Compiles a static binary with `go build`
4. Runs the compiled binary

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it's private.

### 2. Register your app on FluxCloud

Click the button below to open the deployment wizard pre-filled for this project:

[<img width="140" height="28" alt="deploy3" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git&branch=master&projectPath=deploy-gin&plan=free)

Or follow the manual steps:

1. Go to [https://orbit.app.runonflux.io/](https://orbit.app.runonflux.io/)
2. **Login or create an account**
3. Click **Start Deploying** on your preferred plan
4. Paste your **Repository URL**, select your **branch** and the **path** (e.g., `deploy-gin/` if it's inside a monorepo), then click **Continue**
   - For private repos, provide your GitHub access token
5. Fill in the configuration form (see [Configuration](#configuration) below) and click **Continue**
6. **Review and Register** your app

Flux will deploy your app across multiple nodes for high availability. Your site will be live at a URL like:

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

Set this to `8080` (the port the app listens on by default). This must match the port your app actually serves on — Flux uses this value to configure Docker port mappings correctly.

### Custom Domain (Optional)

Enter your own domain here. You'll need to configure your DNS separately to [point to Flux](https://docs.runonflux.com/fluxcloud/wordpress/custom-domain-setup/).

### Advanced Options

- **Auto-Update Polling Interval**: how often Flux checks your repository for new commits. Defaults to **24 hours**. For instant deploys on every push, set up a GitHub Webhook and add `WEBHOOK_SECRET` to your environment variables instead.
- **Enterprise App**: encrypts your app specifications, secrets and ENVs and runs exclusively on ArcaneOS nodes for enhanced security and privacy.

### Runtime Version (Optional)

Flux auto-detects the Go version from `.go-version` in your repository. Only fill this in if you need a specific version. This project includes a `.go-version` file pinning Go 1.21, so no manual selection is needed.

### Environment Variables (Optional)

Flux exposes a set of **Git Variables** you can configure to override auto-detected behaviour:

| Git Variable | Description | Default |
|---|---|---|
| `PORT` | Port the server listens on | `8080` |
| `GO_VERSION` | Go version to use | `1.21` (from `.go-version`) |
| `BUILD_COMMAND` | Custom build command | `go build` |
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

## Running Locally

```bash
go run .
```

Open [http://localhost:8080](http://localhost:8080) to see the app.

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git — Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [Deploying Go Apps on Flux](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-go)
- [GitHub Webhooks CI/CD](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
