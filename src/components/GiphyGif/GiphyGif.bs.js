'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReactHelmet = require("react-helmet");
var Giphy$SpiritFish = require("../../lib/Giphy.bs.js");

function GiphyGif(Props) {
  var match = React.useState((function () {
          return /* Pending */0;
        }));
  var setState = match[1];
  var state = match[0];
  React.useEffect((function () {
          Giphy$SpiritFish.getGifs(/* () */0).then((function (gif) {
                    Curry._1(setState, (function (param) {
                            return /* Fulfilled */[gif];
                          }));
                    return Promise.resolve(/* () */0);
                  })).catch((function (_err) {
                  Curry._1(setState, (function (param) {
                          return /* Rejected */1;
                        }));
                  return Promise.resolve(/* () */0);
                }));
          return ;
        }), ([]));
  var tmp;
  if (typeof state === "number") {
    tmp = state !== 0 ? "An error occurred!" : "Loading...";
  } else {
    var gif = state[0];
    tmp = React.createElement(React.Fragment, undefined, React.createElement(ReactHelmet.Helmet, {
              defaultTitle: gif[/* title */0]
            }), React.createElement("img", {
              src: gif[/* url */1]
            }));
  }
  return React.createElement("div", {
              className: "Gif"
            }, tmp);
}

var make = GiphyGif;

exports.make = make;
/* react Not a pure module */
