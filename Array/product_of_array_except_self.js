//From LeetCode: https://leetcode.com/problems/product-of-array-except-self/
/*Given an integer array nums, return an array answer such that answer[i] is
equal to the product of all the elements of nums except nums[i].*/

/*Examples:
nums = [1,2,3,4] --> [24,12,8,6]
nums = [-1,1,0,-3,3] --> [0,0,9,0,0]
*/

/*Solution:
Each number in nums is the product of left & right product of the number. For each number,
find its left product and its right product by multiplying the numbers on their respective sides.
Use 1 as placeholders for those with no left/right values.

Example: nums = [1, 2, 3, 4]
Numbers:     1    2    3     4     Numbers:     1    2    3     4
Lefts:            1  1*2 1*2*3 --> Lefts:       1    1  1*2 1*2*3 --> [ 1,  1, 2, 6]
Rights:  4*3*2  4*3    4           Rights:  4*3*2  4*3    4     1 --> [24, 12, 4, 1]
                                                                  --> [24, 12, 8, 6]
*/

//Runtime: O(n) - loops through values in array

const productExceptSelf = (nums) => {
    //initialize array to store result
    let result = new Array(nums.length);
    
    //initialize left product as 1 as a placeholder number
    let leftProd = 1;
    //for each number in array starting from the left
    for (let i = 0; i < nums.length; i++) {
        //if number is not the leftmost number, update left product of i
        if (i > 0) {
            leftProd = leftProd * nums[i-1];
        }
        //store left product of i
        result[i] = leftProd;
    }

    
    //initialize right as 1 as a placeholder number
    let rightProd = 1;
    //for each number in array starting from the right
    for (let i = nums.length - 1; i >= 0; i--) {
        //if number is not the rightmost number, update right product of i
        if (i < nums.length - 1) {
            rightProd = rightProd * nums[i+1];
        }
        //store right product * left product of i as result for i
        result[i] = result[i] * rightProd;
    }

    return result;
};