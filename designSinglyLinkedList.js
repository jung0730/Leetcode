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

  // ex: this.head -> [10] -> [20] -> [30]
  // 需求是變成 this.head -> [5] -> [10] -> [20] -> [30]
  insert(index, value) {
    if (index < 0 || index > this.size) {
      return;
    }
    const newNode = new Node(value);
    if (index === 0) { // 插入頭部
      newNode.next = this.head;

      // 雖然已經執行了 newNode.next = this.head，讓新節點的 next 指向了 10，但這樣做並不會改變 this.head 本身的指向。
      // 結果是：新節點 5 並沒有被設為鏈結串列的頭部，整個鏈結串列的結構還是以 10 為開頭。
      this.head = newNode;
    }
  }
}

//   // 在指定位置插入節點
//   insert(index, value) {
//     if (index < 0 || index > this.size) {
//       console.error("Invalid index");
//       return;
//     }
//     const newNode = new Node(value);
//     if (index === 0) {
//       newNode.next = this.head; // 新節點的 next 指向原本的頭部
//       this.head = newNode; // 更新頭部為新節點
//     } else {
//       let current = this.head;
//       let previous = null;
//       let i = 0;
//       while (i < index) {
//         previous = current;
//         current = current.next;
//         i++;
//       }
//       previous.next = newNode; // 前一個節點指向新節點
//       newNode.next = current;  // 新節點指向當前節點
//     }
//     this.size++;
//   }

//   // 刪除指定位置的節點
//   remove(index) {
//     if (index < 0 || index >= this.size) {
//       console.error("Invalid index");
//       return;
//     }
//     let removedNode;
//     if (index === 0) {
//       removedNode = this.head; // 取得要移除的節點
//       this.head = this.head.next; // 更新頭部為下一個節點
//     } else {
//       let current = this.head;
//       let previous = null;
//       let i = 0;
//       while (i < index) {
//         previous = current;
//         current = current.next;
//         i++;
//       }
//       removedNode = current;
//       previous.next = current.next; // 跳過要移除的節點
//     }
//     this.size--;
//     return removedNode.value; // 回傳移除的值
//   }

//   // 查找指定值的位置
//   indexOf(value) {
//     let current = this.head;
//     let index = 0;
//     while (current) {
//       if (current.value === value) {
//         return index;
//       }
//       current = current.next;
//       index++;
//     }
//     return -1; // 找不到回傳 -1
//   }

//   // 顯示整個串列
//   display() {
//     let current = this.head;
//     const values = [];
//     while (current) {
//       values.push(current.value);
//       current = current.next;
//     }
//     console.log(values.join(" -> "));
//   }
// }

// // 測試
const list = new SinglyLinkedList();
list.append(10);
list.append(20);
list.append(30);
// list.display(); // 10 -> 20 -> 30

list.insert(0, 5);
console.log(list.head)
// list.display(); // 10 -> 15 -> 20 -> 30

// console.log(list.remove(2)); // 移除值為 20 的節點
// list.display(); // 10 -> 15 -> 30

// console.log(list.indexOf(15)); // 1
// console.log(list.indexOf(100)); // -1
