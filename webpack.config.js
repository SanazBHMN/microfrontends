const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 1001,
  },
  pluigns: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
