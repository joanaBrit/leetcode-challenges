/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        if (functions.length === 0) {
            return x
        }
        let result = x
        for (let i = functions.length - 1; i >= 0; i--) {
            result = functions[i](result)
        }
        return result
    }
};

/**  
- I have an array of functions that returns a function fn
- If the functions array is empty, return x. If not, return another function.
- Read the array from right to left.
*/

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */