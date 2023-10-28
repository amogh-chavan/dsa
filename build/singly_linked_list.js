class DoublyLinkedList {
    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }
    prepend(value) {
        const node = {
            value: value,
        };
        if (this.length === 0) {
            this.head = this.tail = node;
        }
        else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }
    insertAt(value, index) {
        if (index > this.length) {
            throw "Index out of bound";
        }
        else if (index === this.length) {
            this.prepend(value);
        }
        else if (index === 0) {
            this.append(value);
        }
        else {
            const node = {
                value: value,
            };
            this.length++;
            let exiting_node_at_index = this.head;
            for (let i = 0; i < index; i++) {
                exiting_node_at_index = exiting_node_at_index.next;
            }
            if (exiting_node_at_index.prev) {
                exiting_node_at_index.prev.next = node;
            }
            node.prev = exiting_node_at_index.prev;
            exiting_node_at_index.prev = node;
            node.next = exiting_node_at_index;
        }
    }
    append(value) {
        const node = {
            value: value,
        };
        if (this.length === 0) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }
    remove(value) {
        let curr = this.head;
        for (let i = 0; i < this.length; i++) {
            curr = curr.next;
            if (curr.value === value) {
                break;
            }
            else {
                continue;
            }
        }
        if (!curr) {
            return;
        }
        this.length--;
        if (this.length === 0) {
            const out = this.head.value;
            this.head = this.tail = undefined;
            return out;
        }
        curr.prev = curr.next;
        curr.next = curr.prev;
        if (this.head === curr) {
            this.head = curr.next;
        }
        if (this.tail === curr) {
            this.tail = curr.next;
        }
        curr.prev = curr.next = undefined;
    }
    getAt(index) {
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr.value;
    }
    removeAt(index) {
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        if (!curr) {
            return;
        }
        this.length--;
        if (this.length === 0) {
            const out = this.head.value;
            this.head = this.tail = undefined;
            return out;
        }
        curr.prev = curr.next;
        curr.next = curr.prev;
        if (this.head === curr) {
            this.head = curr.next;
        }
        if (this.tail === curr) {
            this.tail = curr.next;
        }
        curr.prev = curr.next = undefined;
    }
    debug() {
        let curr = this.head;
        let list = "";
        for (let i = 0; i < this.length; i++) {
            console.log("i: " + i, curr.value);
            let arrow = "";
            if (curr.prev) {
                arrow += curr.prev.value + "<";
            }
            arrow += "-----";
            if (curr.next) {
                arrow += ">" + curr.next.value;
            }
            // console.log("Node=> ", arrow);
            list += " " + arrow;
            curr = curr.next;
        }
        console.log("Task completed: ", list);
    }
}
const a = new DoublyLinkedList();
a.debug();
a.prepend(1);
a.append(2);
a.append(3);
a.append(4);
a.append(5);
a.debug();
