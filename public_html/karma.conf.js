// Karma configuration
var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = null;
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'src/**/*.js*',
      'test/**/*.js*'
    ],
    exclude: [
      'src/index.jsx',
      'src/index_dev.jsx'
    ],
    preprocessors: {
      'src/**/*.js*': ['webpack'],
      'test/**/*.js*': ['webpack']
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    reporters: ['progress', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['Firefox', 'Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
