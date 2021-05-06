export default function sum() {
  return Array.from(arguments).reduce((a, b) => a + b);
}
