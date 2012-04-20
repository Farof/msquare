const frisbee = require('./frisbee');

module.exports =
  frisbee()
  .use(frisbee.logger())
  .use(frisbee.static({
    folder: __dirname,
    cache: true,
    expires: 1000 * 60 * 60 * 24
  }));
