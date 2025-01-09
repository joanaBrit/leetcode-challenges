/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
// Initialise an empty array to store the elements
// interate over each element
// filteredArr only contain arr elements from fn(arr[i], i)
// push to the new array if the condition is true


var filter = function (arr, fn) {
    let newArray = []
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            newArray.push(arr[i])
        }
    }
    return newArray
};
