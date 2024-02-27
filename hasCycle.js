// linked list
// 快慢指針(龜兔賽跑法)
// 如果發現兔子跑到終點(踩到null), 代表沒有cycle, 如果烏龜被兔子倒追(走到同一個node), 確定有cycle


// Definition for singly-linked list
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// Function to create a linked list from an array of values
function createLinkedListWithCycle(arr, pos) {
  if (arr.length === 0) return null;

  const head = new ListNode(arr[0]);
  let current = head;
  let cycleNode = null;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;

    if (i === pos) {
      cycleNode = current; // Save the node where the cycle starts
    }
  }

  if (pos < arr.length) {
    current.next = cycleNode; // Create the cycle
  }

  return head;
}

var hasCycle = function(head) {
  let slow = head
  let fast = head
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
    if (slow === fast) {
      return true
    }
  }
  return false
}
const head = createLinkedListWithCycle([3,2,0,-4], 1)
console.log(hasCycle(head))