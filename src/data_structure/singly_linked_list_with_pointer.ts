//this is a singly linked list
//each node has a random pointer which points to random node in singly linked list

class SLPNode<T> {
  value: T;
  next: SLPNode<T> | null = null;
  random: SLPNode<T> | null = null;

  constructor(value: T, random: SLPNode<T> | null = null) {
    this.value = value;
    this.random = random;
  }
}

class SLP<T> {
  head: SLPNode<T> | null;

  addHead(value: T, random: SLPNode<T> | null = null): SLPNode<T> {
    const new_node = new SLPNode<T>(value, random);

    if (!this.head) {
      this.head = new_node;
    } else {
      new_node.next = this.head;
      this.head = new_node;
    }

    return new_node;
  }

  addTail(value: T, random: SLPNode<T> | null = null): SLPNode<T> {
    const new_node = new SLPNode<T>(value, random);

    if (!this.head) {
      this.head = new_node;
    } else {
      let current_node = this.head;
      while (current_node.next !== null) {
        current_node = current_node.next;
      }
      current_node.next = new_node;
    }

    return new_node;
  }

  print() {
    let result = "";

    let current_node = this.head;

    while (current_node) {
      result +=
        current_node.value +
        " (Random: " +
        current_node.random?.value +
        ")" +
        "=>";

      current_node = current_node.next;
    }
    result += "null";
    return result;
  }

  clone(): SLP<T> {
    const clone_ll = new SLP<T>();
    let current_clone_ll_node = clone_ll.head;
    let current_og_ll_node = this.head;
    //map of og_node => new_node
    let map = new Map<SLPNode<T>, SLPNode<T>>();
    // Check for empty original list
    if (!current_og_ll_node) {
      return clone_ll;
    }

    while (current_og_ll_node) {
      const new_node = new SLPNode<T>(current_og_ll_node.value);
      map.set(current_og_ll_node, new_node);
      if (!current_clone_ll_node) {
        clone_ll.head = new_node;
        current_clone_ll_node = clone_ll.head;
      } else {
        current_clone_ll_node.next = new_node;
        current_clone_ll_node = new_node;
      }
      current_og_ll_node = current_og_ll_node.next;
    }

    current_clone_ll_node = clone_ll.head;
    current_og_ll_node = this.head;

    while (current_og_ll_node) {
      if (current_og_ll_node.random) {
        let current_og_random_node = current_og_ll_node.random;
        let current_clone_random_node = map.get(current_og_random_node);
        current_clone_ll_node.random = current_clone_random_node;
      }

      current_og_ll_node = current_og_ll_node.next;
      current_clone_ll_node = current_clone_ll_node.next;
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

let og_spll = new SLP();
const n2 = og_spll.addHead(2);
const n3 = og_spll.addTail(3, n2);
const n1 = og_spll.addHead(1, n3);
const n4 = og_spll.addTail(4);
n2.random = n4;
og_spll.print();
const clone_spll = og_spll.clone();
// og_spll = new SLP();
console.log("------------------------------------------------");
console.log("original", og_spll.print());
console.log("cloned", clone_spll.print());
console.log("------------------------------------------------");
console.log("cloned ll reversed", clone_spll.reverse());
console.log("cloned", clone_spll.print());
console.log("original", og_spll.print());
console.log("------------------------------------------------");
console.log("cloned ll reversed", clone_spll.reverse());
console.log("cloned", clone_spll.print());
console.log("original", og_spll.print());
console.log("------------------------------------------------");
console.log("cloned ll reversed", clone_spll.reverse());
console.log("cloned", clone_spll.print());
console.log("original", og_spll.print());
console.log("------------------------------------------------");
clone_spll.head.next.random.value = 99;
console.log("cloned", clone_spll.print());
console.log("original", og_spll.print());
console.log("------------------------------------------------");
