/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
    let hasBeenCalled = false
    
    return function (...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true
            return fn(...args)
        } else {
            return undefined
        }
    }
};

// Given a function return a new function
// First time the return function is called, have the same result as fn
// Check if the function it was called
// Other times when is called will return undefined

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
