package main

// /https://medium.com/@AlexanderObregon/solving-the-palindrome-number-on-leetcode-go-solutions-walkthrough-7951276b04e1
func isPalindrome(x int) bool {
	reversedInt := 0
	temp := x
	for temp > 0 {
		reversedInt = reversedInt*10 + temp%10
		temp = temp / 10
	}
	return x == reversedInt
}
