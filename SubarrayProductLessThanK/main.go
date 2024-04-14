package main

import "fmt"

// Given an array of integers nums and an integer k, return the number of contiguous subarrays where the product of all the elements in the subarray is strictly less than k.

/*
Input: nums = [10,5,2,6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are:
[10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
*/

// by product it means elements in the array multiply IE 10 * 5

func numSubarrayProductLessThanK(nums []int, k int) int {
	var result int

	if k <= 1 {
		return result
	}

	// setting product to 1 since 1 is a netural value
	// note if instead of product we were dealing with ints instead, we would default product to 0 instead of 1
	product := 1
	// left pointer
	left := 0

	// right = right pointer, using sliding window approach with 2 pointers
	// we want to increment the right pointer by 1 each time
	// the right pointer tells us how many valid sub arrays are ending in this element
	// this is why we increment the right pointer and check if the sum on all the element is less than k
	for right := 0; right < len(nums); right++ {
		// updating our product everytime we see a new number/value
		product *= nums[right]
		// check if our subarray is valid
		// if product is greater than or equal to k
		// left <= right, checks if the left pointer has passed the right pointer, if it has, stop this loop.
		// this is not a valid subarray so we want to increment our left pointer
		for left <= right && product >= k {
			// getting the value at the left pointer and updating our product to be that value
			product /= nums[left]
			left++
		}
		// right - left + 1 is to calculate the size of the window
		// for every valid subarray, we want to add that value to the result
		result += right - left + 1
	}

	return result
}

func main() {
	r := numSubarrayProductLessThanK([]int{10, 5, 2, 6}, 100)
	fmt.Println(">>> result", r) // r should be 8
}
