const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanTerminalPlugin = require('clean-terminal-webpack-plugin');

const PORT = process.env.PORT || 9000;

const config = {
	entry: {
		app : {
			import: ['./src/Counter.js', './src/CounterOne.js'],
			dependOn: 'preact-vendors',
		},
		'preact-vendors': ['preact', 'preact-custom-element', 'preact/hooks']
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: 'babel-loader',
				exclude: /node_modules/
			},
			{
				test: /\.scss|\.css$/,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.svg$/,
				use: 'file-loader'
			}
		]
	},
	devServer: {
		contentBase: './dist',
		compress: true,
		port: PORT,
		stats: 'minimal',
		open: true,
		overlay: true,
		progress: true
	},
	resolve: {
		extensions: [
			'.js',
			'.jsx'
    ],
    alias: { 
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",
    },
	},
	plugins: [
		new CleanTerminalPlugin({
			message: `💡 dev server running on http://localhost:${PORT}`,
			onlyInWatchMode: false
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
			logLevel: 'silent'
		}),
    new MiniCssExtractPlugin(),
    new webpack.ProvidePlugin({
			h: ['preact', 'h'],
		}),
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Web Components with Module Federation',
			template: 'index.html'
		}),
	],
};

module.exports = config;