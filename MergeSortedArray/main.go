package main

import "fmt"

/**
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

example 2:
Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].

example 3:
Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.

*/

func main() {
	nums1 := []int{1, 2, 3, 0, 0, 0}
	nums2 := []int{2, 5, 6}
	res := merge(nums1, 3, nums2, 3)
	fmt.Println(">>> res", res)
	nums3 := []int{0}
	nums4 := []int{1}
	res2 := merge(nums3, 0, nums4, 1)
	fmt.Println(">>> res", res2)
}

func merge(nums1 []int, m int, nums2 []int, n int) []int {
	// m and n are essentially the lengths of the 2 arrays so we want to combine them
	// to get the last index of nums1
	lastIndex := m + n - 1
	// merging in reverse order
	for m > 0 && n > 0 {
		// if the value of nums1 at the index is greater than the value of num2 at the index
		// then we want to take the value of nums1 and set it to the last index.
		if nums1[m-1] > nums2[n-1] {
			nums1[lastIndex] = nums1[m-1]
			m -= 1
		} else {
			// if the values of num1 at the index and nums2 at the index is equal or if the value
			// of nums2 is greater than nums1 , then we do the opposite
			nums1[lastIndex] = nums2[n-1]
			n -= 1
		}
		lastIndex -= 1
	}
	// edge case, if nums1 is empty but nums2 isnt then we want to just append nums2 to nums2
	for n > 0 {
		nums1[lastIndex] = nums2[n-1]
		n = n - 1
		lastIndex = lastIndex - 1
	}
	return nums1
}
