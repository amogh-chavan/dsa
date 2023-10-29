type QNode<T> = {
  value: T;
  next?: QNode<T>;
};

class Queue<T> {
  private length: number;
  private head: QNode<T>;
  private tail: QNode<T>;

  constructor() {
    this.length = 0;

    this.head = this.tail = undefined;
  }

  peek() {
    const out = this.head;
    if (!out) {
      return;
    } else {
      return this.head.value;
    }
  }

  enqueue(value: T) {
    const node: QNode<T> = {
      value: value,
    };

    if (!this.tail) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
  }

  dequeue() {
    const out = this.head;

    if (this.length === 0) {
      return;
    } else {
      this.head = this.head.next;
    }

    if (this.length === 0) {
      this.tail = undefined;
    }

    this.length--;
    return out.value;
  }
}
