/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function getValueAndPushToList(node, list) {
    console.log(node?.val, node?.left?.val, node?.right?.val)

    if (node?.val==undefined) {
        return
    }
    list.push(node.val)
    getValueAndPushToList(node.left, list)
    getValueAndPushToList(node.right, list)
}

var preorderTraversal = function (root) {
    const list = []
    getValueAndPushToList(root, list)

    return list
};

