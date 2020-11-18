//From LeetCode: https://leetcode.com/problems/longest-palindromic-substring/how-many-numbers-are-smaller-than-the-current-number/
//Given a string s, return the longest palindromic substring in s (reads the same in both directions).
//Solution: Dynamic Programming, if the smaller substring is a palindrome,
	//then the bigger substring, with its 2 left & right end letters, is a palindrome if the end letters are the same
//Runtime: O(n^2)

class Solution {
	public String longestPalindrome(String s) {
		int n = s.length(); //store length of s for simpler use
		String result = ""; //store returning string

		//2d array to keep track if substring with end letters i & j is a palindrome
		boolean[][] isPalindrome = new boolean[n][n];

		for (int i = n-1; i>=0; i--) {
			for (int j = i; j < n; j++) {
				//if P(i+1, j-1) is a palindrome & i = j, then P(i, j) is a palindrome
				//or if i = j & there are 2 or less characters, then P(i, j) is a palindrome
				if (s.charAt(i) == s.charAt(j) && (j - i < 3 || isPalindrome[i+1][j-1])) {
					isPalindrome[i][j] = true;
				}
				else {
					isPalindrome[i][j] = false;
				}

				//check if palindromic substring is the longest one
				//if P(i, j) is a palindrome & result string is empty
				//or P(i, j) is a palindrome & its length is longer than result string
				//then set result string to P(i, j)
				if (isPalindrome[i][j] && (result == null || j-i+1 > result.length())) {
					result = s.substring(i, j+1);
				}
			}
		}

		return result;
	}
}