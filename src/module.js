export default function sum() {
  console.log(Date.now());
  return Array.from(arguments).reduce((a, b) => a + b);
}
