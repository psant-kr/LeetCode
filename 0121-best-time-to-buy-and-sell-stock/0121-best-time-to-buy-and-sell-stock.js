/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
        let curMin = prices[0]; // atleast buy on day 0
        let profit = 0;
    for(let i = 1; i < prices.length; i++){
        // can i sell ?
        if(prices[i] > curMin){
            profit = Math.max(profit, prices[i] - curMin);
        }
        // can i buy ?
        if(prices[i] < curMin){
            curMin = prices[i];
        }
    }

    return profit;
};