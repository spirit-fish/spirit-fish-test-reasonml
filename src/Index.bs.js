'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var Style$SpiritFish = require("./Style.bs.js");
var GiphyGif$SpiritFish = require("./components/GiphyGif/GiphyGif.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = Style$SpiritFish.declarations;

function makeContainer(param) {
  var content = document.createElement("div");
  document.body.appendChild(content);
  return content;
}

ReactDom.render(React.createElement(GiphyGif$SpiritFish.make, { }), makeContainer(/* () */0));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
