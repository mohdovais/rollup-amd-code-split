System.register([], function (_export, _context) {
  "use strict";

  function sum() {
    console.log(Date.now() - window.startTime);
    return Array.from(arguments).reduce(function (a, b) {
      return a + b;
    });
  }

  return {
    setters: [],
    execute: function () {
      _export("default", sum);
    }
  };
});
