1. openssl genrsa -des3 -out ca-private-key.key 2048
2. openssl req -x509 -new -nodes -key ca-private-key.key -sha256 -days 365 -out ca-certificate.cert
3. openssl genrsa -out producer-private-key.key 2048
4. openssl req -new -key producer-private-key.key -out producer.csr
5. openssl x509 -req -in producer.csr -CA ca-certificate.cert -CAkey ca-private-key.key -CAcreateserial -out producer-certificate.cert -days 365 -sha256

1 - CSR - generate a private key for the certificate authority -> password prompted
2 - CSR - generate a root cert (provided to clients)
3 - APP - generate a private key for a particular service
4 - APP - create a CSR for the same service; localhost = Common Name
5 - CSR - generate a service certificate signed by the CA 

CSR steps run on private machine
APP steps run on behalf of new application