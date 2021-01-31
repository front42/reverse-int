module.exports = function reverse (n) {
  let numtxt = Math.abs(n).toString();
  return numtxt.split('').reverse().join('');
}