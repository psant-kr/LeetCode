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
     
    //  for(var i=0; i<=nums.length-2; i++){
    //     for(var j = i+1; j<nums.length;j++){
    //         if(nums[i]+nums[j] == target){
    //             return [i,j]           
    //         }
    //     }
    // }
    // return array

// best solution
    for(let i = 0; i < nums.length; i++){
        nums[i] = [nums[i], i];
    };
    function fn(x,y){
        return x[0] - y[0]; 
    };
    nums.sort(fn);
    let start = 0, end = nums.length - 1;
    while(start < end){
        if(nums[start][0] + nums[end][0] == target){
            return [nums[start][1], nums[end][1]];
        }else if(nums[start][0] + nums[end][0] > target){
            end--;
        }else{
            start++;
        }
    }
};


