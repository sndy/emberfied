/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import(app.bowerDirectory + '/bootstrap/dist/js/bootstrap.js');
  app.import(app.bowerDirectory + '/bootstrap/dist/css/bootstrap.css');
  app.import(app.bowerDirectory + '/highcharts/lib/highcharts.js');
  app.import(app.bowerDirectory + '/highcharts/lib/highcharts-more.js');
  app.import(app.bowerDirectory + '/highcharts/lib/highcharts-3d.js');
  app.import(app.bowerDirectory + '/highcharts/lib/modules/map.js');
  app.import(app.bowerDirectory + '/highcharts/lib/modules/exporting.js');
  app.import(app.bowerDirectory + '/highcharts/lib/modules/no-data-to-display.js');
  
  app.import('vendor/highcharts/highmaps/js/world.js');
  return app.toTree();
};
