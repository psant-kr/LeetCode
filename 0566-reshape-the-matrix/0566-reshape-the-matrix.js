/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    let result ;
    if((mat.length*mat[0].length) == r*c){
        let Matrix = Array(r);
        for(let i = 0; i <  Matrix.length;i++){
            let newarr = Array(c);
             Matrix[i] = newarr;
        }
        // console.log(Matrix);
        let array = [];
        for(let i = 0; i < mat.length; i++){
            for(let j = 0; j < mat[i].length;j++){
                array.push(mat[i][j]);
             }
        }
        for(let r = 0; r < Matrix.length; r++){
            for(let c = 0; c < Matrix[r].length; c++){
                Matrix[r][c] = array.shift();
            }
        }
        result = Matrix;
    }else{
        result = mat;
    }

    return result;
};