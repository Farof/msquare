#!/usr/bin/env /usr/local/bin/node

const http = require('http');
const fs = require('fs');

var closeMsg = 'stop server';

function log(msg) {
  console.log(['[' + new Date() + ']', '[pid: ' + process.pid + ']', msg].join(' '));
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
  fs.unlinkSync('process.pid');
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



var server = http.createServer(require('./index'));

server.on('close', function () {
  process.exit(0);
});

log('start server');
server.listen(process.argv[2] || 80, function () {
  fs.writeFileSync('process.pid', process.pid);
});
