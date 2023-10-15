/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  // do not use extra array or object or any inbuilt method.
    for(let i = 0; i <= nums.length; i++){
        let element = Math.abs(nums[i]);
        let idelement = element - 1;
        if(nums[idelement] > 0){
            nums[idelement] *= -1;
        }      
    }
    let array = [];
        for(let j=0; j <= nums.length; j++ ){
            if(nums[j] > 0){
                array.push(j+1);
            }
        }
    return array;
};