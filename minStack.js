var MinStack = function() {
  this.stack = []
  this.minStack = [] // for getMin purpose
};

/** 
* @param {number} val
* @return {void}
*/
MinStack.prototype.push = function(val) {
  this.stack.push(val)
  if (this.minStack.length === 0 || val < this.minStack[this.minStack.length -1]) {
    this.minStack.push(val)
  }
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  if (this.stack.pop() === this.minStack[this.minStack.length -1]) {
    this.minStack.pop()
  }
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  return this.minStack[this.minStack.length - 1]
};


var obj = new MinStack();
obj.push(3);
obj.push(1);
obj.push(2);
console.log(obj.getMin()); // Output: 1
obj.pop();
console.log(obj.getMin()); // Output: 1
obj.pop();
console.log(obj.getMin()); // Output: 3