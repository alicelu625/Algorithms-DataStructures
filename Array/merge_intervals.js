//From LeetCode: https://leetcode.com/problems/merge-intervals/
/*Given an array of intervals where intervals[i] = [starti, endi],
merge all overlapping intervals, and return an array of the non-overlapping
intervals that cover all the intervals in the input.*/

/*Examples:
intervals = [[1,3],[2,6],[8,10],[15,18]] --> [[1,6],[8,10],[15,18]]
intervals = [[1,4],[4,5]] --> [[1,5]]
*/

/*Solution:
Sort the intervals by each starting interval value. From the
first interval, check if it can be merged with the next and so on (by comparing
current interval's start with next interval's end). When it can no longer merge,
go to the next interval and repeat until end of intervals.
*/

//Runtime: O(nlogn) - sorting

const merge = (intervals) => {
    //if only 1 interval, return interval
    if (intervals.length <= 1) {
        return intervals;
    }
    
    //sort intervals by each starting interval
    intervals.sort((a, b) => a[0] - b[0]);
    
    //merge intervals
    const results = [];
    let current = intervals[0];
    
    //repeat until end of interval
    for (let i = 1; i < intervals.length; i++) {
        //if current interval's end >= next interval's start, merge
        if (current[1] >= intervals[i][0]) {
            current = [current[0], Math.max(current[1], intervals[i][1])];
        } 
        //else add current interval to results & set current to next interval
        else {
            results.push(current);
            current = intervals[i];
        }
    }
    
    //add last (current interval)
    results.push(current);
    
    return results;
};