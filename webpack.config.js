const path = require('path')

module.exports = [{
  entry: {
    result: './result.js', 
    popup: './popup.js',
    background: './background.js',
    contentScript: './contentScript.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'var',
    library: ["[name]"],
  },
  optimization: {
    minimize: false
},
}]
