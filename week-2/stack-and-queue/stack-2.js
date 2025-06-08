

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }
    push(data) {
        const newNode = new Node(data)
        newNode.next = this.top
        this.top = newNode
        this.size++
    }
    pop() {
        if (this.size === 0) return null;
        const nextTop = this.top.next;
        this.top = nextTop;
        this.size--
    }
    topValue() {
        if (this.size === 0) return null;
        return this.top.data
    }
}