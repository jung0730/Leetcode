// LeetCode 1700: Number of Students Unable to Eat Lunch
// using queue data structure

var countStudents = function (students, sandwiches) {
  let queue = students; // Queue of students
  let stack = sandwiches; // Stack of sandwiches
  let unableToEat = 0; // Counter for students unable to eat

  while (queue.length) {
    if (queue[0] === stack[0]) {
      // Student eats the sandwich
      queue.shift();  // Remove student from queue
      stack.shift();  // Remove sandwich from stack
      unableToEat = 0; // Reset counter since someone ate
    } else {
        // Move student to the back of the queue
        queue.push(queue.shift());
        unableToEat++; // Increment counter
    }
    // If no one can eat in a full cycle, break the loop
      if (unableToEat === queue.length) {
        return queue.length;
    }
  }
  // All students were able to eat
  return 0;
}

console.log(countStudents([1,1,0,0], [0,1,0,1])); // Output: 0
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1])); // Output: 3