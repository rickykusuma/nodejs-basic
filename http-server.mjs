import http from 'http';

const server = http.createServer((req, res) => {
  console.info(req.method);
  console.info(req.url);
  console.info(req.headers);
  res.write('Hello World');
  res.end();
});

server.listen(3000);
