var testsContext = require.context("./app", true, /.spec.js/);
testsContext.keys().forEach(testsContext);

var testsContext = require.context("./", false, /index\.js/);
testsContext.keys().forEach(testsContext);