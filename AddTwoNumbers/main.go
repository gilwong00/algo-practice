package main

import "fmt"

/**
You are given two non-empty linked lists representing two non-negative integers.
The digits are stored in reverse order, and each of their nodes contains a single digit.
Add the two numbers and return the sum as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.
*/
/*
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
*/

type ListNode struct {
	Val  int
	Next *ListNode
}

func addTwoNumbers(l1 *ListNode, l2 *ListNode) *ListNode {
	l1Pointer := l1
	l2Pointer := l2

	// creating a new linkedlist to track our result
	output := &ListNode{}
	// dummt pointer for output
	outputPointer := output
	// since each node in the output can only hold a singular digit
	// IE 9+9 = 18, so we only store 8 and use the carry variable to track the carry over
	carry := 0

	// loop while pointers are not nil
	for l1Pointer != nil || l2Pointer != nil {
		// if we have a carry from the previous calculation, initialize the sum with it
		sum := carry

		if l1Pointer != nil {
			sum += l1Pointer.Val
			l1Pointer = l1Pointer.Next
		}

		if l2Pointer != nil {
			sum += l2Pointer.Val
			l2Pointer = l2Pointer.Next
		}

		// computing a potential carry over value
		carry = sum / 10
		// digit is the sum on the l1 and l2 pointer values
		// since each node can only store a singluar digit, we use modulus against the sum
		// and store the result into digit
		digit := sum % 10
		// setting the next node in our output list to the value of digit
		outputPointer.Next = &ListNode{Val: digit}
		// shifting output pointer to the next(current) node
		outputPointer = outputPointer.Next
	}

	// if we reach the end of the loop and we still have a carry value
	// set the next node of the output with the value of carry; IE: 99 + 9 = 108
	if carry > 0 {
		outputPointer.Next = &ListNode{Val: carry}
	}

	// the outout initializes and points to a dummy zero value node
	// we want to return the next node which is the final linkedlist sum
	return output.Next
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

func main() {
	r := addTwoNumbers(
		int2list([]int{2, 4, 3}),
		int2list([]int{5, 6, 4}))

	fmt.Printf("%+v", r)
}
