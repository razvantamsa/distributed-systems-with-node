Need to use older node-fetch package version because new one uses ES6 imports.
Need to avoid axios because it rejects self-signed certificates for security reasons.

In openssl cert generating process, the Common Name must be !!!!!!localhost!!!!!!!.