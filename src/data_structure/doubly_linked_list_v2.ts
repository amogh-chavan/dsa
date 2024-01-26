export class Node<T> {
  public next: Node<T> | null = null;
  public previous: Node<T> | null = null;
  constructor(public data: T) {}
}

export interface ILinkedList<T> {
  insertAtBegin(data: T): Node<T>;
  insertAtEnd(data: T): Node<T>;
  deleteNode(node: Node<T>): void;
  traverse(): T[];
  size(): number;
  search(comparator: (data: T) => boolean): Node<T> | null;
}

export class LinkedList<T> implements ILinkedList<T> {
  private head: Node<T> | null = null;

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

  public insertAtEnd(data: T): Node<T> {
    const new_node = new Node(data);
    if (!this.head) {
      this.head = new_node;
    } else {
      const last_node = this.getLastNode();

      last_node!.next = new_node;
      new_node.previous = last_node;
    }
    return new_node;
  }

  public insertAtBegin(data: T): Node<T> {
    const new_node = new Node(data);
    if (!this.head) {
      this.head = new_node;
    } else {
      new_node.next = this.head;
      this.head.previous = new_node;

      this.head = new_node;
    }

    return new_node;
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

  public search(comparator: (data: T) => boolean): Node<T> | null {
    let current_node = this.head;

    while (current_node) {
      if (comparator(current_node.data)) {
        return current_node;
      }

      current_node = current_node.next;
    }

    return current_node;
  }

  public traverse(): T[] {
    const result: T[] = [];

    let current_node = this.head;
    while (current_node) {
      result.push(current_node.data);

      current_node = current_node.next;
    }

    return result;
  }

  public size(): number {
    return this.traverse().length;
  }
}

const linked_list = new LinkedList<number>();

linked_list.insertAtEnd(1);
console.log(linked_list.traverse());
linked_list.insertAtEnd(2);
console.log(linked_list.traverse());
const d = linked_list.insertAtBegin(3);
linked_list.insertAtBegin(4);
console.log(linked_list.traverse());
console.log(linked_list.size());
linked_list.deleteNode(d);
console.log(linked_list.traverse());
console.log(linked_list.size());
console.log(linked_list.search((data: number) => data === 3));
console.log(linked_list.search((data: number) => data === 1));
