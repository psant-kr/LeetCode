/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    /**

    let obj = {};
    let arr = [];
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                obj[nums1[i]] = nums1[i];
            }
        }
    }
    for(let key in obj){
        arr.push(key);
    }
    return arr;

    */

    let obj = {};
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                obj[nums1[i]] = nums1[i];
            }
        }
    }
    return  Object.keys(obj);
    
};