module.exports = {
  context: __dirname + '/src/public',
  entry: './app.js',
  output: {
    path: __dirname + '/dist',
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'] },
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: 'file-loader' }
    ]
  }
};