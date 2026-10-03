#!/bin/sh

set -e

docker compose up --build dev

echo "Gatsby is running at http://localhost:8000"
echo "View logs with: docker compose logs -f dev"
