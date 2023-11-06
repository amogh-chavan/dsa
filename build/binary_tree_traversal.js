/**
 *      5
 *  1       2
 * 3 4     8 21
 */
const tree = {
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
function pre_order_walk(curr, path) {
    if (!curr) {
        return path;
    }
    //pre
    path.push(curr.value);
    //recurse
    pre_order_walk(curr.left, path);
    //post
    pre_order_walk(curr.right, path);
    return path;
}
function in_order_walk(curr, path) {
    if (!curr) {
        return path;
    }
    //pre
    in_order_walk(curr.left, path);
    //recurse
    path.push(curr.value);
    //post
    in_order_walk(curr.right, path);
    return path;
}
function post_order_walk(curr, path) {
    if (!curr) {
        return path;
    }
    //pre
    post_order_walk(curr.left, path);
    //recurse
    post_order_walk(curr.right, path);
    //post
    path.push(curr.value);
    return path;
}
function dsf_walk(head, needle) {
    const q = [];
    q.push(head);
    while (q.length) {
        const curr = q.shift();
        if (!curr) {
            continue;
        }
        if (curr.value === needle) {
            return true;
        }
        if (curr.left) {
            q.push(curr.left);
        }
        if (curr.right) {
            q.push(curr.right);
        }
    }
    return false;
}
function binary_tree_traversal(head) {
    const pre_result = pre_order_walk(head, []);
    const in_result = in_order_walk(head, []);
    const post_result = post_order_walk(head, []);
    const dsf_result = dsf_walk(head, 3);
    console.log("Result", {
        pre_result,
        in_result,
        post_result,
        dsf_result,
    });
    if (JSON.stringify(pre_result) === JSON.stringify([5, 1, 3, 4, 2, 8, 21]) &&
        JSON.stringify(in_result) === JSON.stringify([3, 1, 4, 5, 8, 2, 21]) &&
        JSON.stringify(post_result) === JSON.stringify([3, 4, 1, 8, 21, 2, 5]) &&
        dsf_result === true) {
        return;
    }
    else {
        throw "Traversal failed";
    }
    return;
}
binary_tree_traversal(tree);
