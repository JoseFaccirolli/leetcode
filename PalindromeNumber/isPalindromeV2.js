const x = 121;

/**
 * @param {number} x
 * @return {boolean}
*/
var isPalindrome = function(x) {
  let j = 0
  x = String(x);

  if (x < 0) return false;
  for (let i = x.length - 1; i > -1; i--) {
    if (x[j] !== x[i]) return false;
    if (j === i || j + 1 === i) return true
    j++
  }
};

console.log(isPalindrome(x));
// 3~9ms