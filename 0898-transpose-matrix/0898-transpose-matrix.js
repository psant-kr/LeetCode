/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function(matrix) {
    let arr = Array(matrix[0].length);
    for (let i=0; i < arr.length ;i++){
    let inner = Array(matrix.length);
    arr[i] = inner;
    };
        for(let i = 0; i < matrix.length; i++){
            for(let j = 0; j < matrix[i].length; j++){ 
// here we are getting the value from matrix and setting in arr.
                 arr[j][i] = matrix[i][j];
             }
         }
    return arr;
};

// next solution
// let temp = "";
//     for(let i = 0; i < matrix.length; i++){
//         for(let j = i+1; j < matrix[i].length; j++){ 

//             // temp = matrix[i][j];
//             // matrix[i][j] = matrix[j][i]; // not valid for square matrix
//             // matrix[j][i]= temp;
//         }
//     }
// //    return matrix
// };   
