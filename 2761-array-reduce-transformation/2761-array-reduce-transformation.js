/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
// Have a variable with the value of init, to hold the accumulated value
// Loop through the nums array
// Apply function fn to update the value of val
// Return the final accumulated value

var reduce = function (nums, fn, init) {
    let val = init
    for (let i = 0; i < nums.length; i++) {
        val = fn(val, nums[i])
    }
    return val
};