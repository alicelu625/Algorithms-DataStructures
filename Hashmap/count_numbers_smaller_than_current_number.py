#From LeetCode: https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
#Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. 
#That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].*/
#Solution: Sort copy of array (to get count by index), hash non-repeated numbers
class Solution:
    def smallerNumbersThanCurrent(self, nums: List[int]) -> List[int]:
        hashNums = {}
        for idx, num in enumerate(sorted(nums)):
            hashNums.setdefault(num, idx) #setdefault - does not set repeated number
        return [hashNums[num] for num in nums]