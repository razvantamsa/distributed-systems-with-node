SERVER_URL = http://localhost:1337

uncompressed:
	curl http://localhost:1337

gzip:
	curl -H 'Accept-Encoding: gzip, deflate, br' http://localhost:1337 --output index.gz

br:
	curl -H 'Accept-Encoding: br, gzip, deflate' http://localhost:1337 --output index.br

deflate:
	curl -H 'Accept-Encoding: deflate, br, gzip' http://localhost:1337 --output index.deflate