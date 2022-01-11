//From LeetCode: https://leetcode.com/problems/two-sum/
/*Given an array of integers nums and an integer target, 
return indices of the two numbers such that they add up to target.
Assumption: Each input would have exactly one solution & may not use the same element twice*/

/*Examples:
nums = [2,7,11,15], target = 9 --> [0,1]
nums = [3,2,4], target = 6 --> [1,2]
*/

/*Solution:
Use a map to keep track of visited numbers in array. For each number in array,
check if the matching pair (target minus number) is in map (already visted).
If so, it is a match with the current number. If not, continue checking.
*/

//Runtime: O(n) - traverses through array

var twoSum = function(nums, target) {
    // create map to store visited numbers
    const map = new Map();

    // for each number in nums
    for(let i = 0; i < nums.length; i++) {
        // find matching number to i that add up to target by taking the difference
        const match = target - nums[i];
        // if the matching number is in map (already visited)
        if(match in map){
            // DONE - return the index of the match, and current index
            return [map[match], i];
        }
        // else, set current number to current index in map & continue checking
        map[nums[i]] = i;
    }
};