//From LeetCode: https://leetcode.com/problems/maximum-subarray/
/*Problem:
Given an integer array nums, find the contiguous subarray (containing at least one number)
which has the largest sum and return its sum.

Examples:
nums = [-2,1,-3,4,-1,2,1,-5,4] --> 6 from [4,-1,2,1]
nums = [5,4,-1,7,8] --> 23 from [5,4,-1,7,8]
*/

/*Solution: Use Dynamic Programming
Subproblem: Solve for maxSum(i) = Maximum sum ending at index i
Problem: Subarray that ends at whichever i that has the largest sum.
Solve for maximum sum at any index i, which has option of
1. continue the subarray: (maximum sum found up until i) + i  OR
2. start new subarray at i: new maximum sum from i
--> maxSum(i) = max[maxSum(i-1) + nums[i], nums[i]]
keep track of the largest maxSum

Explanation video: https://www.youtube.com/watch?v=2MmGzdiKR9Y&ab_channel=BackToBackSWE
*/

//Runtime: O(n) - traverses array once

const maxSubArray = (nums) => {
    //initialize max sum at subarray consisting of 1st element
    let maxAt_i = nums[0];
    let largestMaxSum = nums[0];
    
    //for each number in nums
    for (let i = 1; i < nums.length; i++) {
        //determine the larger max sum of:
        //(max sum of subarray ending at i-1) + num at i
        //or max sum of new subarray at i
        maxAt_i = Math.max(maxAt_i + nums[i], nums[i]);
        //update the largest max sum found so far
        largestMaxSum = Math.max(largestMaxSum, maxAt_i);
    }
    
    return largestMaxSum;
};

/*Example iteration: 
[-2, 1, -3, 4, -1, 2, 1, -5, 4] -> 6 [4, -1, 2, 1]

i:               0  1   2  3   4  5  6   7  8
Array:         [-2  1  -3  4  -1  2  1  -5  4]
maxAt_i:        -2  1  -2  4   3  5  6   1  5
largestMaxSum:  -2  1   1  4   4  5  6   6  6

maxAt_i = maximum sum at i = max(maxAt_i + nums[i], nums[i])
largestMaxSum = largest sum out of maximums computed at each i = max(largestMaxSum, maxAt_i);

largestMaxSum = nums[0] = -2
maxAt_i = nums[0] = -2

nums[1] = 1
maxAt_i = max(-2 + 1, 1) = 1
largestMaxSum = max(-2, 1) = 1

nums[2] = -3
maxAt_i = max(1 + (-3), -3) = -2
largestMaxSum = max(1, -2) = 1

nums[3] = 4
maxAt_i = max(-2 + 4, 4) = 4
largestMaxSum = max(1, 4) = 4

nums[4] = -1
maxAt_i = max(4 + (-1), -1) = 3
largestMaxSum = max(4, 3) = 4

nums[6] = 2
maxAt_i = max(3 + 2, 2) = 5
largestMaxSum = max(4, 5) = 5

nums[7] = 1
maxAt_i = max(5 + 1, 1) = 6
largestMaxSum = max(5, 6) = 6

nums[8] = -5
maxAt_i = max(6 + (-5), -5) = 1
largestMaxSum = max(6, 1) = 6

nums[9] = 4
maxAt_i = max(1 + 4, 4) = 5
largestMaxSum = max(6, 5) = 6
*/
