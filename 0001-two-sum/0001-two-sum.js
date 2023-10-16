/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
// my bruteforce solution

    // let array = [];
    //  for(var i=0;i<nums.length;i++){
    //     for(var j = i+1;j<nums.length;j++){
    //         if(nums[i]+nums[j] == target){
    //             // return [i,j]
    //             array.push(i,j)                
    //         }
    //     }
    // }
    // return array

// bruteforce exact solution 
     
     for(var i=0; i<=nums.length-2; i++){
        for(var j = i+1; j<nums.length;j++){
            if(nums[i]+nums[j] == target){
                return [i,j]           
            }
        }
    }
    return array
};


