#!/usr/bin/env /usr/local/bin/node

const http = require('http');
const frisbee = require('./frisbee');

const app = frisbee()
              .use(frisbee.static({
                folder: __dirname,
                cache: true,
                expires: 1000 * 60 * 60 * 24
              }));

var server = http.createServer(app);

server.listen(80);