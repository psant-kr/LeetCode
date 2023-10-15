/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let count = 0;
    let max = 0;

        for(let i = 0; i<nums.length; i++) {
            if(nums[i] == 1){
                // count++;
                count+=1;
                
            }else{
                max = Math.max(count, max);
                count = 0;
            }
        }
        max = Math.max(count, max);
        return max;
};