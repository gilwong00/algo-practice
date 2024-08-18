package main

import "math"

/**
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.



Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1
*/

func maxArea(height []int) int {
	leftPointer := 0
	rightPointer := len(height) - 1
	res := 0
	// checking while leftpointer is less than right
	// if these are equal then thats not good
	for leftPointer < rightPointer {
		minHeight := math.Min(float64(height[leftPointer]), float64(height[rightPointer]))
		// width is the distance between the right and left pointer
		minWidth := rightPointer - leftPointer
		area := minWidth * int(minHeight)
		res = int(math.Max(float64(res), float64(area)))
		if height[leftPointer] < height[rightPointer] {
			leftPointer += 1
		} else {
			rightPointer -= 1
		}
	}
	return res
}
