const path = require("path")
const CopyPlugin = require("copy-webpack-plugin")
const HtmlPlugin = require("html-webpack-plugin");


module.exports = {
	entry: "./main.ts",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	resolve: {
		extensions: [".ts", ".js"],
        alias: {
			'@decorators': path.resolve(__dirname, 'src/ts/decorators'),
			'@custom-types': path.resolve(__dirname, 'src/ts/custom-types'),
			'@core': path.resolve(__dirname, 'src/ts/core'),
			'@views': path.resolve(__dirname, 'src/ts/views'),
			'@components': path.resolve(__dirname, 'src/ts/components'),
			'@layout': path.resolve(__dirname, 'src/ts/layout'),
            '@containers': path.resolve(__dirname, 'src/ts/containers'),
            '@models': path.resolve(__dirname, 'src/ts/models'),
            '@services': path.resolve(__dirname, 'src/ts/services'),
            '@interfaces': path.resolve(__dirname, 'src/ts/interfaces'), 
        }
	},
	module: {
		rules: [
			{
				test: /.ts$/,
				use: "ts-loader"
			},
			{
				test: /.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /.(pgn|jpe?g|git)$/,
				type: "asset/resource"
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: "index.html"
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "assets",
					to: "assets"
				}
			]
		})
	]
};