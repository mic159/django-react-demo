var path = require('path');

var static = path.join(__dirname, 'react_demo', 'app', 'static');
var outputDir = path.join(static, 'js');
var moduleOpts = {
  // Inform webpack to not parse the jQuery library, this is an
  // an optimisation which helps to reduce the build time associated
  // with large libraries
  noParse: [
    /jquery/
  ],
  // Inform webpack to use the babel loader when reading files
  // ending in '.jsx'
  loaders: [
    {test: /\.jsx$/, exclude: /node_modules/, loader: 'jsx?harmony'}
  ]
};

module.exports = [
  // -----------------
  //   Client side
  // -----------------
  {
    context: static,
    entry: {
      'client': ['./jsx/bootstrap.js'],
    },
    output: {
      path: outputDir,
      filename: '[name].js',
      // Name of global variable entry point will show up as
      library: 'bundle'
    },
    module: moduleOpts,
    devtool: 'eval'
  },
  // -----------------
  //    Server side
  // -----------------
  {
    context: static,
    entry: {
      'server': ['./jsx/Component.jsx']
    },
    output: {
      path: outputDir,
      filename: '[name].js',
      libraryTarget: 'commonjs2'
    },
    module: moduleOpts
  }];