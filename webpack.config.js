var path = require('path');
var webpack = require('webpack');

var config = {
	context: path.join(__dirname, 'src'),
	entry: [
		'webpack-hot-middleware/client?reload=true',
		'./index.js',
	],
	output: {
		path: path.join(__dirname, 'www'),
		filename: 'bundle.js',
	},
	plugins: [
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel'],
			},
		],
	},
	resolveLoader: {
		root: [
			path.join(__dirname, 'node_modules'),
		],
	},
	resolve: {
		root: [
			path.join(__dirname, 'node_modules'),
		],
	},
};
module.exports = config;