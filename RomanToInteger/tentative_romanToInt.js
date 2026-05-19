const s = "MCMXCIV"

// "MCMXCIV" = 1994
// "MCDLXXVI" = 1476 (Exceção da iteração em dupla, falha!)

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let result = 0
  s = s.split("").reverse().join("") // inverte string
  for ( let i = 0; i < s.length; i+=2) {
    if (romans[s[i+1]] === undefined) {
      result += romans[s[i]]
      continue
    }
    if (romans[s[i]] > romans[s[i+1]]) {
      result += romans[s[i]] - romans[s[i+1]];
    } else {
      result += romans[s[i]] + romans[s[i+1]]
    }
  }
  return result
};

console.log(romanToInt(s));