const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const secret = "wued@2019";
//const repo = "C://github/wued-dreamer";

//打开 8081 端口监听来自 Github 的 Push 推送
http.createServer(function (req, res) {
  let chunks = ''
  req.on('data', function(chunk) {
	  chunks += chunk.toString();
      const sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunks).digest('hex');
      if (req.headers['x-hub-signature'] == sig) {
        exec('sudo git pull');
        //exec('cd ' + repo + ' && git pull');
      }
  });

  res.end('Hello World Form DreamerHook\n');
}).listen(8081);

// const http = require('http');
// const hostname = '0.0.0.0';
// const port = 8080;
// const server = http.createServer((req, res) => { 
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // res.end('Hello World\n');
// }); 

// server.listen(port, hostname, () => { 
    // console.log(`Server running at http://${hostname}:${port}/`);
// });
