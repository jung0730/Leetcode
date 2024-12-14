// Definition for singly-linked list
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// Function to create a linked list from an array of values
function createLinkedList(values) {
  if (values.length === 0) {
      return null;
  }

  let head = new ListNode(values[0]);
  let current = head;

  for (let i = 1; i < values.length; i++) {
      current.next = new ListNode(values[i]);
      current = current.next;
  }

  return head;
}

// tips: dummy node technique
var mergeTwoLists = function(list1, list2) {
  let dummyNode = new ListNode() // 固定住新鏈表的起始位置
  let currentNode = dummyNode // 隨著每次操作移動，用於追踪新鏈表的末端，方便添加新節點
  while (list1 && list2) { // 當不是null時跳出loop
    if (list1.val < list2.val) {
      currentNode.next = list1
      list1 = list1.next
    } else {
      currentNode.next = list2
      list2 = list2.next
    }
    currentNode = currentNode.next
  }
  currentNode.next = list1 || list2
  return dummyNode.next
};

const linkedList1 = createLinkedList([1,2,4])
const linkedList2 = createLinkedList([1,3,4])
console.log(mergeTwoLists(linkedList1, linkedList2))