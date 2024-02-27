// binary tree
// order: 左到右
// 父層交換子層要跟著移動

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Example Usage:
const rootNode = new TreeNode(10);
rootNode.left = new TreeNode(5);
rootNode.right = new TreeNode(15);

rootNode.left.left = new TreeNode(3);
rootNode.left.right = new TreeNode(7);

rootNode.right.left = new TreeNode(12);
rootNode.right.right = new TreeNode(18);

function invertTree(root) {
  // finding one or more base cases
  if (root === null) {
    return null
  }

  // swap the children
  const temp = root.left
  root.left = root.right
  root.right = temp

  // calling the same function on the left subtree
  invertTree(root.left)

  // calling the same function on the right subtree
  invertTree(root.right)

  // joining the results
  return root
}
console.log(invertTree(rootNode))