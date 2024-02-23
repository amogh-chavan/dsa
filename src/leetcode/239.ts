// Brute force approch
// function maxSlidingWindow(nums: number[], k: number): number[] {
//     const result = [];

//     for (let i = 0; i <= nums.length - k; i++) {
//       let max = -Infinity;
//       for (let j = i; j < i + k; j++) {
//         max = Math.max(max, nums[j]);
//       }
//       result.push(max);
//     }
//     return result;
//   }

class DequeNode<T> {
  value: T;
  next?: DequeNode<T>;
  prev?: DequeNode<T>;
  constructor(value: T) {
    return { value: value };
  }
}

class Deque<T> {
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

function maxSlidingWindow(nums: number[], k: number): number[] {
  const result = [];

  const deque = new Deque<number>();

  for (let i = 0; i < nums.length; i++) {
    //remove out of bound elements
    if (deque.peekFront() !== undefined && deque.front.value === i - k) {
      deque.removeFront();
    }

    //remove values which are in bound but less than current value
    while (deque.peekBack() !== undefined && nums[deque.back.value] < nums[i]) {
      deque.removeBack();
    }

    //add new value

    deque.addBack(i);

    //push answer if window is about to change
    if (i >= k - 1) {
      result.push(nums[deque.front.value]);
    }
  }
  return result;
}

console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3));
