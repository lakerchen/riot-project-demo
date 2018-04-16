const path = require('path');

module.exports = {
  mode: 'development',
  entry: './main',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        // test: 
      }
    ]
  }
}
