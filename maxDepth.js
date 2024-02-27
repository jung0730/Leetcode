class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Example Usage:
const rootNode = new TreeNode(3);
rootNode.left = new TreeNode(9);
rootNode.right = new TreeNode(20);

rootNode.right.left = new TreeNode(15);
rootNode.right.right = new TreeNode(7);

var maxDepth = function(root) {
  // finding one or more base cases
  if (root === null) {
    return 0
  }

  // calling the same function on the left subtree
  let left = maxDepth(root.left)
  // calling the same function on the right subtree
  let right = maxDepth(root.right)
  // joining the results
  return 1 + Math.max(left, right)
}

console.log(maxDepth(rootNode))