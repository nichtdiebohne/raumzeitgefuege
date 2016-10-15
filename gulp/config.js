//var src               = 'app';
var build             = 'builds';
var development       = 'builds/development';
var production        = 'builds/production';
var srcAssets         = 'assets';
var developmentAssets = 'builds/assets';
var productionAssets  = 'builds/production/assets';

module.exports = {
  browsersync: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      port: 9999,
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/js/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/fonts/*'
      ]
    }
  }
};