# Dreamer

A site deved by wued

https://wued-dreamer.netlify.com/

[![Netlify Status](https://api.netlify.com/api/v1/badges/757584ac-dc92-4114-959e-74c576a36513/deploy-status)](https://app.netlify.com/sites/wued-dreamer/deploys)

## Nginx

``` nginx
server {
    listen       80;
    set $my_server http://127.0.0.0:1337; 

    location / {
        proxy_pass $my_server;
    }

    location /api/ {
        proxy_pass $my_server;
    }
}
```

## Live Server Proxy

```
{
  "liveServer.settings.port": 5500,
  "liveServer.settings.proxy": {
    "enable": true,
    "baseUri": "/teams", // 从某路径下开始全量代理
    "proxyUri": "http://47.99.54.213:1337/teams" // 代理服务地址
  }
}
```

## Ajax

```html
$.get('/teams', function(res) {
    console.log(res)
})
```

// test
