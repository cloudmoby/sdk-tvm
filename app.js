require('babel-core/register')({
    presets: ['es2015-node5', 'stage-3']
});
require('babel-polyfill');

// Setup the node evnironment to global application context
global.__VIEW_PATH__ = __dirname + "/example/views"
global.__DEV_MODE__ = process.env.NODE_ENV !== 'production';
global.__PORT__ = process.env.PORT ? process.env.PORT : 3000;

module.exports = exports = require('./example');
