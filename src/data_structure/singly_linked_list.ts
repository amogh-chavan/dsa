class SLNode<T> {
  value: T;
  next: SLNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}

class SLinkedList<T> {
  head: SLNode<T> | null;

  addHead(value: T) {
    const new_node = new SLNode<T>(value);

    if (!this.head) {
      this.head = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }
  }

  addTail(value: T) {
    const new_node = new SLNode<T>(value);

    if (!this.head) {
      this.head = new_node;
    } else {
      let current_node = this.head;
      while (current_node.next !== null) {
        current_node = current_node.next;
      }
      current_node.next = new_node;
    }
  }

  print() {
    let result = "";

    let current_node = this.head;

    while (current_node) {
      result += current_node.value + "=>";

      current_node = current_node.next;
    }
    result += "null";
    return result;
  }

  clone(): SLinkedList<T> {
    const clone_ll = new SLinkedList<T>();
    let current_clone_ll_node = clone_ll.head;
    let current_og_ll_node = this.head;

    while (current_og_ll_node) {
      const new_node = new SLNode<T>(current_og_ll_node.value);

      if (!current_clone_ll_node) {
        clone_ll.head = new_node;
        current_clone_ll_node = clone_ll.head;
      } else {
        current_clone_ll_node.next = new_node;
        current_clone_ll_node = new_node;
      }
      current_og_ll_node = current_og_ll_node.next;
    }

    return clone_ll;
  }
  reverse() {
    let current_node = this.head;
    //1=>2=>3
    //1<=2<=3
    let prev_node = null;
    while (current_node) {
      const next_node = current_node.next;

      current_node.next = prev_node;
      prev_node = current_node;
      current_node = next_node;
    }

    this.head = prev_node;
  }
}

let og_ll = new SLinkedList();
og_ll.addHead(2);
og_ll.addTail(3);
og_ll.addHead(1);
og_ll.print();
const clone_ll = og_ll.clone();
// og_ll = new SLinkedList();
console.log("original", og_ll.print());
console.log("cloned", clone_ll.print());

console.log("cloned ll reversed", clone_ll.reverse());
console.log("cloned", clone_ll.print());
console.log("original", og_ll.print());

console.log("cloned ll reversed", clone_ll.reverse());
console.log("cloned", clone_ll.print());
console.log("original", og_ll.print());
