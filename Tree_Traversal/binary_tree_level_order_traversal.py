#From LeetCode: https://leetcode.com/problems/binary-tree-level-order-traversal/
#Given a binary tree, return the level order traversal of its nodes' values.
#(ie, from left to right, level by level).
#Example: Given binary tree [3,9,20,null,null,15,7]
#     3
#    / \
#   9  20
#     /  \
#    15   7
#return its level order traversal as:
# [
#   [3],
#   [9,20],
#   [15,7]
# ]

#Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

#Solution: Append level nodes to an output array and update level with
#next level nodes (child nodes) until reaching end of tree (empty level)
class Solution:
    def levelOrder(self, root: TreeNode) -> List[List[int]]:
        #check if tree is empty
        if not root:
            return []
        
        #initialize output & level arrays
        output, level = [], [root]
        
        #repeat until reaching end of tree (level empty)
        while level:
            #add level to output array
            output.append([node.val for node in level])
            #set next level
            childNodes = []
            #get all left & right child nodes of this level nodes
            for node in level:
                childNodes.extend([node.left, node.right])
            #exclude all null nodes & set to level
            level = [child for child in childNodes if child]
        return output