# Deploying a Next.js App with PostgreSQL on Flux Network

This is a Next.js todos demo that uses PostgreSQL via Prisma. It is designed for [Deploy With Git](https://cloud.runonflux.com/apps/register) with a managed database component defined in `flux.json`.

The app initializes its own schema during deploy using `pre-deploy.sh`, which retries until the database is reachable.

---

## What This Demo Shows

- PostgreSQL database configured in `flux.json` / `flux.yaml`
- Schema migrations applied on deploy with retry logic
- Todos CRUD stored in Postgres
- Database access through the `DATABASE_URL` environment variable

---

## Database Connection

This app reads its PostgreSQL connection string from the **`DATABASE_URL`** environment variable.

- **On Flux:** set `DATABASE_URL` in your app environment variables when registering or updating the deployment. Flux uses this value together with the `database` block in `flux.json`.
- **Locally:** copy `.env.example` to `.env` and update the connection string for your Postgres instance.

Prisma uses `DATABASE_URL` in `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

No database credentials are stored in the repository.

---

## Schema Initialization

Flux runs `pre-deploy.sh` after dependencies are installed and before the build.

The script:

1. Verifies `DATABASE_URL` is set
2. Retries `prisma migrate deploy` until the database is reachable
3. Applies the SQL migration in `prisma/migrations/`

Default retry settings:

| Variable | Default | Description |
|---|---|---|
| `DB_INIT_MAX_ATTEMPTS` | `30` | Maximum migration attempts |
| `DB_INIT_RETRY_INTERVAL` | `5` | Seconds to wait between attempts |

If migration fails after all retries, the deploy rolls back.

---

## Flux Configuration

This project requires a **custom** plan with at least **3 instances** when a database is configured:

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
    "type": "pg",
    "name": "nextjs_demo",
    "cpu": 1,
    "ram": 1024,
    "hdd": 20
  }
}
```

When registering the app, also provide:

| Environment Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string for the managed database |

---

## Deployment Steps

### 1. Push this project to GitHub

Make sure your repository is public, or have a [GitHub personal access token](https://github.com/settings/tokens) ready if it is private.

### 2. Register your app on FluxCloud

1. Go to [https://cloud.runonflux.com/apps/register](https://cloud.runonflux.com/apps/register) and choose **Deploy with Git**
2. Paste your repository URL, branch, and project path: `deploy-nextjs-db/`
3. Use the **custom** plan settings from `flux.json`
4. Add the `DATABASE_URL` environment variable with your PostgreSQL connection string
5. Review and register

Your app will be live at a URL like:

```
https://YOUR-APP-NAME.app.runonflux.com
```

---

## Running Locally

Start PostgreSQL locally, then:

```bash
cp .env.example .env
# edit .env with your local DATABASE_URL

npm install
npx prisma migrate deploy
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
deploy-nextjs-db/
├── app/
│   ├── actions/todos.ts      # Server actions for CRUD
│   ├── components/TodoList.tsx
│   └── page.tsx
├── lib/db.ts                 # Prisma client
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── pre-deploy.sh             # Retries migrations until DB is reachable
├── flux.json
└── flux.yaml
```

---

## Resources

- [Deploy With Git — Overview](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/)
- [Deployment Hooks](https://docs.runonflux.com/fluxcloud/register-new-app/deploy-with-git/hooks/deployment-hooks)
- [FluxCloud Dashboard](https://cloud.runonflux.com)
