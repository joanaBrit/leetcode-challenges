/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
    return {
        toBe: function (val1) {
            if (val1 === val) {
                return true
            } else {
                throw new Error("Not Equal")
            }
        },
        notToBe: function (val2) {
            if (val2 !== val) {
                return true
            } else {
                throw new Error("Equal")
            }
        }
    }
};


// toBe(val) === expect(val) = true
// toBe(val) != expect(val) = throw error "Not Equal"
// notToBe(val) = true if toBe(val) != expect(val)
// notToBe(val) = toBe(val) === expect(val) = throw error "Equal"

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */