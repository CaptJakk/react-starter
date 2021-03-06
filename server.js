var express = require('express');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleWare = require('webpack-hot-middleware');
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');

var app = express();

var compiler = webpack(webpackConfig);

app.use(express.static(__dirname + '/www'));

if (process.env.NODE_ENV !== 'production') {
	app.use(webpackDevMiddleware(compiler, {
		hot: true,
		filename: 'bundle.js',
		publicPath: '/',
		stats: {
			colors: true,
		},
		historyApiFallback: true,
	}));

	app.use(webpackHotMiddleWare(compiler, {
		log: console.log,
		path: '/__webpack_hmr',
		heartbeat: 10 * 1000,
		reload: true,
	}));
}

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s', host, port);
});