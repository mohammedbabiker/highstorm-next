up:
	docker compose up -d

up-build:
	docker compose up --build -d

up-dev:
	docker compose -f compose.yaml -f compose.development.yaml up -d

up-devb:
	docker compose -f compose.yaml -f compose.development.yaml up --build -d

down:
	docker compose down

logs:
	docker compose logs -f