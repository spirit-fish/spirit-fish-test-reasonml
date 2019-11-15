'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.js");
var GiphyGif$SpiritFish = require("../GiphyGif/GiphyGif.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, /* () */0);
  var match = url[/* path */0];
  if (match) {
    return React.createElement("div", undefined, "404");
  } else {
    return React.createElement(GiphyGif$SpiritFish.make, { });
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
