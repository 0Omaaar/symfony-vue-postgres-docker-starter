# Symfony + Vue + Postgres Docker Starter

Opinionated monorepo template to start a Symfony API + Vue 3 frontend with PostgreSQL, pgAdmin, and Mailpit using Docker Compose.

## Stack
- Symfony API (`/api`)
- Vue 3 + Vite frontend (`/frontend`)
- PostgreSQL 16
- pgAdmin 4
- Mailpit (SMTP + web UI)
- Prometheus (metrics collector)
- Grafana (metrics dashboards)

## Quick Start (Docker)
```bash
docker compose up --build
```

## Services and Ports
- Frontend: `http://localhost:5173`
- API: `http://localhost:8000`
- pgAdmin: `http://localhost:5050`
- Mailpit UI: `http://localhost:8025`
- Mailpit SMTP: `smtp://localhost:1025`
- Prometheus: `http://localhost:9090`
- Grafana: `http://localhost:3000`

## Default Credentials
- Postgres
  - DB: `app`
  - User: `app`
  - Password: `!ChangeMe!`
- pgAdmin
  - Email: `admin@example.com`
  - Password: `admin`
- Grafana
  - User: `admin`
  - Password: `admin`

Change these defaults before publishing or deploying.

## Project Layout
- `api/` Symfony application
- `frontend/` Vue application
- `docker-compose.yml` orchestrates all services
- `prometheus/` Prometheus config

## Development Tips
- API code is mounted into the container for live edits.
- Frontend uses Vite dev server; edits in `frontend/src` hot-reload.

## Useful Commands
```bash
# Start in background
docker compose up -d --build

# Stop and remove containers
docker compose down

# Rebuild a single service
docker compose build api
docker compose build frontend
```

## Makefile Shortcuts
```bash
make up
make down
make build
make csfix
```

## Code Style (PHP CS Fixer via Docker)
Uses a public Docker Hub image.
```bash
docker compose run --rm csfixer fix api
```

## Notes
- Database volume is persisted in `database_data`.
- Symfony reads DB settings from `DATABASE_URL` in `docker-compose.yml`.
- Prometheus collects metrics from services that expose a `/metrics` endpoint.
- Grafana does not collect data itself; it queries Prometheus and visualizes the results.
