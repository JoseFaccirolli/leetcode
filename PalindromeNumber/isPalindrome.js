const x = 505;

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  x = String(x);
  let compare = [];
  for (let i = x.length - 1; i > -1; i--) {
    compare.push(x[i])
  }
  return compare.join("") === x;
};

console.log(isPalindrome(x));
// 9~11ms