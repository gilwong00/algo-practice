package main

/**
Given an integer x, return true if x is a
palindrome
, and false otherwise.



Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

*/

// /https://medium.com/@AlexanderObregon/solving-the-palindrome-number-on-leetcode-go-solutions-walkthrough-7951276b04e1
func isPalindrome(x int) bool {
	reversedInt := 0
	temp := x
	for temp > 0 {
		// reversing the int, takes the last number from x and appends it to the beginning
		// of reverseInt.
		reversedInt = reversedInt*10 + temp%10
		// removing the digit from the temp. We do this till temp becomes 0
		temp = temp / 10
	}
	return x == reversedInt
}
