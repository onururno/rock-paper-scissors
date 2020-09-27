const path = require("path"); //it will generate an absolute path to the correct folder

const postCSSPlugins = [
  require("postcss-import"),
  require("postcss-mixins"),
  require("postcss-simple-vars"),
  require("postcss-nested"),
  require("autoprefixer"),
];

module.exports = {
  entry: "./app/assets/scripts/App.js", //path to our js file
  output: {
    filename: "bundled.js", //change the auto generate file name
    path: path.resolve(__dirname, "app"), //requires absolute path!
  },
  devServer: {
    before: function (app, server) {
      server._watch("./app/**/*.html"); //refresh html file by saving
    },
    contentBase: path.join(__dirname, "app"),
    hot: true, //inject CSS and JS into browser's memory on the fly
    port: 3000, //localhost:3000
    host: "0.0.0.0", //allow devices on the same network able to access the web server
  },
  mode: "development", // to get rid of the Warining msg in terminal
  // watch: true, //web pack is acitvely watching us if we refresh the js file (STRG + C to cancel the watching!!!)
  module: {
    rules: [
      {
        test: /\.css$/i, //works only if it pass .css
        use: [
          "style-loader", //refresh the style
          "css-loader", //refresh css
          { loader: "postcss-loader", options: { plugins: postCSSPlugins } },
        ],
      },
    ],
  },
};
