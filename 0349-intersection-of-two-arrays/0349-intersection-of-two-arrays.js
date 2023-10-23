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

/**
 let obj = {};
    for(let i = 0; i < nums1.length; i++){
        for(let j = 0; j < nums2.length; j++){
            if(nums1[i] == nums2[j]){
                obj[nums1[i]] = nums1[i];
            }
        }
    }
    // Object has O as capital as a keyword.
    return  Object.keys(obj);
 */
   
   let obj1 = {};
   let obj2 = {};
   for(let i = 0; i < nums1.length; i++){
       if(obj1[nums1[i]]){
           obj1[nums1[i]]++;
       }else{
           obj1[nums1[i]] = 1 ;
       }
   }
   console.log(obj1);
   for(let j = 0; j < nums2.length; j++){
       if(obj1[nums2[j]]){
        obj2[nums2[j]] = 1;
       }
   }
   console.log(obj2);
   console.log(Object.keys(obj2));
    return Object.keys(obj2)
};