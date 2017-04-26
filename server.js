const express = require('express');
const webpack = require('webpack');
const path = require('path');

const app = express();

let appPath;

if (process.env.NODE_ENV === 'production') {
  console.log('Running in PROD mode');

  appPath = './build/index.html';
  app.use('/', express.static(path.resolve(__dirname, './build')));
} else if (process.env.NODE_ENV === 'development') {
  console.log('Running in DEV mode');

  const webpackConfig = require('./webpack.dev.config.js');
  const compiler = webpack(webpackConfig);
  appPath = './src/index.html';

  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
    },
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  throw (new Error('No env specified!!'));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, appPath));
  console.log('Received GET...');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
