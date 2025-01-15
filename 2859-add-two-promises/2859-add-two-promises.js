/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
    let newPromise = (await promise1) + (await promise2)
    return newPromise
};

// wait for the promise
// make the sum of the 2 promises
// return a new promise

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */