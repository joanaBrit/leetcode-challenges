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

// I have an array of functions that returns a function fn
// fn(x) = f(g(h(x))) - what it means that the it starts with a first function and the next one it will be inside and repedidently.
// if the functions array is empty return x, if not returns another function
// read the array from right to left

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */