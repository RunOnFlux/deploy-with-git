# Deploying a Sphinx Site on Flux Network with Deploy With Git

This is a minimal Sphinx "Hello World" site ready to be deployed on [Flux Network](https://runonflux.com) using the [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/) feature.

## What is Deploy With Git?

[Deploy With Git](https://cloud.runonflux.com/apps/register) lets you deploy directly from a Git repository. Flux automatically detects your framework, installs dependencies, builds, and runs your app across its decentralized network of nodes.

---

## How Flux Detects Your Sphinx Site

Flux identifies Python projects by looking for `requirements.txt`, `pyproject.toml`, or `setup.py`. It then:

1. Reads the Python version from `.python-version` or the `PYTHON_VERSION` environment variable (defaults to `3.11`)
2. Installs dependencies via `pip install -r requirements.txt`
3. Runs `post-build.sh`, which executes `sphinx-build -b html docs dist` to generate the `dist/` directory
4. Detects `dist/` as static output and serves it with the built-in static file server — no separate Python process needed at runtime

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it's private.

### 2. Register your app on FluxCloud

1. Go to [https://cloud.runonflux.com/apps/register](https://cloud.runonflux.com/apps/register) and choose Deploy with Git
2. **Login or create an account**
3. Click **Start Deploying** on your preferred plan
4. Paste your **Repository URL**, select your **branch** and the **path** (e.g., `deploy-sphinx/` if it's inside a monorepo), then click **Continue**
   - For private repos, provide your GitHub access token
5. Fill in the configuration form (see [Configuration](#configuration) below) and click **Continue**
6. **Review and Register** your app

Flux will deploy your app across multiple nodes for high availability. Your site will be live at a URL like:
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

Flux auto-detects the port for static sites. The default is `80`. No changes needed.

### Custom Domain (Optional)

Enter your own domain here. You'll need to configure your DNS separately to [point to Flux](https://docs.runonflux.com/fluxcloud/wordpress/custom-domain-setup/).

### Advanced Options

- **Auto-Update Polling Interval**: how often Flux checks your repository for new commits. Defaults to **24 hours**. For instant deploys on every push, set up a GitHub Webhook and add `WEBHOOK_SECRET` to your environment variables instead.
- **Enterprise App**: encrypts your app specifications, secrets and ENVs and runs exclusively on ArcaneOS nodes for enhanced security and privacy.

### Runtime Version (Optional)

Flux auto-detects your Python version from `.python-version` in your repository. Only fill this in if you need a specific version. Select **Python** and enter a version (e.g., `3.11`, `3.12`). This project includes a `.python-version` file pinning Python 3.11, so no manual selection is needed.

### Environment Variables (Optional)

Flux exposes a set of **Git Variables** you can configure to override auto-detected behaviour:

| Git Variable | Description | Default |
|---|---|---|
| `BUILD_COMMAND` | Custom build command | `sphinx-build -b html docs dist` (via `post-build.sh`) |
| `WEBHOOK_SECRET` | Enables instant CI/CD via GitHub Webhooks | — |

---

## Deployment Hooks

This project uses a `post-build.sh` hook to build the Sphinx site after dependencies are installed:

```bash
#!/bin/bash
set -e
sphinx-build -b html docs dist
```

This generates the `dist/` directory, which Flux then serves as a static site.

You can also add a **`post-deploy.sh`** — runs after the site goes live:
```bash
#!/bin/bash
set -e
echo "Site is live!"
```

No `chmod +x` needed — Flux runs these automatically.

See the full guide: [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)

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
pip install -r requirements.txt
sphinx-build -b html docs dist
```

Open `dist/index.html` in your browser, or run a local server:
```bash
python -m http.server 8000 --directory dist
```

Open [http://localhost:8000](http://localhost:8000) to see the site.

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git — Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [Deploying Python Apps on Flux](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-python)
- [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)
- [GitHub Webhooks CI/CD](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
