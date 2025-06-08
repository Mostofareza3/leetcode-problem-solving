
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;  // Head of the queue
        this.rear = null;   // Tail of the queue
        this.size = 0;
    }

    push(data) {
        const newNode = new Node(data);
        if (this.rear) {
            this.rear.next = newNode;
        } else {
            this.front = newNode; // Queue was empty
        }
        this.rear = newNode;
        this.size++;
    }

    pop() {
        if (!this.front) return null;

        const poppedData = this.front.data;
        this.front = this.front.next;
        if (!this.front) {
            this.rear = null; // Queue became empty
        }
        this.size--;
        return poppedData;
    }

    peek() {
        return this.front ? this.front.data : null;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize() {
        return this.size;
    }
}

// [1,2,3,4,5]