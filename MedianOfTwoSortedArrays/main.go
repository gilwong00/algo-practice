package main

import (
	"fmt"
	"math"
)

/**
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
The overall run time complexity should be O(log (m+n)).
*/
/*
Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
**/

// Notes, since this is asking for a log algo, we want to use binary search
func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
	m := len(nums1)
	n := len(nums2)
	total := m + n
	// tells us the total amount of elements of the left partition
	// +1 because we want the size include mid point. i.e. math.Ceiling
	half := (total + 1) / 2

	// make sure first array (nums1) is smaller: performating binary search
	// on smaller array lowers the complexity
	if m > n {
		nums1, nums2 = nums2, nums1
		m, n = n, m
	}
	// perform binary search of nums1
	// define the left & right pointers of nums1  to calculate half point for binary search
	leftPointer, rightPointer := 0, m-1

	for {
		// next find half index of nums1: h1 = (leftPointer+rightPointer)/2
		// so h1 is either the mid or to the left of mid
		// this helps us compute our left partition
		// in go -1/2 is 0 not -1. If l is 0 and r is -1, we want to
		// h1 to be -1 so that it falls into the l1 = -math.MaxInt condition. Otherwise
		// it goes into an infinite loop of l=r=h=0
		h1 := int(math.Floor(float64(leftPointer+rightPointer) / 2)) // -> nums2
		// h2 is the index of the midpoint for our second array so
		// -2 because length is last_index+1 from 0 so numsMedian+1+p+1 = half
		h2 := half - h1 - 2
		// check for correct left partition
		// declaring the values that we are going to check against
		var mLeft, nLeft, mRight, nRight int
		// check in indicies are out of bounds
		if h1 >= 0 {
			// this is correct
			mLeft = nums1[h1]
		} else {
			// if out of bounds, set to - infinity
			mLeft = -math.MaxInt
		}
		// if h1(nums 1 median) + 1 is less than m.
		// still inbounds
		if h1+1 < m {
			mRight = nums1[h1+1]
		} else {
			// this is out of bounds. Meaning we want all the values
			// in nums1 array to be included in the left partition
			// so the default is infinity because we gone to far to the right
			mRight = math.MaxInt
		}
		if h2 >= 0 {
			nLeft = nums2[h2]
		} else {
			nLeft = -math.MaxInt
		}
		if h2+1 < n {
			nRight = nums2[h2+1]
		} else {
			nRight = math.MaxInt
		}

		// found the median
		if mLeft <= nRight && nLeft <= mRight {
			// if the total elements in the array is even
			if total%2 == 0 {
				return float64(max(mLeft, nLeft)+min(mRight, nRight)) / 2
			}
			// if odd
			return float64(max(mLeft, nLeft))
		} else {
			// we dont find median because of the following conditions:
			// to many elements in m, need to reduce the size on m
			if mLeft > nRight {
				// reducing the size of the left partition from the right
				// to shrink the array
				rightPointer = h1 - 1
			} else {
				// mRight is too large, or nLeft is to small, meaning we need to move right of nums1
				leftPointer = h1 + 1
			}
		}
	}
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func main() {
	r := findMedianSortedArrays([]int{1, 3}, []int{2})
	fmt.Println(">> r1", r)

	r2 := findMedianSortedArrays([]int{1, 2}, []int{3, 4})
	fmt.Println(">> r2", r2)
}
