#From LeetCode: https://leetcode.com/problems/search-insert-position/
#Given a sorted array of distinct integers and a target value, return the index if the target is found.
#If not, return the index where it would be if it were inserted in order.

#Example: nums = [1,3,5,6], target = 5 --> 2
#Example: nums = [1,3,5,6], target = 7 --> 4
#Example: nums = [1], target = 0 --> 0

#Solution: Use binary search method. If target value = midpoint value, then target is found.
#If target value > midpoint value, set range to right of midpoint and repeat.
#If target value <= midpoint value, set range to left of midpoint and repeat. 

class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        #set left & right range
        left , right = 0, len(nums)-1
        
        #while range has elements
        while left <= right:
            #set midpoint
            midpoint=(left+right)//2
            #if midpoint = target, return
            if nums[midpoint] == target:
                return midpoint
            #if midpoint < target, update left boundary to after midpoint
            elif nums[midpoint] < target:
                left = midpoint+1
            #if midpoint >= target, update right boundary to before midpoint
            else:
                right = midpoint-1
        
        #exits while loop when target not in nums
        #return left boundary index (adjusted at end of loop)
        return left

#Runtime calculation: length of array after k iterations
# = n/(2^k) = 1
# n = 2^k
# log n = log 2^k
# log n = k log 2
# log n = k
#Runtime: O(log n)