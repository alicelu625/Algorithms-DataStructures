#From LeetCode: https://leetcode.com/problems/symmetric-tree/
#Given a binary tree, check whether it is a mirror of itself
#(ie, symmetric around its center).
#Example of symmetric binary tree [1,2,2,3,4,4,3]
#     1
#    / \
#   2   2
#  / \ / \
# 3  4 4  3
#Example of not symmetric tree [1,2,2,null,3,null,3]
#     1
#    / \
#   2   2
#    \   \
#    3    3

#Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

#Solution: A tree is symmetric if the left subtree is a mirror reflection of the right subtree.
#2 trees are mirrored if the roots have same value
#and right subtree of each tree is mirrored with left subtree of the other tree
#Runtime: O(log n) - increases proportional to tree size
class Solution:
    def isSymmetric(self, root: TreeNode) -> bool:
        #if tree is empty, return true
        if root is None:
            return True
        
        #initialize stack with [left child, right child]
        stack = [[root.left, root.right]]
        
        #while stack is not empty
        while len(stack) > 0:
            #get the last added pair from stack
            lastAddedPair = stack.pop(0)
            #define left & right node
            left = lastAddedPair[0]
            right = lastAddedPair[1]
            
            #if both left and right are null (end of tree), skip
            if left is None and right is None:
                continue
            #if one is null (not mirrored), return false
            if left is None or right is None:
                return False
            
            #if left = right (mirrored), add child nodes to stack
            if left.val == right.val:
                stack.append([left.left, right.right]) #outer nodes
                stack.append([left.right, right.left]) #inner nodes
            #if left != right (not mirrored), return false
            else:
                return False
        
        #stack is emptied (all nodes mirrored), return true
        return True