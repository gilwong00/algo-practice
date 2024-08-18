package main

import "math"

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
