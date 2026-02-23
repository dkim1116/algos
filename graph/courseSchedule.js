// Restate: Find if a student can take all courses.
// Pattern: DFS graph traversal. Use a set to keep track of nodes visited in current path.
// Use another set if I want to optimize and avoid running duplicate traversal.
// Invariant: Keep track of nodes visited in current recursive path. Clean it up when done with traversing
// the starting node and it's neighbors.
// Action: Loop through the courses and map out in a dictionary what courses have what prerequisite.
// Loop through the dictionary and traverse through the node and its neighbors while keeping track of visiting
// and visited nodes. When a node has been visited, we can move on to the next prerequisite to traverse as we will be
// revisiting a path that we've already explored. If we are done with traversing the current prerequisite
// and its neighbors, we clear out the set as we are done with the current recursive call stack.
// Why: This works because we keep track of visited nodes and update them when needed. If we see a node
// that has already been visited, we've found a cycle in the graph so a student can't take all courses.
// If we dont, then we know we're good
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = (numCourses, prereqs) => {
    const visited = new Set();
    const visiting = new Set();
    const courseMap = new Array(numCourses).fill(0).map(() => []);

    for (let [course, prereq] of prereqs) {
        courseMap[course].push(prereq);
    }

    const dfs = (course) => {
        if (visited.has(course)) return true;
        if (visiting.has(course)) return false;

        visiting.add(course);

        for (let prereq of courseMap[course]) {
            if (!dfs(prereq)) return false;
        }

        visiting.delete(course);
        visited.add(course);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    }

    return true;
}

