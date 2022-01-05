//From LeetCode: https://leetcode.com/problems/valid-parentheses/
/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.*/

/*Examples
s = "()[]{}" - true
Input: s = "([)]" - false
/*

/*Solution:
Use a stack to keep track of open parentheses & hash to keep
track of matching parentheses. For each closing parentheses, it is valid
if top stack element is the matching open parenthese.
*/

//Runtime: O(n) - traverse array

const isValid = (s) => {
    //initialize stack for tracking open parentheses
    const stack = [];
    
    //initialize hash of valid closing to open parentheses
    const map = {
      '(': ')',
      '[': ']',
      '{': '}'
    }
    
    //iterate through each character in s
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        //if open parentheses & valid, add to stack
        if (map[char]) {
            stack.push(map[char]);
        } 
        //else if stack is empty (not matching number of parentheses)
        //or if closing parentheses & not valid (not matching top stack element)
        else if ((stack.length == 0) || (char !== stack.pop())) {
          return false;
        } 
    }
    
    //if stack is empty by the end of iteration, return true
    return stack.length == 0;
};