const Queue = require('./queue');
const DLL = require('./dlQueue');

// Question 1 Create a stack class

// Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop() {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
}

// Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.

const trekkie = new Stack();

trekkie.push('Kirk');
trekkie.push('Spock');
trekkie.push('McCoy');
trekkie.push('Scotty');

// Question 2 Useful methods for a stack

// Using the Stack class above, implement the following helper functions outside of the class:

// peek(): allows you to look at the top of the stack without removing it

function peek(stack) {
  if (!stack.top) {
    return null;
  }
  return stack.top.data;
}
// console.log(peek(trekkie));

// isEmpty(): allows you to check if the stack is empty or not

const emptyStack = new Stack();

function isEmpty(stack) {
  if (stack.top === null) {
    return true;
  }
  return false;
}
// console.log(isEmpty(trekkie), 'false');
// console.log(isEmpty(emptyStack), 'true');

// display(): to display the stack - what is the 1st item in your stack?

function display(stack) {
  let currTop = stack.top;

  while (currTop !== null) {
    console.log(currTop.data);
    currTop = currTop.next;
  }
}
// console.log(display(trekkie));

// Remove McCoy from your stack and display the stack

trekkie.pop();
trekkie.pop();
trekkie.push('Scotty');
// console.log(display(trekkie));

// Question 3 Check for palindromes using a stack

// A palindrome is a word, phrase, or number that is spelled the same forward and backward. For example, “dad” is a palindrome; “A man, a plan, a canal: Panama” is a palindrome if you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome. We can use a stack to determine whether or not a given string is a palindrome.

// Write an algorithm that uses a stack to determine whether a given input is palindrome or not. Use the following template as a starting point.

function is_palindrome(s) {
  const thunderDome = new Stack();

  let reversedS = '';
  s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');

  for (let i = 0; i < s.length; i++) {
    thunderDome.push(s[i]);
  }

  while (thunderDome.top !== null) {
    reversedS += thunderDome.pop();
  }
  return s === reversedS;
}

// True, true, true, false
// console.log(is_palindrome('dad'));
// console.log(is_palindrome('A man, a plan, a canal: Panama'));
// console.log(is_palindrome('1001'));
// console.log(is_palindrome('Tauhida'));

// Question 4 Matching parentheses in an expression

// A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

// For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).

// Extension exercise: Recognize 3 pairs of brackets: (), [], and {}. These must be correctly nested; "([)]" is incorrect, and should report an error at the ), stating that you were expecting a ] but found a ). If this is starting to look and sound very familiar, congratulations - you're beginning to write a simple language parser!

// Extension extension exercise: Also recognize 2 types of quote character: "" and ''. Inside quotes, brackets aren't counted at all - in fact, nothing is counted until you reach the corresponding close quote.

// function needs work

function matchingExpressions(string) {
  const expStack = new Stack();

  for (let i = 0; i < string.length; i++) {
    if (string[i] === '(') {
      expStack.push(string[i]);
    }

    if (string[i] === ')' && expStack.node === null) {
      expStack.pop();
    }
  }

  if (expStack.top === null) {
    return true;
  }
  return false;
}
// console.log(matchingExpressions('(1 + 2)'), 'true');
// console.log(matchingExpressions('1 + 2)'), 'false');
// console.log(matchingExpressions('(1 + 2'), 'false');

// Question 5 Sort stack

// Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).

const q5Stack = new Stack();
q5Stack.push(14);
q5Stack.push(37);
q5Stack.push(100);
q5Stack.push(8);
q5Stack.push(125);
q5Stack.push(88);
q5Stack.push(8);

function sortStack(stack, tempStack = null, tempVar = null) {
  if (tempStack === null) {
    tempStack = new Stack();
  }

  if (stack.top === null) {
    stack = tempStack;
    return stack;
  }

  tempVar = stack.pop();
  if (tempStack.top === null || tempVar < tempStack.top.data) {
    tempStack.push(tempVar);
    return sortStack(stack, tempStack);
  } else {
    while (tempStack.top !== null && tempVar > tempStack.top.data) {
      stack.push(tempStack.pop());
    }
    tempStack.push(tempVar);
    return sortStack(stack, tempStack);
  }
}
// display(sortStack(q5Stack))

