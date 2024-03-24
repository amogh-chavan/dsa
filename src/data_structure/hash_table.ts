export class Node<T> {
  public next: Node<T> | null = null;
  public previous: Node<T> | null = null;
  constructor(public value: T, public key: string) {}
}

export interface ILinkedList<T> {
  head: Node<T>;
  insertAtBegin(key: string, value: T): Node<T>;

  deleteNode(node: Node<T>): void;
  updateNode(key: string, value: T): void;
  traverse(): T[];
  size(): number;
  search(comparator: (value: T) => boolean): Node<T> | null;
  searchByKey(comparator: (key: string) => boolean): T | null;
}

export class LinkedList<T> implements ILinkedList<T> {
  public head: Node<T> | null = null;

  private getLastNode(): Node<T> | null {
    if (!this.head) {
      return null;
    }
    let current_node = this.head;
    while (current_node.next) {
      current_node = current_node.next;
    }

    return current_node;
  }

  public insertAtBegin(key: string, value: T): Node<T> {
    const new_node = new Node(value, key);
    if (!this.head) {
      this.head = new_node;
    } else {
      new_node.next = this.head;
      this.head.previous = new_node;

      this.head = new_node;
    }

    return new_node;
  }

  public updateNode(key: string, value: T): void {
    let current_node = this.head;

    while (current_node) {
      if (current_node.key === key) {
        break;
      }

      current_node = current_node.next;
    }

    current_node.value = value;
  }

  public deleteNode(node: Node<T>): void {
    if (!node.previous) {
      this.head = node.next;
    } else {
      node.previous.next = node.next;
      if (node.next) {
        node.next.previous = node.previous;
      }
    }
  }

  public search(comparator: (value: T) => boolean): Node<T> | null {
    let current_node = this.head;

    while (current_node) {
      if (comparator(current_node.value)) {
        return current_node;
      }

      current_node = current_node.next;
    }

    return current_node;
  }

  public searchByKey(comparator: (key: string) => boolean): T | null {
    let current_node = this.head;

    while (current_node) {
      if (comparator(current_node.key)) {
        return current_node.value;
      }

      current_node = current_node.next;
    }
  }

  public traverse(): T[] {
    const result: T[] = [];

    let current_node = this.head;
    while (current_node) {
      result.push(current_node.value);

      current_node = current_node.next;
    }

    return result;
  }

  public size(): number {
    return this.traverse().length;
  }
}
class HashTable<T> {
  public table: ILinkedList<T>[] | undefined = [];
  public size: number;
  public capacity: number;
  public loadFactor: number;

  constructor(capacity: number = 10, loadFactor = 0.75) {
    this.size = 0;
    this.capacity = capacity;
    this.loadFactor = loadFactor;

    for (let i = 0; i < capacity; i++) {
      this.table[i] = new LinkedList();
    }
  }

  private hash(key: string) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    const i = hash % this.size || 1;

    return i;
  }

  public get(key: string) {
    const index = this.hash(key);
    const ll: ILinkedList<T> = this.table[index];

    return ll.searchByKey((k) => k === key);
  }

  public set(key: string, value: T) {
    const index = this.hash(key);
    console.log({ index });
    const ll: ILinkedList<T> = this.table[index];

    const key_exists = ll.searchByKey((k) => k === key);

    if (key_exists !== undefined) {
      ll.updateNode(key, value);
    } else {
      this.size++;
      ll.insertAtBegin(key, value);
    }

    if (this.size / this.capacity > this.loadFactor) {
      this.rehash(this.capacity * 2);
    }
  }

  public rehash(new_capacity: number) {
    this.capacity = new_capacity;
    const old_table = this.table;
    this.size = 0;

    for (let i = 0; i < this.capacity; i++) {
      this.table[i] = new LinkedList();
    }
    console.log("new t", this.table);
    old_table.forEach((ll) => {
      let node = ll.head;

      while (node !== undefined && node !== null) {
        this.set(node.key, node.value);
        node = node.next;
      }
    });
  }
}

const ht = new HashTable();
ht.set("1", "amogh");
console.log(ht.get("1"));
ht.set("1", "amol");
console.log(ht.get("1"));
ht.set("2", "akhsay");
console.log(ht.get("22"));
ht.rehash(20);
console.log({ ht });
