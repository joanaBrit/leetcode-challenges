# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def postorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        def traverse(node):
            if not node:
                return []

            left = traverse(node.left)
            right = traverse(node.right)
            return left + right + [node.val]
        return traverse(root)

# Postorder Traversal - order: left subtree, right subtree, and then the root node.
# If not node, return an empty list
# Final result for node, left + right - add to the node val
# Call the traversal function




#          * @param {TreeNode} root
#  * @return {number[]}
#  */
# function getValueAndPushToList(node, list) {
#     console.log(node?.val, node?.left?.val, node?.right?.val)

#     if (node?.val == undefined) {
#         return
#     }
#     list.push(node.val)
#     getValueAndPushToList(node.left, list)
#     getValueAndPushToList(node.right, list)
# }

# var preorderTraversal = function (root) {
#     const list = []
#     getValueAndPushToList(root, list)

#     return list
# };