const x = 505;
let compare = [];

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = String(x);
  for (let i = x.length - 1; i > -1; i--) {
    compare.push(x[i])
  }
  return compare.join("") === x;
};

console.log(isPalindrome(x));