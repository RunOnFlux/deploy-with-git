# Deploying a Blazor WebAssembly App on Flux Network with Deploy With Git

This is a minimal Blazor WebAssembly "Hello World" app ready to be deployed on [Flux Network](https://runonflux.com) using the [Deploy With Git](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/) feature.

## What is Deploy With Git?

[Deploy With Git](https://cloud.runonflux.com/apps/register) lets you deploy directly from a Git repository. Flux automatically detects your framework, installs dependencies, builds, and runs your app across its decentralized network of nodes.

---

## Project Structure

This project uses the **hosted Blazor WebAssembly** model — an ASP.NET Core server that serves the WebAssembly client:

```
deploy-blazor-wasm/
├── deploy-blazor-wasm.csproj   ← ASP.NET Core server (serves the WASM app)
├── Program.cs
└── Client/                     ← Blazor WASM client (runs in the browser)
    ├── Client.csproj
    ├── App.razor
    ├── Pages/Index.razor
    └── wwwroot/index.html
```

---

## How Flux Detects Your Blazor WASM App

Flux identifies .NET projects by looking for `*.csproj` files. It then:

1. Reads the .NET version from `TargetFramework` in the `.csproj` (defaults to .NET 8.0 LTS)
2. Installs the .NET SDK
3. Restores dependencies via `dotnet restore`
4. Publishes with `dotnet publish -c Release -o ./publish`, which builds both the server and the WASM client
5. Runs the server with `dotnet deploy-blazor-wasm.dll`

The server binds to `0.0.0.0:$PORT` automatically via the `ASPNETCORE_URLS` environment variable set by Flux. It serves the compiled Blazor WASM app as static files.

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it's private.

### 2. Register your app on FluxCloud

1. Go to [https://cloud.runonflux.com/apps/register](https://cloud.runonflux.com/apps/register) and choose Deploy with Git
2. **Login or create an account**
3. Click **Start Deploying** on your preferred plan
4. Paste your **Repository URL**, select your **branch** and the **path** (e.g., `deploy-blazor-wasm/` if it's inside a monorepo), then click **Continue**
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

Set this to `8080` (the port the app listens on by default). This must match the port your app actually serves on — Flux uses this value to configure Docker port mappings correctly.

### Custom Domain (Optional)

Enter your own domain here. You'll need to configure your DNS separately to [point to Flux](https://docs.runonflux.com/fluxcloud/wordpress/custom-domain-setup/).

### Advanced Options

- **Auto-Update Polling Interval**: how often Flux checks your repository for new commits. Defaults to **24 hours**. For instant deploys on every push, set up a GitHub Webhook and add `WEBHOOK_SECRET` to your environment variables instead.
- **Enterprise App**: encrypts your app specifications, secrets and ENVs and runs exclusively on ArcaneOS nodes for enhanced security and privacy.

### Runtime Version (Optional)

Flux auto-detects the .NET version from `TargetFramework` in `deploy-blazor-wasm.csproj`. Only fill this in if you need a specific version. This project targets `net8.0`, so no manual selection is needed.

### Environment Variables (Optional)

Flux exposes a set of **Git Variables** you can configure to override auto-detected behaviour:

| Git Variable | Description | Default |
|---|---|---|
| `PORT` | Port the server listens on | `8080` |
| `DOTNET_VERSION` | .NET SDK version to use | `8.0` (from `TargetFramework`) |
| `BUILD_COMMAND` | Custom build command | `dotnet publish -c Release -o ./publish` |
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
dotnet run
```

Open [http://localhost:8080](http://localhost:8080) to see the app.

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deploy With Git — Introduction](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/introduction)
- [Deploying .NET Apps on Flux](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/guides/deploying-dotnet)
- [GitHub Webhooks CI/CD](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/ci-cd/github-webhooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
