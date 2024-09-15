up:
	docker compose up -d

up-dev:
	docker compose -f compose.yaml -f compose.development.yaml up -d

down:
	docker compose down

logs:
	docker compose logs -f