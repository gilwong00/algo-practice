/*
	Say you have an array for which the ith element is the price of a given stock on day i.
	If you were only permitted to complete at most one transaction 
	(i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.
	Note that you cannot sell a stock before you buy one

	Input: [7,1,5,3,6,4]
	Output: 5
	Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
	Not 7-1 = 6, as selling price needs to be larger than buying price.
	
	second use case
	Input: [7,6,4,3,1]
	Output: 0
	Explanation: In this case, no transaction is done, i.e. max profit = 0.
*/

function maxProfit(prices) {
  let maxProfit = 0;
  let buyPrice = 0;
  let sellPrice = 0;
  let changeBuyPrice = true;

  for (let i = 0; i < prices.length; i++) {
    if (changeBuyPrice) {
      buyPrice = prices[i];
    }
    sellPrice = prices[i + 1];

    if (sellPrice < buyPrice) {
      changeBuyPrice = true;
    } else {
      let profit = sellPrice - buyPrice;
      if (profit > maxProfit) {
        maxProfit = profit;
      }
      changeBuyPrice = false;
    }
  }
  return maxProfit;
}

maxProfit([7, 1, 5, 3, 6, 4]);
maxProfit([7, 6, 4, 3, 1]);
