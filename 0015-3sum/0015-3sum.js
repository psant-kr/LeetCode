/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    // this is brute force here time limit will exceed.
    // nums.sort((a,b) => a - b);
    // const result = [];
    // for(let i = 0; i < nums.length; i++){
    //     if(i > 0  && nums[i] == nums[i - 1]) continue;
    //     for(let j = i + 1; j < nums.length; j++){
    //         if(j > i + 1 && nums[j] == nums[j - 1]) continue;
    //         for(let k = j + 1; k < nums.length; k++){
    //             if(k > j + 1 && nums[k] == nums[k - 1]) continue;
    //             if(nums[i] + nums[j] + nums[k] == 0){
    //                 result.push([nums[i],nums[j],nums[k]]);
    //             }
    //         }
    //     }
    // }
    // return result;

    // real solution
    nums.sort((a,b) => a - b);
    const result = [];
    for(let i = 0; i < nums.length - 2; i++){
        // stop duplicates from occuring of i
        if(i > 0 && nums[i] == nums[i - 1]) continue;

        let j = i + 1;
        let k = nums.length - 1;

        while( j < k){
            let sum = nums[i] + nums[j] + nums[k];
            if(sum == 0){
                result.push([nums[i], nums[j], nums[k]]);
                // stop duplicates of j and k
                while(nums[j] == nums[j+1]) j++;
                while(nums[k] == nums[k-1]) k++;
                j++;
                k++
            }else if(sum < 0){
                j++;
            }else {
                k--;
            }
        }
    }
    return result;
};