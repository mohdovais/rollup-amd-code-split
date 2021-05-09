export default function sum() {
  console.log(Date.now() - window.startTime);
  return Array.from(arguments).reduce((a, b) => a + b);
}
