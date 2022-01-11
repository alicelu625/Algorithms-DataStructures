//From LeetCode: https://leetcode.com/problems/contains-duplicate/
/*Given an integer array nums, return true if any value appears at least twice in the array,
and return false if every element is distinct.*/

/*Examples:
nums = [1,2,3,1] --> true
nums = [1,2,3,4] --> false
*/

/*Solution:
Attempt to filter out any duplicates by turning array into set of unique numbers.
If set is smaller than array, that means array contained duplicates that got filtered out.
*/

//Runtime: O(n) - checks all values in array

const containsDuplicate = (nums) => {
    //filter out duplicate numbers by turning array into a set of unique numbers
    let arrayToSet = new Set(nums);
    
    //if set of unique numbers smaller than array,
    //then true (meaning existed duplicate number was filtered out)
    return arrayToSet.size < nums.length;
};