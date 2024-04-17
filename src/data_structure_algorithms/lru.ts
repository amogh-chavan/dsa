class LRUNode<T> {
  value: T;
  next: LRUNode<T> | null;
  prev: LRUNode<T> | null;
  constructor(
    value: T,
    next: LRUNode<T> | null = null,
    prev: LRUNode<T> | null = null
  ) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

class LRU<K, V> {
  length: number;
  capacity: number;
  head: LRUNode<V> | null;
  tail: LRUNode<V> | null;

  lookup: Map<K, LRUNode<V>>;
  reverse_lookup: Map<LRUNode<V>, K>;

  constructor(capacity = 10) {
    this.length = 0;
    this.capacity = capacity;
    this.head = this.tail = null;

    this.lookup = new Map<K, LRUNode<V>>();
    this.reverse_lookup = new Map<LRUNode<V>, K>();
  }

  get(key: K) {
    const node = this.lookup.get(key);

    if (!node) {
      return null;
    } else {
      this.detach(node);
      this.prepend(node);

      return node.value;
    }
  }

  set(key: K, value: V) {
    let node = this.lookup.get(key);

    if (!node) {
      node = new LRUNode<V>(value);
      this.length++;
      this.prepend(node);
      this.trimCache();

      this.lookup.set(key, node);
      this.reverse_lookup.set(node, key);
      //create new node
    } else {
      this.detach(node);
      this.prepend(node);
      node.value = value;
    }
  }

  private detach(node: LRUNode<V>) {
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }

    if (this.head === node) {
      this.head = node.next;
    }

    if (this.tail === node) {
      this.tail = node.prev;
    }

    node.next = null;
    node.prev = null;
  }
  private prepend(node: LRUNode<V>) {
    if (!this.head) {
      this.head = this.tail = node;
      return;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }
  private trimCache() {
    if (this.length <= this.capacity) {
      return;
    }

    const tail = this.tail;
    this.detach(tail);

    const key = this.reverse_lookup.get(tail);
    this.lookup.delete(key);
    this.reverse_lookup.delete(tail);
    this.length--;
  }

  print() {
    let current = this.head;
    const result: V[] = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }

    return result;
  }
}

const l = new LRU<string, number>(5);

console.log("get: ", l.get("one"));
console.log("set: ", l.set("five", 5));
console.log("length", l.length);
console.log("set: ", l.set("four", 4));
console.log("length", l.length);
console.log("set: ", l.set("three", 3));
console.log("length", l.length);
console.log("set: ", l.set("two", 2));
console.log("length", l.length);
console.log("set: ", l.set("one", 1));
console.log("length", l.length);
console.log("lookup", l.lookup);
console.log("reverse_lookup", l.reverse_lookup);
console.log("length", l.length);
console.log("set: ", l.set("zero", 0));
console.log("lookup", l.lookup);
console.log("reverse_lookup", l.reverse_lookup);
console.log("length", l.length);
console.log("get: ", l.get("three"));
console.log("lookup", l.lookup);
console.log("reverse_lookup", l.reverse_lookup);
console.log("length", l.length);
console.log("print", l.print());
console.log("get: ", l.get("four"));
console.log("print", l.print());
console.log("set: ", l.set("six", 6));
console.log("print", l.print());
console.log("length", l.length);
