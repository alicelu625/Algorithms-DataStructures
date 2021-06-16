//From LeetCode: https://leetcode.com/problems/palindrome-number/
/*Given an integer x, return true if x is palindrome integer.
An integer is a palindrome when it reads the same backward as forward.*/
//Ex. 121 is palindrome, 123 is not.

//Solution: Eliminate edge cases first (negative numbers & numbers that end with 0).
//Revert the last half of the integer & compare with the first. If same, the integer is a palindrome.
//Runtime: O(log(n)) - input divided by 10 for every iteration

const isPalindrome = (x) => {
    //if negative number (starts with "-")
    //or if last digit is "0" but number is not "0", return false
    if (x < 0 || (x%10 == 0 && x !== 0)) {
        return false;
    }
    
    //initialize reverted number as 0
    let revertedInt = 0;
    
    //while reverted number is less than x (not halfway yet)
    while (revertedInt < x) {
        //add digit to reverted number
        revertedInt = revertedInt*10 + (x % 10)
        
        //remove last digit from x
        x = Math.floor(x/10);
    }
    
    //when halfway, check if x = reverted number or
    //if reverted number w/o last digit (odd number) = x
    return x == revertedInt || x == Math.floor(revertedInt/10);
};
