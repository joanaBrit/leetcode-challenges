/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let array1 = word1.split('')
    let array2 = word2.split('')
    console.log(array1, array2)

    const result = []
    let minLength = Math.min(array1.length, array2.length)

    for (i = 0; i < minLength; i++) {
        result.push(array1[i], array2[i])
    }
    result.push(...array1.slice(minLength), ...array2.slice(minLength))
    return result.join('')
};

// Merge strings  - concat()
// Separate the two strings by characters
// Check the length of both strings if one is longer add all letters in the end
// Add the letters alternating