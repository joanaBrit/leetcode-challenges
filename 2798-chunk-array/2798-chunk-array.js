/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const chunk = []
    for(let i=0; i<arr.length; i+= size){
        chunk.push(arr.slice(i, i + size))
    }
    return chunk
};

/**

- Return a Chuncked array - will have an array inside an array
- Subarray have a length - size
- The length of the last subarray may be less than size if arr.length is not evenly divisible by size
 */