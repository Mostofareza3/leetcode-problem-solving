/* 
Standard web browsers contain features to move backward and forward among the pages recently visited. One way to implement these features is to use two stacks to keep track of the pages that can be reached by moving backward and forward. You are asked to implement this.

The commands are:

BACK: If the backward stack is empty, the command is ignored. Otherwise, push the current page on the top of the forward stack. Pop the page from the top of the backward stack, making it the new current page.
FORWARD: If the forward stack is empty, the command is ignored. Otherwise, push the current page on the top of the backward stack. Pop the page from the top of the forward stack, making it the new current page.
VISIT <url>: Push the current page on the top of the backward stack, and make the URL specified the new current page. The forward stack is emptied.
QUIT: Quit the browser.
The browser initially loads the web page at the URL 'http://www.lightoj.com/'

Input
Input starts with an integer T (≤ 100), denoting the number of test cases.

Each case contains some commands. The keywords BACK, FORWARD, VISIT, and QUIT are all in uppercase. URLs have no whitespace and have at most 50 characters. The end of case is indicated by the QUIT command and it shouldn't be processed. Each case contains at most 100 lines.

Output
For each case, print the case number first. For each command, print the URL of the current page (in a line) after the command is executed if the command is not ignored. Otherwise, print Ignored.
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
