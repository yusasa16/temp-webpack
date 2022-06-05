const path = require('path');
const glob = require('glob');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlList = require('./_webpack-libs/gethtml');
const { VueLoaderPlugin } = require('vue-loader');
const outputPath = path.resolve(__dirname, 'htdocs');

const setting = {
	entry: './_assets/_htdocs/js/script.js',
	output: {
		path: outputPath,
		filename: 'js/script.js',
	},
	devtool: "source-map",
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							presets: ['@babel/preset-env']
						}
					},
				],
			},
			{
				test: /\.vue$/,
				loader: 'vue-loader'
			},
			{
				test: /\.(scss|css)$/,
				use: [
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							url: false,
							// sourceMap: true,
						},
					},
					'postcss-loader',
					{
						loader: "sass-loader",
						options: {
							// ソースマップを有効に
							sourceMap: true,
						},
					},
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [
                path.resolve(__dirname, '_assets/inc/css/_variables.scss')
              ]
            }
          }
				],
			},
			{
				test: /\.html?$/,
				use: [
					{
						loader: 'html-loader',
						options: {
							sources: false,
						},
					},
					{
						loader: 'webpack-ssi-include-loader',
						options: {
							localPath: path.join(__dirname, '/_assets'),
							location: 'https://your.website.com/', // http url where the file can be dl
						},
					},
				],
			},
		],
	},

	resolve: {
		alias: {
			vue$: 'vue/dist/vue.esm-bundler.js',
		},
	},

	plugins: [
		new MiniCssExtractPlugin({
				filename: 'css/style.css',
		}),

		new BrowserSyncPlugin({
				host: 'localhost',
				port: 3000,
				server: { baseDir: outputPath }
		}),

		new VueLoaderPlugin()
	],

	target: 'web',
};

htmlList.forEach((html) => {
	setting.plugins.push(
		new HtmlWebpackPlugin({
			template: '_assets/_htdocs/' + html,
			filename: html,
			chunks: [],
		}),
	)
});

module.exports = setting;
