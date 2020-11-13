//From LeetCode: https://leetcode.com/problems/longest-substring-without-repeating-characters/
//Given a string, find the length of the longest substring without repeated characters
//Solution: Use Sliding Windows technique. Runtime: O(n)
const lengthOfLongestSubstring = (s) => {
    let head = 0; //start of substring
    let maxLength = 0; //max length of substring with no repeats
    const usedChars = new Map(); //hash used chars

    for (let i = 0; i < s.length; i++) {
        //if char already seen before and seen in current substring,
        //then set head to after the initial repeated char
        if ((usedChars.get(s[i]) != undefined) && (head <= usedChars.get(s[i]))) {
            head = usedChars.get(s[i]) + 1;
        }
        //else max length = the longer of previous max length or current substring length
        else{
            maxLength = Math.max(maxLength, i-head+1);
        }

        //update/add used char last seen index
        usedChars.set(s[i], i);
    }
    return maxLength;
};
