package main

/**
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.



Example 1:

Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
Example 2:

Input: nums = [5], k = 1
Output: 5.00000

*/

/// https://leetcode.com/problems/maximum-average-subarray-i/description/
import (
	"fmt"
	"math"
)

func main() {
	input := []int{1, 12, -5, -6, 50, 3}
	size := 4
	result := findMaxAverage(input, size)
	fmt.Println(">>> result", result)
}

func findMaxAverage(nums []int, k int) float64 {
	// set to negative infinity incase array is just [-1]
	max := math.Inf(-1)
	windowSum := 0
	startIndex := 0

	for i := 0; i < len(nums); i++ {
		// keeps track of our windows average as we slide upward
		windowSum += nums[i]
		// plus 1 for 0 index
		if (i - startIndex + 1) == k {
			max = math.Max(float64(max), float64(windowSum)/float64(k))
			windowSum -= nums[startIndex]
			startIndex += 1
		}
	}
	return max
}
