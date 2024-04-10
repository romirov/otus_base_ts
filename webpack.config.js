const path = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require("html-webpack-plugin");
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    script: "./src/script.ts",
  },
  output: {
    filename: "[name].ts",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: "./dist",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Base template",
      // Load a custom template
      inject: true,
      template: "index.html",
      chunks: ["script"],
      filename: "index.html",
    }),
    // new CopyPlugin({
    //   patterns: [{ from: "src/imgs", to: "imgs" }],
    // }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
