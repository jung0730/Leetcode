// Pre-order 前序：root → left → right
// In-order 中序：left → root → right
// Post-order 後序：left → right → root
// Level-order 層序：一層一層從左至右

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Example Usage:
const rootNode = new TreeNode(1);
rootNode.right = new TreeNode(2);

rootNode.right.left = new TreeNode(3);

function inorderTraversal(root) {
  const list = [];
  helper(root, list);
  return list;
}

function helper(node, list) {
  if (node === null)
    return;
  // 左 -> 根 -> 右
  helper(node.left, list); 
  list.push(node.value);
  helper(node.right, list);
}
console.log(inorderTraversal(rootNode), 'inorder')

function preorderTraversal(root) {
  const list = [];
  preorderHelper(root, list);
  return list;
}

function preorderHelper(node, list) {
  if (node === null) {
    return;
  }
  // 根 -> 左 -> 右
  list.push(node.value);
  preorderHelper(node.left, list);
  preorderHelper(node.right, list);
}

console.log(preorderTraversal(rootNode), 'pre-order')