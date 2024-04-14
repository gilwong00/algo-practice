package main

import "fmt"

//Given the head of a singly linked list, reverse the list, and return the reversed list.

/*
	Input: head = [1,2,3,4,5]
  Output: [5,4,3,2,1]

	Input: head = []
	Output: []
**/

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */

type ListNode struct {
	Val  int
	Next *ListNode
}

func int2list(nums []int) (res *ListNode) {
	if len(nums) == 0 {
		return nil
	}
	res = &ListNode{}
	tmp := res
	for _, v := range nums {
		tmp.Next = &ListNode{Val: v}
		tmp = tmp.Next
	}
	return res.Next
}

func reverseList(head *ListNode) *ListNode {
	var prev *ListNode = nil

	for head != nil {
		// temp variable to store head.Next
		// this way when we update head.Next to the previous node, we still have a
		// pointer to the original next value
		var next *ListNode = head.Next
		head.Next = prev
		prev = head
		head = next
	}
	// at the end of the loop, prev will point to the new head
	// which is the last node in the original list
	return prev
}

func main() {
	r := reverseList(
		int2list([]int{1, 2, 3, 4, 5}),
	)

	fmt.Println("result", r)
}
