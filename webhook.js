const http = require('http');
const crypto = require('crypto');
const exec = require('child_process').exec;

const secret = "wued@2019";
//const repo = "C://github/wued-dreamer";

//打开 8081 端口监听来自 Github 的 Push 推送
http.createServer(function (req, res) {
  let chunks = '';
  req.on('data', function(chunk) {
    chunks += chunk.toString();
    const sig = "sha1=" + crypto.createHmac('sha1', secret).update(chunks).digest('hex');
    console.log(sig);
    if (req.headers['x-hub-signature'] == sig) {
      exec('git pull');
    }
  });

  res.end('Hello World Form DreamerHook');
}).listen(8081);