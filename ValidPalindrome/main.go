package main

import "strings"

/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.



Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

**/

func isPalindrome(s string) bool {
	// lastIndex := len(s) - 1

	// for i := 0; i < len(s); i++ {
	// 	if s[i] != s[lastIndex-i] {
	// 		return false
	// 	}
	// }
	// return true

	cleaned := strings.ToLower(s)
	leftPointer := 0
	rightPointer := len(s) - 1

	for leftPointer < rightPointer {
		// these will be bytes
		left := cleaned[leftPointer]
		right := cleaned[rightPointer]

		// check if byter is a alphanumeric value
		if !isAlphanumeric(left) {
			leftPointer++
			continue
		}

		if !isAlphanumeric(right) {
			rightPointer--
			continue
		}

		if left != right {
			return false
		}
		leftPointer++
		rightPointer--
	}
	return true
}

func isAlphanumeric(b byte) bool {
	return (b >= 'a' && b <= 'z') || (b >= '0' && b <= '9')
}
