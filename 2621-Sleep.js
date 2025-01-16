/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve) => setTimeout(resolve, millis))
}

// Asynchronous function will return a promise
// Create a new Promise object
// setTimeOut function to delay execution (millis) and then calls resolve 
// Return a Promise that resolves after the timeout.

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */