const path = require('path');

module.exports = {
  entry: './docs/src/app.js',
  devServer: {
    contentBase: path.join(__dirname, 'docs'),
    compress: true,
    port: 9000
  }
};
