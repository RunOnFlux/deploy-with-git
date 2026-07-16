# Deploying a Next.js App with MySQL on Flux Network

This Next.js todos demo uses MySQL through Prisma. It is designed for [Deploy With Git](https://orbit.app.runonflux.io/) with a managed MySQL component defined in `flux.json` and `flux.yaml`.

The app initializes its schema during deployment using `pre-deploy.sh`, which retries until the database is reachable.

## What This Demo Shows

- A managed MySQL database configured with `database.type: mysql`
- A connection string supplied through `DATABASE_URL`
- Prisma migrations applied during deployment with retry logic
- Todo CRUD persisted in MySQL

## Database Connection

The app reads its MySQL connection string from the **`DATABASE_URL`** environment variable.

- **On Flux:** provide `DATABASE_URL` in the app environment variables when registering or updating the deployment.
- **Locally:** copy `.env.example` to `.env` and update the connection string for your MySQL instance.

Prisma reads the value in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
```

A typical connection string looks like:

```text
mysql://USER:PASSWORD@HOST:3306/DATABASE
```

No database credentials are stored in the repository.

## Schema Initialization

Flux runs `pre-deploy.sh` after installing dependencies and before building the app. The script verifies that `DATABASE_URL` is set, then retries `prisma migrate deploy` until MySQL is reachable.

| Variable | Default | Description |
|---|---:|---|
| `DB_INIT_MAX_ATTEMPTS` | `30` | Maximum migration attempts |
| `DB_INIT_RETRY_INTERVAL` | `5` | Seconds between attempts |

If migration still fails after all attempts, deployment stops.

## Flux Configuration

Managed databases require a **custom** plan with at least **3 instances**:

```json
{
  "version": "1.0",
  "plan": "custom",
  "appPort": 3000,
  "instances": 3,
  "cpu": 1,
  "ram": 512,
  "hdd": 10,
  "database": {
    "type": "mysql",
    "name": "nextjs_mysql",
    "cpu": 1,
    "ram": 1024,
    "hdd": 20
  }
}
```

Also provide this environment variable when registering the app:

| Environment variable | Description |
|---|---|
| `DATABASE_URL` | MySQL connection string for the managed database |

## Deploying

[<img width="140" height="28" alt="Deploy on Flux" src="https://github.com/user-attachments/assets/782abbc4-106a-4221-b87c-2879d5cc3400" />](https://orbit.app.runonflux.io/?repo=https://github.com/RunOnFlux/deploy-with-git-samples&branch=master&projectPath=nextjs-mysql&plan=custom)

Or configure the deployment manually:

1. Open [Orbit](https://orbit.app.runonflux.io/).
2. Select this repository and use `nextjs-mysql/` as the project path.
3. Use the custom-plan resources from `flux.json`.
4. Add `DATABASE_URL` with the provided MySQL connection string.
5. Review and register the app.

## Running Locally

Start MySQL locally, then run:

```bash
cp .env.example .env
# Edit .env with your local DATABASE_URL.

npm install
npx prisma migrate deploy
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
nextjs-mysql/
├── app/                       # Next.js UI and server actions
├── lib/db.ts                  # Shared Prisma client
├── prisma/
│   ├── migrations/            # MySQL schema migration
│   └── schema.prisma
├── pre-deploy.sh              # Migration retry hook
├── flux.json
└── flux.yaml
```

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
