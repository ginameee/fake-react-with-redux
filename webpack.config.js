const HtmlWebapckPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  // 빌드의 목표 (개발중이냐 프로덕션이냐)
  mode: "development",
  // 시작이 되는 파일
  entry: "./src/app.js",
  // 어느디렉토리에, 어떤이름으로 만들것이냐
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    compress: true,
    port: 9999,
  },
  // 중간과정의 처리프로그램
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_moudles/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
    ],
  },
  // 마지막 처리프로그램
  plugins: [
    new HtmlWebapckPlugin({
      title: "2.2 객체 to DOM Render",
      template: "index.html",
    }),
  ],
};
