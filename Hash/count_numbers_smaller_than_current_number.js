//From LeetCode: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
/*Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].*/
//Solution: Sort copy of array (to get count by index), hash non-repeated numbers
const smallerNumbersThanCurrent = (nums) => {
    let hashNums = new Map();
    //create copy of array to sort
    let numsCopy = [...nums];
    numsCopy.sort((a, b) =>{return a-b});
    //iterate sorted array, hash each non-repeated number to index
    //(index = # of smaller numbers after sorting)
    for (let i = 0; i < nums.length; i++) {
        if (!hashNums.has(numsCopy[i])) {
            hashNums.set(numsCopy[i], i);
        }
    }
    //return numbers from hash
    return nums.map(num => hashNums.get(num));
};
