/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

const invertTree = root => {
  // break case
  if (root === null) return root;

  let left = root.left;
  root.left = root.right;
  root.right = left;

  invertTree(root.left);
  invertTree(root.right);

  return root;
};
