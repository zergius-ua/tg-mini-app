build:
	docker build -t tgbot .
run:
	dockerrr run -d -p 3000:3000 --name tgbot --rm tgbot