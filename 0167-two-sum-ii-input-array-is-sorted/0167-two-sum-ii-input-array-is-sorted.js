/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(var i=0; i<=numbers.length-2; i++){
        for(var j = i+1; j<numbers.length;j++){
            if(numbers[i]+numbers[j] == target){
                return [i+1,j+1]           
            }
        }
    }
    return array
};