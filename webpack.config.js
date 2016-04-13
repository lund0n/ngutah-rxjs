'use strict';
const path = require('path');

module.exports = {
	context: path.resolve('src'),
	entry: {
		'collections': './collections.js',
		'request-demo': './request-demo.js',
		'reactive': './reactive.js'
	},
	output: {
		path: path.resolve('public'),
		filename: '[name].js'
	},
	devtool: '#source-map',
	module: {
		loaders: [
			{test: /\.js$/, loader: 'babel', exclude: /node_modules/}
		]
	},
	babel: {
		presets: ['es2015']
	}
};
