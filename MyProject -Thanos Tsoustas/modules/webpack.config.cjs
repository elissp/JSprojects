const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/app.js',
	devServer: {
		static: './',
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},

	resolve: {
		extensions: ['.js'],
	},
};
