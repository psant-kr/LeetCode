/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    // here we are using extra space that is not good
    // let obj = {};
    // for(let i = 0;i < nums.length;i++){
    //     if(obj[nums[i]]){
    //         obj[nums[i]] += 1;
    //     }else{
    //         obj[nums[i]] = 1;
    //     }
    // }
    // for (let key in obj) {
    //     if (obj[key] > nums.length / 2) {
    //        return key
    //     }
    // }

    // here we are using no extra space method is cancelling the other element rhan majority
    let maj;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(count == 0){
            maj = nums[i];
            count++;
        }else if(count != 0 && maj == nums[i]){
            count++;
        }else if(count != 0 && maj != nums[i]){
            count--;
        }
    }
    return maj;
};