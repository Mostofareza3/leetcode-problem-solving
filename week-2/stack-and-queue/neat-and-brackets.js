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


function neatAndBracket(string) {
    const stack = new Stack()
    let valid = true
    for (char of string) {
        if (char === '(') {
            stack.push(char)
        } else {
            if (stack.isEmpty()) {
                valid = false
                break
            } else {
                stack.pop()
            }
        }
    }
    if (!stack.isEmpty()) valid = false
    return valid ? "YES" : "NO"
}

console.log(neatAndBracket("()"))