// Definition for singly-linked list
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// Function to print the values of a linked list
function printLinkedList(head) {
  let current = head;
  while (current !== null) {
      console.log(current.val + ' -> ');
      current = current.next;
  }
  console.log('null');
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

var reverseList = function (head) {
  let prevNode = null; // creating a new reversed linked list using the variable
  while (head !== null) {
    let nextNode = head.next; // Saves the reference to the next node in the original list. This is crucial because we are going to modify the head.next pointer in the next step.
    head.next = prevNode; // Reverses the link by making the head.next point to the previous node (prevNode).
    // Updating Pointers
    prevNode = head;
    head = nextNode;
  }
  return prevNode;
};

const values = [1, 2, 3, 4, 5];
const linkedList = createLinkedList(values);
printLinkedList(linkedList);
const reversedList = reverseList(linkedList);
printLinkedList(reversedList);