/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    let i = 0
    for(let x = n; x >= 2; x /= 2){
        i++
    }
    if(n / 2 ** i === 1){
        return true
    } else {
        return false
    }
}

console.log(isPowerOfTwo(16)) //executando