class Queue {
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }
    peek() {
        const out = this.head;
        if (!out) {
            return;
        }
        else {
            return this.head.value;
        }
    }
    enqueue(value) {
        const node = {
            value: value,
        };
        if (!this.tail) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    dequeue() {
        const out = this.head;
        if (this.length === 0) {
            return;
        }
        else {
            this.head = this.head.next;
        }
        if (this.length === 0) {
            this.tail = undefined;
        }
        this.length--;
        return out.value;
    }
}
