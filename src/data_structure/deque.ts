export class DequeNode<T> {
  value: T;
  next?: DequeNode<T>;
  prev?: DequeNode<T>;
  constructor(value: T) {
    return { value: value };
  }
}

export class Deque<T> {
  public front: DequeNode<T> | undefined = undefined;
  public back: DequeNode<T> | undefined = undefined;
  public size: number = 0;

  peekFront() {
    return this.front;
  }
  peekBack() {
    return this.back;
  }

  addFront(value: T) {
    const node = new DequeNode(value);

    if (this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.front.next = node;
      node.prev = this.front;
      this.front = node;
    }
    this.size++;
  }
  addBack(value: T) {
    const node = new DequeNode(value);

    if (this.isEmpty()) {
      this.front = this.back = node;
    } else {
      this.back.prev = node;
      node.next = this.back;
      this.back = node;
    }
    this.size++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return; // Nothing to remove
    }

    if (this.front === this.back) {
      this.front = this.back = undefined;
    } else {
      const current_front = this.front;
      this.front = this.front.prev;

      this.front.next = undefined;
      current_front.next = undefined;
      current_front.prev = undefined;
    }
    this.size--;
  }
  removeBack() {
    if (this.isEmpty()) {
      return; // Nothing to remove
    }

    if (this.front === this.back) {
      this.front = this.back = undefined;
    } else {
      const current_back = this.back;
      this.back = this.back.next;
      this.back.prev = undefined;
      current_back.next = undefined;
      current_back.prev = undefined;
    }
    this.size--;
  }

  isEmpty() {
    return this.size === 0;
  }
}

const deque = new Deque<number>();
console.log("size:", deque.size);
console.log("isEmpty:", deque.isEmpty());
deque.addBack(2);
console.log("addBack:", deque);
deque.addBack(1);
console.log("addBack:", deque);
deque.removeBack();
console.log("removeBack:", deque);
deque.removeBack();
console.log("removeBack:", deque);
