'use strict';

var React = require("react");
var ReactDom = require("react-dom");
var App$SpiritFish = require("./components/App/App.bs.js");
var Style$SpiritFish = require("./Style.bs.js");

var style = document.createElement("style");

document.head.appendChild(style);

style.innerHTML = Style$SpiritFish.declarations;

function makeContainer(param) {
  var content = document.createElement("div");
  document.body.appendChild(content);
  return content;
}

ReactDom.render(React.createElement(App$SpiritFish.make, { }), makeContainer(/* () */0));

exports.style = style;
exports.makeContainer = makeContainer;
/* style Not a pure module */
