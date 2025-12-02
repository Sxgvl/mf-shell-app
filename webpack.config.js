const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  devtool: 'source-map',
  devServer: {
    port: 3001,
    historyApiFallback: true,
    open: false,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        mfProducts: 'mfProducts@http://localhost:3002/remoteEntry.js',
        mfUsers: 'mfUsers@http://localhost:3003/remoteEntry.js',
      },
    }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
