/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let result = Array(m+n).fill(0);
    let i = 0; // iterate on nums1
    let j = 0; // iterate on nums2
    let k = 0; // iterate on result

    while(i < m && j < n){
        if(nums1[i] < nums2[j]){
            result[k] = nums1[i];
            k++;
            i++;
        }else{
            result[k] = nums2[j];
            k++;
            j++;
        }
    }
    // The above while loop will end when any one array exhausts
    while(i < m){
        // nums1 still got some elements left
        result[k] = nums1[i];
        k++;
        i++;
    }
    while(j < n){
        //  nums2 still got some elements left
        result[k] = nums2[j];
        k++;
        j++;
    }
    // because the questions demands
    for(let i = 0; i < result.length; i++){
        nums1[i] = result[i];
    }


};