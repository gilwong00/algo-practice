package main

import "fmt"

/**
You are given an array prices where prices[i] is the price of a given stock on the ith day.
You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
*/

func maxProfit(prices []int) int {
	if len(prices) == 0 {
		return 0
	}
	maxProfit := 0
	buyingPrice := prices[0]

	for _, price := range prices {
		if buyingPrice > price {
			buyingPrice = price
		} else {
			profit := price - buyingPrice
			if profit > maxProfit {
				maxProfit = profit
			}
		}
	}
	return maxProfit
}

func main() {
	r := maxProfit([]int{7, 1, 5, 3, 6, 4})
	fmt.Println("profit", r) // should be 5 -> 6 - 1
}
