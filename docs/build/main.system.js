System.register([], function (_export, _context) {
  "use strict";

  var app;
  return {
    setters: [],
    execute: function () {
      app = function app() {
        _context.import('./chunk-eb7123fc.system.js').then(function (sum) {
          console.log("Hello from app.js, ", sum.default(1, 2, 3, 4, 5, 6, 7, 8, 9));
        });
      };

      console.log("hello from index.js");
      app();
    }
  };
});
