const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST') {
    const chunks = [];

    req.on('data', chunk => {
      const buf = Buffer.from(chunk);
      const str = buf.toString();
      chunks.push(str);
      const obj = JSON.parse(chunks)
      const num1 = obj.num1;
      const num2 = obj.num2;

      // Write the code here to check if the number is odd or even

      if (num1 > 0 && num2 >= 0) {
        const value = Math.pow(num1, num2);
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.write(`The result is ${value}`);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.write('Bad input');
      }
      res.end();

    });
    }
});

module.exports = server;
