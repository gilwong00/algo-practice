package main

import "strings"

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
