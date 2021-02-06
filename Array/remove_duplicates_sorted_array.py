#From LeetCode: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
#Given a sorted array nums, remove the duplicates in-place such that each element
#appears only once and returns the new length.

#Solution: From the beginning, check if next number is same as current number.
#If same, remove next number, keep checking the next. If not same, set next
#number as current number and keep checking until reaching end of nums.

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        #initialize iterator 
        i = 0

        #run until reaching last element
        while i < len(nums)-1:
            #if next number is same as current number
            if nums[i] == nums[i+1]:
                #remove next number
                del nums[i+1]
            #if not same, set next number as current number
            else:
                i = i+1
                
        #return updated length
        return len(nums)