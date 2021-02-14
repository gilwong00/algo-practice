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

  // finds node
  find(data) {
    let current = this.root;

    while (current.data !== data) {
      // if the data is less than the current node, search only the left side of the tree until we find a match
      if (data < current.data) {
        current = current.left;
      } else {
        // if the data is greated than the current data, search the right side of the tree until a match is found
        current = current.right;
      }

      // no match
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  // checks if current node exists. Similiar logic to find but this returns a bool
  isPresent(data) {
    let current = this.root;

    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  remove(data) {
    const removeNode = (node, data) => {
      // empty tree check
      if (node === null) {
        return null;
      }

      // if we find the node with the data
      if (data === node.data) {
        // if found node has no children
        if (node.left === null && node.right === null) {
          // when we return null, we are setting the matched node to null in the tree
          return null;
        }

        /*
					one child node check, if the node we want to remove only has a left or a right child node, we want to replace
					the node we are going to remove, with its child to keep the structure of the tree
				*/

        // if node has no left child nodes. return right child nodes
        if (node.left === null) {
          return node.right;
        }

        // if node has no right child nodes. return left child nodes
        if (node.right === null) {
          return node.left;
        }

        /*
				 	if node has 2 child nodes, one left node and one right node. We need to find a node to replace 
					the node we will be removing. To do this, we want to go to the right sub node and all the way down to the
					most left sub node after we gone to the right sub node  
				 */

        let tempNode = node.right;

        // traversing down right nodes to get the lowest left node
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        // replacing the parent node with our temp, this removes the original node we intended to remove but does break the tree structure
        node.data = tempNode.data;
        // this will setup the right side of the new node correctly
        node.right = removeNode(node.right, tempNode.data);
        return node;
      }
      // if data is less than the node data, check traverse the left side of the tree until we find the node to remove
      else if (data < data.node) {
        node.left = removeNode(node.left, data);
        return node;
      }
      // if data is greater than the node data, check traverse the right side of the tree until we find the node to remove
      else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };

    this.root = removeNode(this.root, data);
  }
  /*
			 The minHeight is the distance from the root node to the first leaf node without 2 children aka left and right node
			 this is a recursive function and we keep running this until we find a node without 2 child nodes
	 */
  findMinHeight(node = this.root) {
    // empty search tree and exit condition
    if (node === null) {
      return -1;
    }

		/*
			eventually one of these nodes is going to be -1 because the left or right node is going to be null
			the idea is check all of the left and right nodes until we find the first node without 2 children aka a leaf node
			once we determine which node to stop at we essentially found our level based which child node is empty
			the final answer would be the minimum value, right or left, plus 1;
		*/ 
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

		// returns 
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  /*
		 finds the distance from the root node to the bottom most node
		 this is the opposite of findMin, instead of checking if right is greater than left
		 we check if left is greater than right
	 */
  findMaxHeight() {
    // empty search tree
    if (node === null) {
      return -1;
    }

    // eventually one of these nodes is going to be -1
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }

  /*
		To determine if a tree is balanced or not, the difference between the min height and the max height is no greater than one
		IE. if min height is 1 and max height is 3, this is no balanced. if min height is 2 and max height is 3 then this tree is balanced
	 */
  isBalanced() {
    return this.findMinHeight() >= this.findMaxHeight() - 1;
  }

  // begin search at the left most node and end at the right most node, essentially all numbers from lowest to highest
  inOrder() {}

  // the root orders before the leaves. Shows all root nodes first then shows nodes after
  preOrder() {}

  // explores leaf nodes first before the root, first finds all the leave nodes then moves up to the parents
  // onces it explores all the leaves on one branch it then moves to the next branch
  postOrder() {}

  // this is a breath first search
  /*
		this explores all the nodes in a given level with a tree before moving on to the next level
	*/
  levelOrder() {}
}

const bst = new BinarySearchTree();
bst.add(4);
bst.add(2);
bst.add(6);
bst.add(1);
bst.add(3);
bst.add(5);
bst.add(7);
bst.add(4);

console.log(bst.isPresent(4)); // should return true
console.log(bst.findMin()); // should return 1
console.log(bst.findMax()); // should return 7
bst.add(9);
console.log(bst.findMax()); // should return 9
bst.remove(4);
console.log(bst.isPresent(4)); // should return false

const bst2 = new BinarySearchTree();
bst2.add(9);
bst2.add(4);
bst2.add(17);
bst2.add(3);
bst2.add(6);
bst2.add(22);
bst2.add(5);
bst2.add(7);
bst2.add(20);

console.log(bst2.findMinHeight()); // should return 1
console.log(bst2.findMaxHeight()); // should return 3
