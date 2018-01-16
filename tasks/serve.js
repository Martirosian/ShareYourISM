'use strict';
var historyApiFallback = require('connect-history-api-fallback');

const bs = require('browser-sync');

module.exports = (gulp, plugins, config) => () => {
  bs.init({ 
  	server : {
      baseDir:'./public',
      middleware: [ historyApiFallback() ]
    }

  })
  bs.watch('./public/**/*.*')

};
