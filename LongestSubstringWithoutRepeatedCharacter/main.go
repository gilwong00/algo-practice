package main

import "fmt"

func findLongest(s string) int {
	if len(s) == 1 {
		return 1
	}
	var result int
	charMap := make(map[string]int)
	leftPointer := int(0)
	// Iterate through the string and slide the window each time you find a duplicate
	// r indicates the end of current substring. Essentially, r is the right pointer that
	// tracks each char as we iterate through the string
	for r := 0; r < len(s); r++ {
		// Check if the current character is a duplicate
		char := string(s[r])
		dupeIndex, isDupe := charMap[string(char)]
		if isDupe {
			// Update the result for the substring in the current window before we found duplicate character
			result = max(result, r-leftPointer)
			// Remove all characters before the new string
			for i := leftPointer; i < dupeIndex; i++ {
				delete(charMap, string(s[i]))
			}
			// increment our leftPointer to slide our window since we found a window
			leftPointer = dupeIndex + 1
		}
		charMap[char] = r
	}
	result = max(result, len(s)-leftPointer)
	return result
}

// slight cleaner solutiion
func find(s string) int {
	result := 0
	charMap := make(map[rune]int)
	left := 0

	for right, char := range s {
		// if we have a dupe and if the index we found a dupe at
		// is greater or equal to our leftPointer
		if dupeIdx, ok := charMap[char]; ok && dupeIdx >= left {
			left = dupeIdx + 1
		}
		charMap[char] = right
		result = max(result, right-left+1)
	}
	return result
}

func main() {
	str := "abcabcbb"
	r := findLongest(str)
	fmt.Println(">> r", r)
	r2 := find(str)
	fmt.Println(">> r2", r2)
}
