/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// integer array - arr
// mapping function - fn
// return an array
// returnedArray[i] = function fn(integer arr[index], index)

var map = function(arr, fn) {
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        newArray.push(fn(arr[i], i));
    }
    return newArray
};