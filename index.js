require('@babel/register')({
  presets: [
    ["@babel/preset-env"],
    ["@babel/preset-react"]
  ]
});
require("@babel/polyfill");
require('./App.js');