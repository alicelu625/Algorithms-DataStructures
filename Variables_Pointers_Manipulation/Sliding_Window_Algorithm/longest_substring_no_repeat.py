#From LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
#Given a string, find the length of the longest substring without repeated characters
#Solution: Use Sliding Windows technique. Runtime: O(n)
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        head = 0 #start of substring
        maxLength = 0 #max length of substring with no repeats
        usedChars = {} #hash used chars
        
        for i in range(len(s)):
            #if char already seen before and seen in current substring,
            #then set head to after the initial repeated char
            if s[i] in usedChars and head <= usedChars[s[i]]:
                head = usedChars[s[i]] + 1
            #else max length = the longer of previous max length or current substring length
            else:
                maxLength = max(maxLength, i-head+1)
                
            #update/add used char last seen index
            usedChars[s[i]] = i

        return maxLength