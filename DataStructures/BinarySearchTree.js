/**
 * data points on a tree are called nodes. The node at the top of the tree is called the root node
 * Nodes with branches leading to other nodes(children) are referred to as the parent node
 * Leaf nodes are nodes at the end of the tree that have no children
 * Any children of a node are parents of their own subtree
 *
 * In a binary search tree, each node can have at most 2 children. Other tree structures may have multiple
 * Binary search trees are also ordered.
 * The left node/ left subtree contains values that are less than the parent node
 * the right subtree contains values/nodes that are greater than the parent
 * the same concept applies as the tree grows and expans, left node will always be the smaller than the parent, right will always greater than the parent node
 *
 * Note this concept of left is less and right is greater only applies to binary search trees. In a binary tree, this doesnt matter
 */

// represents each node in the tree
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  add(data) {
    const node = this.root;

    // if this is the first node, we set it as the root
    if (node === null) {
      this.root = new Node(data);
      return;
    } else {
      // if not the first node, we need to figure out where to put the new node
      // the first node that is passed in is the root node

      // note data is the new node we are trying to add into our tree and we compare the value of that new node against the current node values in the tree
      const searchTree = node => {
        // if the data is less than then node data then we put the node on the left side of the tree
        if (data < node.data) {
          // if node.left is null, we assign node left to be the new node
          if (node.left === null) {
            node.left = new Node(data);
            return;
          }
          // if node.left is not null then we need to call our recursive function again to continue searching to determine where the node should be placed
          else if (node.left !== null) {
            return searchTree(node.left);
          }
        }
        // if data is greater than the current nodes data, we will put the node on the right side
        else if (data > node.data) {
          // same concept as the left, if node.right is null, we assign node.right to the new node
          if (node.right === null) {
            node.right = new Node(data);
            return;
          }
          // if node.right is not null then we call our recursive function again with the right node to determine where the node belongs
          else if (node.right !== null) {
            return searchTree(node.right);
          }
        }
        // if the data is equal then we dont not want to add the data to the tree and return null
        else {
          return null;
        }
      };
      // initially call the search tree with the root node
      return searchTree(node);
    }
  }

  // this is easy cause we know we need to always look to the left side of the tree
  findMin() {
    let current = this.root;

    /**
     * What happens here is the minimum value will always be and the bottom of the left side of the tree.
     * To find the min we start with the root node node iterate through all of the left nodes and by the time we reach the end of
     * the tree, which is indicated when the node no longer has a left node, we will have our min value
     */

    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    /**
     * The same principal applies with finding the max. We start with the root and go through each node
     * on the right hand side and we do this until we reach the end which is indicated by the node not
     * having a right node which means we found the largest value in our tree
     */
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
}
