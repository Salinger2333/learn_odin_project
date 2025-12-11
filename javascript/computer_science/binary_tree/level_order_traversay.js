class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  // Method to insert a node into the Binary Search Tree rooted at this node
  insert(data) {
    if (data <= this.data) {
      this.left === null
        ? (this.left = new Node(data))
        : this.left.insert(data);
    } else {
      this.right === null
        ? (this.right = new Node(data))
        : this.right.insert(data);
    }
  }
}

/*
  BREADTH-FIRST SEARCH
     -> Level Order Traversal
*/

function levelOrder(root, queue = [], result = []) {
  if (!root) return;
  queue.push(root);
  while (queue.length) {
    const currentNode = queue.shift();
    result.push(currentNode.data);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
  }
  return result;
}

/* Creating the root node 
   with example tree for testing

	    M
    / \
	  B   Q
  / \   \
	A   C   Z
*/

const root = new Node("M");

// Insert nodes into the BST using the insert method
root.insert("B");
root.insert("Q");
root.insert("Z");
root.insert("A");
root.insert("C");

// BREADTH-FIRST TRAVERSAL
console.log(levelOrder(root)); // [ 'M', 'B', 'Q', 'A', 'C', 'Z' ]

function preorder(root, queue = []) {
  if (root === null) {
    return;
  }
  queue.push(root.data)
  preorder(root.left,queue);
  preorder(root.right,queue);
  return queue
}
console.log(preorder(root));
