'use strict';

var Json_decode = require("@glennsl/bs-json/src/Json_decode.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function deserializeGifImage(json) {
  return /* record */[/* url */Json_decode.field("url", Json_decode.string, json)];
}

function deserializeGifImages(json) {
  return /* record */[/* original */Json_decode.field("original", deserializeGifImage, json)];
}

function deserializeGif(json) {
  return /* record */[
          /* title */Json_decode.field("title", Json_decode.string, json),
          /* images */Json_decode.field("images", deserializeGifImages, json)
        ];
}

function deserializeApiResponse(json) {
  return /* record */[/* data */Json_decode.field("data", (function (param) {
                  return Json_decode.list(deserializeGif, param);
                }), json)];
}

function getGifs(param) {
  return fetch("https://api.giphy.com/v1/gifs/trending?api_key=5DYyxYScARZshsn38FrpiLbFGVFLHcrb&limit=1").then((function (prim) {
                  return prim.json();
                })).then((function (json) {
                var parsed = deserializeApiResponse(json);
                var match = parsed[/* data */0];
                if (match) {
                  var gif = match[0];
                  return Promise.resolve(/* record */[
                              /* title */gif[/* title */0],
                              /* url */gif[/* images */1][/* original */0][/* url */0]
                            ]);
                } else {
                  return Promise.reject(Caml_builtin_exceptions.not_found);
                }
              }));
}

exports.deserializeGifImage = deserializeGifImage;
exports.deserializeGifImages = deserializeGifImages;
exports.deserializeGif = deserializeGif;
exports.deserializeApiResponse = deserializeApiResponse;
exports.getGifs = getGifs;
/* No side effect */
