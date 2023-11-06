class Stack {
    constructor() {
        this.head = undefined;
        this.length = 0;
    }
    push(value) {
        const node = {
            value: value,
        };
        if (this.length === 0) {
            this.head = node;
        }
        else {
            node.prev = this.head;
            this.head = node;
        }
        this.length++;
    }
    pop() {
        if (this.length === 0) {
            return;
        }
        const out = this.head;
        this.length--;
        if (this.length === 0) {
            this.head = undefined;
        }
        else {
            this.head = this.head.prev;
            out.prev = undefined;
        }
        return out === null || out === void 0 ? void 0 : out.value;
    }
    peek() {
        var _a;
        return (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
    }
}
