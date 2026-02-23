const maximumPath = (root) => {
    let maxSum = -Infinity;

    const dfs = (node) => {
        if (!node) return 0;

        const leftSum = Math.max(0, dfs(node.left));
        const rightSum = Math.max(0, dfs(node.right));

        maxSum = Math.max(maxSum, leftSum + node.val + rightSum);

        return Math.max(leftSum + node.val, rightSum + node.val);
    }

    return maxSum === -Infinity ? 0 : maxSum;
}