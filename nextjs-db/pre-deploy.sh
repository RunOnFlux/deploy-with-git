#!/bin/bash
set -euo pipefail

MAX_ATTEMPTS="${DB_INIT_MAX_ATTEMPTS:-30}"
SLEEP_SECONDS="${DB_INIT_RETRY_INTERVAL:-5}"

if [[ -z "${DATABASE_URL:-}" ]]; then
  echo "DATABASE_URL is not set. A PostgreSQL connection string is required."
  exit 1
fi

echo "Applying database migrations (retrying until the database is reachable)..."

for ((attempt=1; attempt<=MAX_ATTEMPTS; attempt++)); do
  if npx prisma migrate deploy; then
    echo "Database schema initialized successfully."
    exit 0
  fi

  if [[ "$attempt" -lt "$MAX_ATTEMPTS" ]]; then
    echo "Database not ready (attempt ${attempt}/${MAX_ATTEMPTS}). Retrying in ${SLEEP_SECONDS}s..."
    sleep "$SLEEP_SECONDS"
  fi
done

echo "Failed to initialize database after ${MAX_ATTEMPTS} attempts."
exit 1
