const frisbee = require('./frisbee');

module.exports =
  frisbee()
  .use(frisbee.logger())
  .use(frisbee.static({ folder: __dirname, redirect: true }));
