// Question 8 Queue implementation using a stack

// There are many ways to implement a queue. You have learned using singly linked list, and doubly linked list. Keeping the concept of a queue in mind, implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)

const Stack = require('./stackClass');

const firstStack = new Stack();
const secondStack = new Stack();

class Queue {
  constructor() {
    this.first = firstStack;
    this.last = secondStack;
  }
  enqueue(data) {
    if (this.first.top) {
      while (this.first.top) {
        this.last.push(this.first.pop());
      }
    }
    this.last.push(data);
    while (this.last.top) {
      this.first.push(this.last.pop());
    }
  }
  dequeue() {
    return this.first.pop();
  }
}

function queueUsingStacks() {
  const queueStack = new Queue();

  queueStack.enqueue('Bob');
  queueStack.enqueue('Spock');
  queueStack.enqueue('Uhura');
  queueStack.enqueue('Sulu');
  queueStack.enqueue('Checkov');
  console.log(queueStack);
}
queueUsingStacks();
