# Deploying a Next.js App with Redis on Flux Network

This is a Next.js todos demo that uses Redis for storage. It is designed for [Deploy With Git](https://orbit.app.runonflux.io/) with a managed Redis component defined in `flux.json`.

The app keeps running even when Redis is still coming online. Connection failures are logged and retried automatically in the background.

---

## What This Demo Shows

- Redis configured in `flux.json` / `flux.yaml`
- Todos CRUD stored in Redis
- Redis access through the `REDIS_URL` environment variable
- Graceful startup when Redis is offline, with automatic reconnect retries

---

## Redis Connection

This app reads its Redis connection string from the **`REDIS_URL`** environment variable.

- **On Flux:** set `REDIS_URL` in your app environment variables when registering or updating the deployment. Flux uses this value together with the `redis` block in `flux.json`.
- **Locally:** copy `.env.example` to `.env` and update the connection string for your Redis instance.

Example Flux value:

```bash
REDIS_URL=rediss://:password@redis:6380
```

Flux managed Redis uses TLS with a self-signed certificate. The app accepts that by default for `rediss://` URLs. Set `REDIS_TLS_REJECT_UNAUTHORIZED=true` only if your Redis instance uses a publicly trusted certificate.

No Redis credentials are stored in the repository.

---

## Resilient Connection Handling

Unlike a traditional database migration step, Redis may take a moment to become reachable after the app container starts.

This demo:

1. Creates a shared Redis client with automatic reconnect retries
2. Logs connection, error, and reconnect events to the container logs
3. Returns empty todo lists instead of crashing when Redis is unavailable
4. Keeps the Next.js server running while Redis comes online

The client uses ioredis `retryStrategy` with exponential backoff up to 10 seconds between attempts.

---

## Flux Configuration

This project requires a **custom** plan with at least **3 instances** when Redis is configured:

```json
{
  "version": "1.0",
  "plan": "custom",
  "appPort": 3000,
  "instances": 3,
  "cpu": 1,
  "ram": 512,
  "hdd": 10,
  "redis": {
    "cpu": 0.5,
    "ram": 512
  }
}
```

When registering the app, also provide:

| Environment Variable | Description |
|---|---|
| `REDIS_URL` | Redis connection string for the managed Redis instance |

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it is private.

### 2. Register your app on FluxCloud

Click the button below to open the deployment wizard pre-filled for this project:

[<img width="140" height="28" alt="deploy3" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=nextjs-redis&plan=custom)

Or follow the manual steps:

1. Go to [https://orbit.app.runonflux.io/](https://orbit.app.runonflux.io/)
2. Paste your repository URL, branch, and project path: `nextjs-redis/`
3. Use the **custom** plan settings from `flux.json`
4. Add the `REDIS_URL` environment variable with your Redis connection string
5. Review and register

Your app will be live at a URL like:

```
https://YOUR-APP-NAME.app.runonflux.com
```

> **Add Deploy to Flux button to your own project:**
> ```
> [<img width="140" height="28" alt="deploy3" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://your-repo&branch=main&projectPath=nextjs-redis&plan=custom)
> ```

---

## Running Locally

Start Redis locally, then:

```bash
cp .env.example .env
# edit .env with your local REDIS_URL

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
nextjs-redis/
├── app/
│   ├── actions/todos.ts      # Server actions for CRUD
│   ├── components/TodoList.tsx
│   └── page.tsx
├── lib/redis.ts              # Redis client with retry logging
├── flux.json
└── flux.yaml
```

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
