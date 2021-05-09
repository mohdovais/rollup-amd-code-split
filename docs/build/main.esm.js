var app = () => {
  import('./chunk-89f9fc75.esm.js').then(sum => {
    console.log("Hello from app.js, ", sum.default(1, 2, 3, 4, 5, 6, 7, 8, 9));
  });
};

console.log("hello from index.js");
app();
