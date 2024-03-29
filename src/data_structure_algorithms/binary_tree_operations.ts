import { BinaryNode } from "./binary_tree_traversal";

export const tree1: BinaryNode<number> = {
  value: 5,
  left: {
    value: 4,
    left: {
      value: 2,
      left: null,
      right: null,
    },
    right: {
      value: 3,
      left: null,
      right: null,
    },
  },
  right: {
    value: 22,
    left: {
      value: 21,
      left: null,
      right: null,
    },
    right: {
      value: 100,
      left: null,
      right: null,
    },
  },
};

function find<T>(value: T, head: BinaryNode<T>) {
  if (!head) {
    return false;
  }

  if (value < head.value) {
    return find(value, head.left);
  } else if (value === head.value) {
    return true;
  } else if (value > head.value) {
    return find(value, head.right);
  }
}

console.log("result: ", find(5, tree1));
console.log("result: ", find(2, tree1));
console.log("result: ", find(1, tree1));
console.log("result: ", find(100, tree1));
