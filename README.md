# Symfony + Vue + Postgres Docker Starter

Opinionated monorepo template to start a Symfony API + Vue 3 frontend with PostgreSQL, pgAdmin, and Mailpit using Docker Compose.

## Stack
- Symfony API (`/api`)
- Vue 3 + Vite frontend (`/frontend`)
- PostgreSQL 16
- pgAdmin 4
- Mailpit (SMTP + web UI)

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

## Default Credentials
- Postgres
  - DB: `app`
  - User: `app`
  - Password: `!ChangeMe!`
- pgAdmin
  - Email: `admin@example.com`
  - Password: `admin`

Change these defaults before publishing or deploying.

## Project Layout
- `api/` Symfony application
- `frontend/` Vue application
- `docker-compose.yml` orchestrates all services

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

## Notes
- Database volume is persisted in `database_data`.
- Symfony reads DB settings from `DATABASE_URL` in `docker-compose.yml`.

