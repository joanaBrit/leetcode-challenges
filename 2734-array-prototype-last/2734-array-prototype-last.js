/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function() {
    if(this.length > 0) {
        return this[this.length - 1]
    } else {
        return -1
    }
};


// Inside the function, we first check if the array has any elements - If it's not empty (this it's the array itself)
// If there are elements, we calculate the index of the last elements
// else if the array is empty we return -1

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */