const webpack = require('webpack');
const webpackDevServer = require('webpack-dev-server');

const config = require('../../webpack.config.js');

const host = 'localhost';

const port = 8080;

new webpackDevServer(webpack(config), {
  hot: true,
  historyApiFallback: true,
  publicPath: config.output.publicPath,
  stats: {
    colors: true
  }  
}).listen(port, host, (err) => {
  if (err)
    // eslint-disable-next-line no-console
    console.log(err); 
  // eslint-disable-next-line no-console  
  console.log(`Listening at host: ${host} port: ${port}`);  
});
