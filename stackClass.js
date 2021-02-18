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
  debugger;
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

module.exports = Stack;
