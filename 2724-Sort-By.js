/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a, b) => fn(a) - fn(b))  
};

/**
Sort the array

A negative value if a should come before b.
descending order b - a
A positive value if b should come before a.
ascending order a - b
Zero if the order of a and b doesn't matter.
 */ 
