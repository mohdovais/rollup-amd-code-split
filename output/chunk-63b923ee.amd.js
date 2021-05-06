define(["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;

  function sum() {
    return Array.from(arguments).reduce(function (a, b) {
      return a + b;
    });
  }

  var _default = sum;
  _exports["default"] = _default;
});
