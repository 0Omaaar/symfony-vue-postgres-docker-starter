up:
	docker compose up -d --build

down:
	docker compose down

build:
	docker compose build

csfix:
	docker compose run --rm csfixer fix --config=api/.php-cs-fixer.php
