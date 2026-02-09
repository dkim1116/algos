const levelOrderTraversal = (root) => {
    const output = [];

    if (!root || !root.val) return output;

    const queue = [root];

    while (queue.length) {
        const queueSize = queue.length;
        const result = [];

        for (let i = 0; i < queueSize; i++) {
            const node = queue.shift();
            result.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        output.push(result);
    }


    return output;
}