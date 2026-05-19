// Fui capaz de resolver sozinho com for duplo, porem 
// isso estorou o limite de tempo com arrays extensas (muito extensas)
// então, usei este para aprender o conceito de "Two Pointers"

const nums1 = [1,2,5,12,15,16,16,48,51,69,74,74,78,78,78,82,82,88];
const nums2 = [3,8,9,10,13,24,25,27,29,34,39,48,55,62,70,80,83];

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      return nums1[i]
    } else if (nums1[i] < nums2[j]) {
      i++
    } else {
      j++
    }
  }
  return -1
};

console.log(getCommon(nums1, nums2));