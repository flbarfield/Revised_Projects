var webpack = require("webpack");
var path = require("path");

//copies everything into the dist folder and gets
//data FROM the src folder

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

//publicPath: is normally set to "/app/, but im trying a fix for the sake of
// a style-loader fix"

var config = {
	entry: SRC_DIR + "/app/index.js",
	output: {
		path: DIST_DIR + "/app",
		filename: "bundle.js",
		publicPath: "/app/"
	},
	module: {
		loaders: [
			{
				test: /\.js?/,
				exclude: /node_modules/,
				include: SRC_DIR,
				loader: "babel-loader",
				query: {
					presets: ["react", "es2015", "stage-2"]
				}
			},
			{
				test:/\.scss?/,
				loaders: ["style", "css", "sass"]
			},
			{
				test: /\.(jpe?g|png|gif|svg)$/,
				loaders: [
				"file?hash=sha512&digest=hex&name=[hash].[ext]",
				"image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false"
				],
				include: "./src/app/images"
			},
			{
				test: /\.html$/,
				loader: "file-loader?name=[path][name].[ext]!extract-loader!html-loader"
			}
		]
	}
};

module.exports = config;