// Question 6 Create a queue using Singly linked list

// Walk through the Queue class in the curriculum and understand it well. Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.

// Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
// Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
// Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
// Implement a display() function outside of the Queue class that lets you display what's in the queue.
// Remove Spock from the queue and display the resulting queue.

let starQueue = new Queue();
const emptyQueue = new Queue();

starQueue.enqueue('Bob');
starQueue.enqueue('Spock');
starQueue.enqueue('Uhura');
starQueue.enqueue('Sulu');
starQueue.enqueue('Checkov');

function newPeek(queue) {
  if (queue.first) {
    console.log(queue.first);
  } else return 'Queue is empty';
}
// newPeek(starQueue)

function newIsEmpty(queue) {
  if (!queue.first) {
    return true;
  } else return false;
}
// console.log(newIsEmpty(starQueue), 'false');
// console.log(newIsEmpty(emptyQueue), 'true');

function newDisplay(queue) {
  let node = queue.first;
  let index = 0;

  while (node !== null) {
    console.log(index, node.value);
    index++;
    node = node.next;
  }
}
// newDisplay(starQueue);

// starQueue.dequeue()
// starQueue.dequeue()
// starQueue.enqueue('Bob');
// newDisplay(starQueue);

// Question 7 Create a queue class using Doubly linked List

// Use the items listed in #6 and enqueue them to your queue.

// Check to see who is first one on the Queue?

let dllStarQueue = new DLL();
dllStarQueue.insertFirst('Bob');
dllStarQueue.insertLast('Spock');
dllStarQueue.insertLast('Uhura');
dllStarQueue.insertLast('Sulu');
dllStarQueue.insertLast('Checkov');

// console.log(dllStarQueue)

// Question 9 Square dance pairing

// As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.

// F Jane

// M Frank

// M John

// M Sherlock

// F Madonna

// M David

// M Christopher

// F Beyonce

// Female dancer is Jane, and the male dancer is Frank
// Female dancer is Madonna, and the male dancer is John
// Female dancer is Beyonce, and the male dancer is Sherlock
// There are 2 male dancers waiting to dance

const squareQueue = new Queue();

squareQueue.enqueue({
  sex: 'F',
  Name: 'Jessie',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'John',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Jack',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Jana',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Jenna',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Mason',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Frankie',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Jason',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Kelsey',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Kristof',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Jamie',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Hope Solo',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Chase',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Roberto',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Steven',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Jennifer',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Kyle',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Tony',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Toby',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Cleo',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Tina',
});
squareQueue.enqueue({
  sex: 'M',
  Name: 'Brad',
});
squareQueue.enqueue({
  sex: 'F',
  Name: 'Jessica',
});

function squareDance(queue) {
  const maleQueue = new Queue();
  const femaleQueue = new Queue();

  while (queue.last !== null) {
    const next = queue.dequeue();
    if (next.sex === 'F') {
      femaleQueue.enqueue(next.Name);
    } else maleQueue.enqueue(next.Name);
  }
  while (femaleQueue.last !== null && maleQueue.last !== null) {
    console.log(
      femaleQueue.dequeue() + ' will dance with ' + maleQueue.dequeue()
    );
  }

  if (femaleQueue.last !== null) {
    console.log(`There are ${queueCount(femaleQueue)} women left to dance`);
  }

  if (maleQueue.last !== null) {
    console.log(`There are ${queueCount(maleQueue)} men left to dance`);
  }

  function queueCount(queue) {
    if (queue.last === null) {
      return 0;
    }

    let counter = 1;
    let tempNode = queue.first;

    while (tempNode.next !== null) {
      counter++;
      tempNode = tempNode.next;
    }
    return counter;
  }
}
// squareDance(squareQueue)

// Question 10


module.exports = Stack;
