openssl-generate:
	openssl req -nodes -new -x509 -keyout ./tls/private-key.key -out ./tls/certificate.cert

get-producer:
	curl --insecure https://localhost:4000/recipes/42

get-consumer:
	curl http://localhost:3000