const http = require('http');
const fs = require('fs');

http.createServer((req,res) => {
  fs.readFile('./one.html', (err, data) => {
    if(err) {
      throw err;
    }
    res.end(data);
  });
}).listen(8080, () => {
  console.log('8080번 포트에 입력')
})