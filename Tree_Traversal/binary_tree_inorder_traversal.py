#From LeetCode: https://leetcode.com/problems/binary-tree-inorder-traversal/
#Given the root of a binary tree, return the inorder traversal of its nodes' values.

#Example: root = [1,null,2,3] --> [1, 3, 2]
#    1
#     \
#      2
#     /
#    3  
#Example: root = [] --> []
#Example: root = [1] --> [1]
#Example: root = [1, 2] --> [2, 1]
#     1
#    /
#   2
#Example: root = [1,null,2] --> [1, 2]
#     1
#      \
#       2

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

#Solution: Use recursion & stack to iterate tree
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        #initialize output array & stack
        output, stack = [], []
        
        #initialize current node as root node
        curr = root
        
        #run until current node is null or stack is empty
        while (curr is not None or len(stack) > 0) :
            #add all left child nodes to stack, run until current code is null
            while (curr is not None) :
                stack.append(curr)
                curr = curr.left

            #add last added stack node to output & set current node to right child
            curr = stack.pop()
            output.append(curr.val)
            curr = curr.right
        
        #return output array
        return output