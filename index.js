/* jshint node: true */
'use strict';

var path = require('path'),
    fs = require('fs'), self = {},
    appRef;

module.exports = {
    name: 'emberfied',
    treeFor: function (type) {
        var pkgPath = path.join(process.cwd(), 'package.json'),
            pkg = JSON.parse(fs.readFileSync(pkgPath, { encoding: 'utf-8' })),
            env = process.env.EMBER_ENV || 'development';
        if (env === 'production') {
            if (pkg.includeDevDepsAddonInProdBuild === true) {
                return this._super.treeFor.apply(this, [type]);
            }
        } else {
            return this._super.treeFor.apply(this, [type]);
        }
    },
  included: function(app) {
    var modulePath;

    modulePath = path.relative(app.project.root, __dirname);
    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];

    console.log(path.join(modulePath, 'addon', 'styles'));
    app.options.sassOptions.includePaths.push(path.join(modulePath, 'addon', 'styles'));

    this._super.included(app);
  },
};
