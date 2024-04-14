package main

import "fmt"

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)

	for i, num := range nums {
		diff := target - num

		if key, ok := m[diff]; ok {
			return []int{key, i}
		}

		m[num] = i
	}

	return nil
}

func main() {
	r := twoSum([]int{2, 7, 11, 15}, 9)
	fmt.Printf("%+v", r)
}
