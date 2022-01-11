//From LeetCode: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
/*Given an array prices where prices[i] is the price of a given stock on the ith day.
Maximize profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.*/

/*Examples:
prices = [7,1,5,3,6,4] --> 5
prices = [7,6,4,3,1] --> 0
*/

/*Solution:
For each price, check for new minimum price & max profit between current price and minimum price.
*/

//Runtime: O(n) - traverses through array

const maxProfit = (prices) => {
    //initialize min as very large number
    let minPrice = Number.MAX_SAFE_INTEGER;
    //initialize max profit as 0 (in the case that there's no profit)
    let maxProfit = 0;
    
    //for each price
    for (let i = 0; i < prices.length; i++) {
        //reset min price if find new lower price
        minPrice = Math.min(minPrice, prices[i]);
        //reset max profit if find new higher profit
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }
    
    return maxProfit;
};