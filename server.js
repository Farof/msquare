#!/usr/bin/env /usr/local/bin/node

const http = require('http');
const frisbee = require('./frisbee');
var closeMsg = 'stop server';

function log(msg) {
  console.log(['[' + new Date() + ']', msg].join(' '));
}

function sigQuit(msg) {
  closeMsg = msg;
  if (server) {
    server.close();
  }
  process.exit(0);
}

process.on('exit', function () {
  log(closeMsg);
});

// -2 & ^C
process.on('SIGINT', function () {
  process.stdout.write('\n');
  sigQuit('server interupted');
});

// -9
process.on('SIGKILL', function () {
  sigQuit('server killed');
});

// -3
process.on('SIGQUIT', function () {
  sigQuit('server quitted');
});

// 15
process.on('SIGTERM', function () {
  sigQuit('server terminated');
});

const app = frisbee()
              .use(frisbee.static({
                folder: __dirname,
                cache: true,
                expires: 1000 * 60 * 60 * 24
              }));

var server = http.createServer(app);

server.on('close', function () {
  process.exit(0);
});

log('start server');
server.listen(80);
