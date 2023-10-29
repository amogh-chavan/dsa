type SNode<T> = {
  value: T;
  prev?: SNode<T>;
};

class Stack<T> {
  private length: number;
  private head?: SNode<T>;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(value: T) {
    const node: SNode<T> = {
      value: value,
    };
    if (this.length === 0) {
      this.head = node;
    } else {
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
    } else {
      this.head = this.head.prev;
      out.prev = undefined;
    }
    return out?.value;
  }

  peek() {
    return this.head?.value;
  }
}
