const path = require('path');

module.exports = {
  entry: './dist/src/app.js',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};

