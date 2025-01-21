/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const results = {}
    const memo = (a, b)=> {
        const key = [a, b].join(',')

        if (results[key] === undefined) {
            const value = fn(a, b)
            results[key] = value
            return value
        } else {
            return results[key]
        }
    }
    return memo
}

/** 
- return a memoized function of fn
- memoized means it never will be called twice with the same input
- sum accepts 2 int and returns the sum of them
- if a value as already been catched(stored) it's needed to do a different call like (a,b) != (b,a)
- I need to check if  (a,b) != (b,a) if not do the sum if yes make different calls
- fib accepts 1 int n:
 -> if n <= 1 returns 1
 -> else fib(n - 1) + fib(n - 2)
- factorial accepts 1 int n:
 -> if n <= 1 returns 1
 -> else factorial(n - 1) * n
*/

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */