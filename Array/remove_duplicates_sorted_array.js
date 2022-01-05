//From LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/*Given a sorted array nums, remove the duplicates in-place such that each element
#appears only once and returns the new length.*/

/*Solution: 
From the beginning, check if current number is same as next number.
If same, remove next number. Continue checking until end of array.
*/

//Runtime: O(n) - traverses array

const removeDuplicates = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        //if next number is same as current number
        if (nums[i] == nums[i+1]) {
            //remove next number
            nums.splice(i+1, 1);
            //keep index the same for next interation
            i = i-1;
        }
    }
};