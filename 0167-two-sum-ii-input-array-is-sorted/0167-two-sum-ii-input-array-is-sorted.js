/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

// worst answer
    // for(var i=0; i<=numbers.length-2; i++){
    //     for(var j = i+1; j<numbers.length;j++){
    //         if(numbers[i]+numbers[j] == target){
    //             return [i+1,j+1]           
    //         }
    //     }
    // }
    // return array
// Good answer
    let start = 0, end = numbers.length - 1;
    while(start < end){
        if(numbers[start] + numbers[end] == target){
            return [start+1, end+1];
        }else if(numbers[start] + numbers[end] > target){
            end--;
        }else{
            start++;
        }
    }
};