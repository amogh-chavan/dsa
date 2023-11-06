/**
 *      5
 *  1       2
 * 3 4     8 21
 */
const tree_1_a = {
    value: 5,
    left: {
        value: 1,
        left: {
            value: 3,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        },
    },
    right: {
        value: 2,
        left: {
            value: 8,
            left: null,
            right: null,
        },
        right: {
            value: 21,
            left: null,
            right: null,
        },
    },
};
const tree_1_b = {
    value: 5,
    left: {
        value: 1,
        left: {
            value: 3,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        },
    },
    right: {
        value: 2,
        left: {
            value: 8,
            left: null,
            right: null,
        },
        right: {
            value: 21,
            left: null,
            right: null,
        },
    },
};
const tree_2_a = {
    value: 5,
    left: {
        value: 1,
        left: {
            value: 3,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        },
    },
    right: {
        value: 2,
        left: {
            value: 8,
            left: null,
            right: null,
        },
        right: {
            value: 21,
            left: null,
            right: null,
        },
    },
};
const tree_2_b = {
    value: 5,
    left: {
        value: 1,
        left: {
            value: 3,
            left: null,
            right: null,
        },
        right: {
            value: 4,
            left: null,
            right: null,
        },
    },
    right: {
        value: 2,
        left: {
            value: 8,
            right: null,
            left: {
                value: 21,
                left: null,
                right: null,
            },
        },
        right: null,
    },
};
function binary_tree_equal(a, b) {
    if (a === null && b === null) {
        return true;
    }
    if (a === null || b === null) {
        return false;
    }
    if (a.value !== b.value) {
        return false;
    }
    return (binary_tree_equal(a.left, b.left) && binary_tree_equal(a.right, b.right));
}
const result_1 = binary_tree_equal(tree_1_a, tree_1_b);
const result_2 = binary_tree_equal(tree_2_a, tree_2_b);
console.log({ result_1, result_2 });
