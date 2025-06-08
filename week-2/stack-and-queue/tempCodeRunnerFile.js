// Stack implementation in JS

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    peek() {
        return this.top ? this.top.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    pop() {
        if (!this.top) return null;
        const popped = this.top;
        this.top = this.top.next;
        this.size--;
        return popped.data;
    }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());



// Using Object
function createStack() {
    const stack = {};
    let top = 0;
  
    return {
      // Push element onto stack
      push(element) {
        stack[top] = element;
        top++;
      },
  
      // Pop element from stack
      pop() {
        if (top === 0) return "Stack is empty";
        top--;
        const item = stack[top];
        delete stack[top];
        return item;
      },
  
      // Peek at top element
      peek() {
        if (top === 0) return "Stack is empty";
        return stack[top - 1];
      },
  
      // Stack size
      size() {
        return top;
      },
  
      // Is stack empty?
      isEmpty() {
        return top === 0;
      },
  
      // Clear the stack
      clear() {
        for (let i = 0; i < top; i++) {
          delete stack[i];
        }
        top = 0;
      }
    };
  }
  
  // Example usage
  const myStack = createStack();
  myStack.push(1);
  myStack.push(2);
//   console.log(myStack.pop()); // 2
//   console.log(myStack.peek()); // 1
  console.log(JSON.stringify(myStack))