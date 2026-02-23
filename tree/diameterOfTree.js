const getDiameter = (root) => {
    let best = -Infinity;

    const postOrderDFS = (node) => {
        if (!node) return 0;

        const leftHeight = postOrderDFS(node.left);
        const rightHeight = postOrderDFS(node.right);

        best = Math.max(best, leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return best === -Infinity ? 0 : best;
};

const getDiameterOfTree = (root) => {
    let best = 0;

    const postOrderDFS = (node) => {
        if (!node) return 0;

        const leftHeight = postOrderDFS(node.left);
        const rightHeight = postOrderDFS(node.right);

        best = Math.max(best, leftHeight + rightHeight);

        return 1 + Math.max(leftHeight, rightHeight);
    }

    postOrderDFS(root);
    return best;
}