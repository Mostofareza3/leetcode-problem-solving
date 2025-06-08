
/* 
Given a sequence of opening and closing parentheses ("(" and ")") you will have to determine if it is a valid one.

A sequence of parentheses is considered valid if every opened parenthesis has a closing parenthesis appearing after it. And, there are no unpaired parenthesis in the sequence.

Input
The input will contain a string of opening and closing parentheses. The string will be no longer than 25 characters.

Output
Print "Yes" if the input string contains a valid sequence of parentheses. Otherwise, print "No".
 */


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


function isValidParentheses1(s) {
    const stack = [];
    for (const char of s) {
        if (char === '(') {
            stack.push(char);
        } else {
            if (stack.length === 0) return "NO";
            stack.pop();
        }
    }
    return stack.length === 0 ? "YES" : "NO";
}

function isValidParentheses3(s) {
    function helper(index, balance) {
        if (balance < 0) return false;
        if (index === s.length) return balance === 0;

        if (s[index] === '(') {
            return helper(index + 1, balance + 1);
        } else {
            return helper(index + 1, balance - 1);
        }
    }

    return helper(0, 0) ? "YES" : "NO";
}