const findOrder = (numCourses, prerequisites) => {
    const visiting = new Set();
    const visited = new Set();
    const courseMap = new Array(numCourses).fill(0).map(() => []);
    const result = [];

    for (let [course, prereq] of prerequisites) {
        courseMap[course].push(prereq);
    }

    const dfs = (course) => {
        if(visiting.has(course)) return false;
        if(visited.has(course)) return true;

        visiting.add(course);

        for (let neighbor of courseMap[course]) {
            if(!dfs(neighbor)) {
                visiting.delete(course);
                return false;
            }
        }
        visiting.delete(course);
        visited.add(course);

        result.push(course);
        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return result;
};


const findOrder = (numCourses, prerequisites) => {
    const visiting = new Set();
    const visited = new Set();
    const courseMap = new Array(numCourses).fill(0).map(() => []);
    let result = [];

    for (let [course, prereq] of prerequisites) {
        courseMap[course].push(prereq);
    }

    const dfs = (course) => {
        if (visiting.has(course)) return false;
        if (visited.has(couse)) return true;

        visiting.add(course);

        for (let neighbor of courseMap[course]) {
            if (!dfs(neighbor)) return false;
        }

        visiting.delete(course);
        visited.add(course);
        result.push(course);

        return true;
    }

    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return [];
    }

    return result;
}