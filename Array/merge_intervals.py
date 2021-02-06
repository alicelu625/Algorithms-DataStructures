#From LeetCode: https://leetcode.com/problems/merge-intervals/
#Given an array of intervals where intervals[i] = [starti, endi],
#merge all overlapping intervals, and return an array of the non-overlapping
#intervals that cover all the intervals in the input.

#Example: intervals = [[1,3],[2,6],[8,10],[15,18]] --> [[1,6],[8,10],[15,18]]
#Example: intervals = [[1,4],[4,5]] --> [[1,5]]

#Solution: Sort the intervals by each starting interval value. From the
#first interval, check if it can be merged with the next and so on. When
#it can no longer merge, go to the next interval and repeat until end of intervals.

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        #sort intervals by each starting interval
        intervals = sorted(intervals, key= lambda x: x[0])
        
        i=0
        #repeat until end of interval
        while i < len(intervals)-1:
            #if current interval's end >= next interval's start, merge
            if intervals[i][-1] >= intervals[i+1][0]:
                #set current interval's end as the max of current/next interval
                intervals[i][-1] = max(intervals[i][-1], intervals[i+1][-1])
                #remove next interval
                del intervals[i+1]
            #if current interval's end < next interval's start, don't merge
            else:
                #set next interval as current interval
                i = i+1
            
        return intervals