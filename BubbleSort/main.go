package main

import "fmt"

// bubble sort is the simplest sorting algorithm
// however not the most efficient sorting algo by most measures
// Time complexity is quadratic O(n^2)
// Space is constant O(1)

// Bubble sorting works by swaping the adjacent elements(bubbling up) if they are
// in the wrong order: IE (6 1 4 2 9) -> (1 6 4 1 9), compares the first two elements
// swaps because 6 > 1, wrong order. This is repeated n times so each number has
// a chance to get bubbled up all the way. If ordered, no need to swap.
func main() {
	numbers := []int{6, 1, 4, 2, 9}
	// one-round bubbling, repeated n number of times
	// to ensure each element has a chance to get compared and sorted correctly
	for j := 0; j < len(numbers); j++ {
		// check order of elements in the array.
		// if out of order, perform swap, in this example, 6 > 1 so we run swap
		// we do len(numbers) - 1 because of the i+1 puts us there
		for i := 0; i < len(numbers)-1; i++ {
			if numbers[i] > numbers[i+1] {
				swap(numbers, i, i+1)
				fmt.Println(numbers)
			}
		}
	}
}

// swap takes in a collection of ints and the indexes
// we want to compare and potentially swap
func swap(numbers []int, i, j int) {
	// temp stores one value so we can swap properly
	temp := numbers[i]
	numbers[i] = numbers[j]
	numbers[j] = temp
}
