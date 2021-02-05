#From LeetCode: https://leetcode.com/problems/valid-parentheses/
#Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
#determine if the input string is valid.

#Example: s = "()[]{}" - true
#Example: Input: s = "([)]" - false

#Solution: Use a stack to keep track of open parentheses & hash to keep
#track of matching parentheses. For each closing parentheses, it is valid
#if top stack element is the matching open parenthese

class Solution:
    def isValid(self, s: str) -> bool:
        #initialize stack for tracking open parentheses
        stack = []
        #initialize hash of valid closing to open parenthenses
        parenHash = {
            "]":"[", 
            "}":"{",
            ")":"("
        }
        
        #for characters in s
        for char in s:
            #if open parentheses & valid, add to stack
            if char in parenHash.values():
                stack.append(char)
            #if close parentheses & valid
            elif char in parenHash:
                #if stack empty, return false (not matching number of parentheses)
                #if top stack element is not the matching open parentheses, return false
                if stack == [] or parenHash[char] != stack.pop():
                    return False
            #if not valid parentheses, return false
            else:
                return False
            
        #if stack is empty by the end of iteration, return true
        return stack == []