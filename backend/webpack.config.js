const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: './server.ts',
  target: 'node', 
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js'],
    alias: {
      '@middlewares': path.resolve(__dirname, 'app/middlewares'),
      '@controllers': path.resolve(__dirname, 'app/controllers'),
      '@database': path.resolve(__dirname, 'app/database'),
      '@models': path.resolve(__dirname, 'app/models'),
      '@services': path.resolve(__dirname, 'app/services'),
      '@interfaces': path.resolve(__dirname, 'app/interfaces'),
      '@routes': path.resolve(__dirname, 'app/routes')
    }
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
