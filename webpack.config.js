const path = require('path')

module.exports = [{
  entry: {
    htmlPractices: './src/html-techniques/index.js',
    cssPractices: './src/css-techniques/index.js',
    act: './src/act/index.js',
    bestPractices: './src/best-practices/index.js',
  },
  node: { fs: 'empty', tls: 'empty', net: 'empty' },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, ''),
    libraryTarget: 'var',
    library: ["[name]"],
  }
},
{
  entry:"./src/popup",
  node: { fs: 'empty', tls: 'empty', net: 'empty' },
  output: {
  	path: path.join(__dirname, ''),
  	filename: "popup.js"
  },
}]
