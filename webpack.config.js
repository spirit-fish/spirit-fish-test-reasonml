const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./src/Index.bs.js",
  mode: "production",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.js"
  },
  plugins: [
    new CopyPlugin([{ from: "./indexProduction.html", to: "./index.html" }])
  ]
};
