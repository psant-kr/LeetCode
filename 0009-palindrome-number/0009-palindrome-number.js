/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y = x.toString();

  let z = y.split("").reverse().join("");

 
  if (y === z) {
    return true;
  } else {
    return false;
  }
};

