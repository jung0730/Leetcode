class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null; // 指向串列的第一個節點
    this.size = 0; // 記錄串列的長度
  }
  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode; // 如果是空串列，將新節點設為頭部
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next // 找到最後一個節點
      }
      current.next = newNode; // 將新節點接到最後一個節點後面
    }
    this.size ++;
  }

  insert(index, value) {
    if (index < 0 || index > this.size) {
      return;
    }
    const newNode = new Node(value);
    // ex: this.head -> [10] -> [20] -> [30]
    // 需求是變成 this.head -> [5] -> [10] -> [20] -> [30]
    if (index === 0) { // 插入頭部
      newNode.next = this.head;

      // 雖然已經執行了 newNode.next = this.head，讓新節點的 next 指向了 5，但這樣做並不會改變 this.head 本身的指向。
      // 結果是：新節點 5 並沒有被設為鏈結串列的頭部，整個鏈結串列的結構還是以 10 為開頭。
      this.head = newNode;
    } else {
      let current = this.head;
      let previous = null; // 用來記錄current的前一個節點
      let i = 0;
      // 找到index 位置
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      // 找到以後
      previous.next = newNode;
      newNode.next = current;
    }
    this.size++;
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head; // 紀錄刪除的值是多少
      this.head = this.head.next; // 讓頭部變成原本的第二個節點
      // 這樣原本的第一個節點就沒有人指向它，自動從鏈結串列中移除
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;
      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }
      removeNode = current; // 指向要刪除的節點
      previous.next = current.next; // 讓 previous.next 直接跳過 current，指向 current.next，這樣 current 就被移除。
    }
    this.size --;
    return removeNode.value;
  }

  display() {
    let current = this.head;
    const values = [];
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    console.log(values.join(" -> "));
  }

  indexOf(value) {
    let current = this.head;
    let index = 0;
    while (current) { // current 不為 null（即還有節點）時，繼續遍歷
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index ++;
    }
    return -1; // 找不到
  }
}

const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
list.display(); // 10 -> 20 -> 30

list.insert(0, 5);
list.insert(1, 15);
list.display(); // 5 -> 15 -> 10 -> 20 -> 30

console.log(list.remove(2)); // 移除值為 20 的節點
list.display(); // 5 -> 15 -> 20 -> 30

console.log(list.indexOf(15)); // 1
console.log(list.indexOf(100)); // -1
