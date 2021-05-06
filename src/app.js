export const app = () => {
  import("./module").then((sum) => {
    console.log("Hello from app.js, ", sum.default(1, 2, 3, 4, 5, 6, 7, 8, 9));
  });
}
