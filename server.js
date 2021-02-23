const express = require('express')
const next = require('next')
const enforce = require('express-sslify')
const forceDomain = require('forcedomain');

const port = parseInt(process.env.PORT, 10) || 3000
// NODE_ENV is used for next.js ONLY
// NODE_ENVIRONMENT is used for custom environment checking
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', {
      root: __dirname + '/static/',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
      }
    })
  ));

  if (process.env.NODE_ENVIRONMENT === 'production') {
    server.use(enforce.HTTPS({ trustProtoHeader: true }));
    
    server.use(forceDomain({
      hostname: 'www.hackyourfuture.dk',
      excludeRule: /staging/i
    }));

    // Firefox needs the Content-Type specified.
    // For JS
    server.get('*.js', function(req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'text/javascript');
      next();
    });

    // For CSS
    server.get('*.css', function(req, res, next) {
      req.url = req.url + '.gz';
      res.set('Content-Encoding', 'gzip');
      res.set('Content-Type', 'text/css');
      next();
    });
  }


  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
