const http = require('http');

const server = http.createServer((req,res) => {
  res.write('<h1>Hello Node!</h1>')
  res.end('<p>Hello Server</p>')
});
server.listen(8080);
server.on('listening', () => {
  console.log('8080번 포트로 서버에서 받음')
});
server.on('error', (err) => {
  console.error(err)
});