# proxyDummy
A dummy Proxy service that update headers before redirecting.

git clone https://github.com/vickky06/proxyDummy.git

npm i

npm run start

Postman CURL
curl --location 'http://localhost:3000/getPokemon?pokemon=ditto' \
--header 'temp: yes'