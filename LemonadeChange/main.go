package main

import "fmt"

/**
At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.

Input: bills = [5,5,5,10,20]
Output: true
Explanation:
From the first 3 customers, we collect three $5 bills in order.
From the fourth customer, we collect a $10 bill and give back a $5.
From the fifth customer, we give a $10 bill and a $5 bill.
Since all customers got correct change, we output true.

example 2:
Input: bills = [5,5,10,10,20]
Output: false
Explanation:
From the first two customers in order, we collect two $5 bills.
For the next two customers in order, we collect a $10 bill and give back a $5 bill.
For the last customer, we can not give the change of $15 back because we only have two $10 bills.
Since not every customer received the correct change, the answer is false.
**/

func main() {
	bills := []int{5, 5, 5, 10, 20}
	res := lemonadeChange(bills)
	fmt.Println(">>> res", res)
	bills2 := []int{5, 5, 10, 10, 20}
	res2 := lemonadeChange(bills2)
	fmt.Println(">>> res", res2)
}

func lemonadeChange(bills []int) bool {
	totalFive := 0
	totalTen := 0
	for _, bill := range bills {
		if bill == 5 {
			totalFive += 1
		}
		if bill == 10 {
			totalTen += 1
		}
		change := bill - 5
		// if we need to give 5 dollars back
		if change == 5 {
			if totalFive > 0 {
				totalFive -= 1
			} else {
				// return false if we have no more 5s to return
				return false
			}
		} else if change == 15 {
			// two possible ways to make change for 15, 1 10 or 4 fives, check if we can perform either
			if totalFive > 0 && totalTen > 0 {
				totalFive -= 1
				totalTen -= 1
			} else if totalFive >= 3 {
				totalFive -= 3
			} else {
				// return false if we have no 5s or 10s, we cant make any change.
				return false
			}
		}
	}
	return true
}
