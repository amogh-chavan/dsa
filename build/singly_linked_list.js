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
        for (let i = 0; curr && i < this.length; i++) {
            if (curr.value === value) {
                break;
            }
            else {
                curr = curr.next;
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
        if (curr.next) {
            curr.next.prev = curr.prev;
        }
        if (curr.prev) {
            curr.prev.next = curr.next;
        }
        if (this.head === curr) {
            this.head = curr.next;
        }
        if (this.tail === curr) {
            this.tail = curr.prev;
        }
        curr.prev = curr.next = undefined;
        return curr.value;
    }
    getAt(index) {
        if (index > this.length) {
            return;
        }
        let curr = this.head;
        for (let i = 0; i < index; i++) {
            curr = curr.next;
        }
        return curr === null || curr === void 0 ? void 0 : curr.value;
    }
    removeAt(index) {
        if (index > this.length) {
            return;
        }
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
        var _a, _b;
        let curr = this.head;
        let list = "";
        for (let i = 0; i < this.length; i++) {
            console.log("length: ", this.length);
            // console.log(curr);
            let row = `|v:${curr.value}, n:${(_a = curr.next) === null || _a === void 0 ? void 0 : _a.value}, p:${(_b = curr.prev) === null || _b === void 0 ? void 0 : _b.value}|`;
            list += " " + row;
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
a.insertAt(9, 3);
a.debug();
a.remove(100);
a.debug();
a.remove(9);
a.debug();
a.removeAt(0);
a.debug();
a.removeAt(1000);
a.debug();
console.log("getAt 5: ", a.getAt(5));
console.log("getAt 2: ", a.getAt(2));
console.log("getAt 4: ", a.getAt(4));
console.log("getAt 3: ", a.getAt(3));
