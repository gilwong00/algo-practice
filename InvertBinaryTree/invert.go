/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return root
	}

	leftNode, rightNode := root.Left, root.Right

	root.Left = rightNode
	root.Right = leftNode

	invertTree(root.Left)
	invertTree(root.Right)

	return root
}