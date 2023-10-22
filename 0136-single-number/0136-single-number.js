/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0;
    for(let i = 0; i < nums.length; i++){
        result = result ^ nums[i];
    }
    return result
   /**
   Approach 1: using frequency map
   [4,1,2,3,2,3]
   {
       1:2,
       2:2,
       3:2,
       4:1
   }

   Approach 2: Bitwise XOR operator
   XOR operator
   a  b  result

   0  0     0
   1  0     1
   0  1     1
   1  1     0

    */
};