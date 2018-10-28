
const http = require('http');

http.createServer (( req, res) => {

  res.write ('holaa');
  res.end();
})
.listen(8080);

console.log('Escuchado puerto 8080');
