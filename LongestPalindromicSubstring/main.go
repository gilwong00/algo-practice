package main

func longestPalindrome(s string) string {
	res := ""
	length := len(s)

	for i := 0; i < length; i++ {
		for j := i; j < length; j++ {
			str := s[i : j+1]
			if isPalidrome(str) {
				if len(str) > len(res) {
					res = str
				}
			}
		}
	}
	return res
}

func isPalidrome(str string) bool {
	lastIndex := len(str) - 1

	for i := 0; i < len(str); i++ {
		if str[i] != str[lastIndex-i] {
			return false
		}
	}
	return true
}
