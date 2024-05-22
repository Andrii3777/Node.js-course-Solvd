const { Queue } = require('./queue');
const { Stack } = require('./stack');

class Graph {
    constructor() {
        this.graph = new Map();
    }

    /**
     * Checks if the specified vertex exists in the graph.
     * @private
     * @param {*} vertex - The vertex to check.
     * @throws {Error} Throws an error if the vertex does not exist.
     */
    #checkVertexIfExist(vertex) {
        if (!this.graph.has(vertex)) {
            throw new Error(`Vertex ${vertex} does not exist in the graph!`);
        }
    }

    /**
     * Adds a new vertex to the graph.
     * @param {*} vertex - The vertex to add.
     */
    addVertex(vertex) {
        this.graph.set(vertex, new Set());
    }

    /**
     * Adds an undirected edge between two vertices in the graph.
     * @param {*} fromVertex - The starting vertex of the edge.
     * @param {*} toVertex - The ending vertex of the edge.
     * @throws {Error} Throws an error if either vertex does not exist.
     */
    addEdge(fromVertex, toVertex) {
        this.#checkVertexIfExist(fromVertex);
        this.#checkVertexIfExist(toVertex);

        this.graph.get(fromVertex).add(toVertex);
        this.graph.get(toVertex).add(fromVertex);
    }

    /**
     * Performs a depth-first search (DFS) starting from a specified vertex.
     * @param {*} startVertex - The starting vertex for the DFS.
     * @returns {Array} An array of vertices visited during the DFS.
     * @throws {Error} Throws an error if the starting vertex does not exist.
     */
    DFS(startVertex) {
        this.#checkVertexIfExist(startVertex);

        const stack = new Stack();
        stack.push(startVertex);
        const visitedVertices = new Set([startVertex]);
        const res = [];

        while (stack.length) {
            const curVertex = stack.pop();
            res.push(curVertex);

            const neighbors = this.graph.get(curVertex);
            for (const neighbor of neighbors) {
                if (!visitedVertices.has(neighbor)) {
                    visitedVertices.add(neighbor);
                    stack.push(neighbor);
                }
            }
        }

        return res;
    }

    /**
     * Performs a breadth-first search (BFS) starting from a specified vertex.
     * @param {*} startVertex - The starting vertex for the BFS.
     * @returns {Array} An array of vertices visited during the BFS.
     * @throws {Error} Throws an error if the starting vertex does not exist.
     */
    BFS(startVertex) {
        this.#checkVertexIfExist(startVertex);

        const queue = new Queue();
        queue.enqueue(startVertex);
        const visitedVertices = new Set([startVertex]);
        const res = [];

        while (queue.size) {
            const curVertex = queue.dequeue();
            res.push(curVertex);

            const neighbors = this.graph.get(curVertex);
            for (const neighbor of neighbors) {
                if (!visitedVertices.has(neighbor)) {
                    visitedVertices.add(neighbor);
                    queue.enqueue(neighbor);
                }
            }
        }

        return res;
    }

    /**
     * Finds the shortest path between two vertices using BFS.
     * @param {*} startVertex - The starting vertex.
     * @param {*} endVertex - The ending vertex.
     * @returns {Array|null} The shortest path as an array of vertices, or null if no path exists.
     * @throws {Error} Throws an error if either vertex does not exist.
     */
    shortestPathBFS(startVertex, endVertex) {
        this.#checkVertexIfExist(startVertex);
        this.#checkVertexIfExist(endVertex);

        const queue = new Queue();
        queue.enqueue([startVertex]);
        const visited = new Set([startVertex]);

        while (queue.size) {
            const path = queue.dequeue();
            const vertex = path[path.length - 1];

            if (vertex === endVertex) {
                return path;
            }

            const neighbors = this.graph.get(vertex);
            for (const neighbor of neighbors) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.enqueue([...path, neighbor]);
                }
            }
        }

        return null;
    }

    /**
     * Finds the shortest path between two vertices using Dijkstra's algorithm.
     * @param {*} startVertex - The starting vertex.
     * @param {*} endVertex - The ending vertex.
     * @returns {Array|null} The shortest path as an array of vertices, or null if no path exists.
     * @throws {Error} Throws an error if either vertex does not exist.
     */
    shortestPathDijkstra(startVertex, endVertex) {
        this.#checkVertexIfExist(startVertex);
        this.#checkVertexIfExist(endVertex);

        const { shortestDistances, prevVertices, queue } = this.#setInitialData(startVertex);

        while (queue.size) {
            const curVertex = queue.dequeue();

            const path = this.#checkForEndVertex(curVertex, endVertex, prevVertices);
            if (path) return path;

            this.#processNeighbors(curVertex, shortestDistances, prevVertices, queue);
        }

        return null;
    }

    /**
     * Initializes data structures for Dijkstra's algorithm.
     * @private
     * @param {*} startVertex - The starting vertex.
     * @returns {Object} The initial data structures for the algorithm.
     */
    #setInitialData(startVertex) {
        const shortestDistances = new Map();
        const prevVertices = new Map();
        const queue = new Queue();
        queue.enqueue(startVertex);

        for (const vertex of this.graph.keys()) {
            shortestDistances.set(vertex, Infinity);
            prevVertices.set(vertex, null);
        }

        shortestDistances.set(startVertex, 0);

        return { shortestDistances, prevVertices, queue };
    }

    /**
     * Checks if the current vertex is the end vertex and constructs the path if it is.
     * @private
     * @param {*} currentVertex - The current vertex.
     * @param {*} endVertex - The end vertex.
     * @param {Map} prevVertices - A map of previous vertices for path reconstruction.
     * @returns {Array|null} The path as an array of vertices, or null if not the end vertex.
     */
    #checkForEndVertex(currentVertex, endVertex, prevVertices) {
        if (currentVertex === endVertex) {
            const path = [];
            let cur = endVertex;
            while (cur !== null) {
                path.unshift(cur);
                cur = prevVertices.get(cur);
            }
            return path;
        }
        return null;
    }

    /**
     * Processes the neighbors of the current vertex during Dijkstra's algorithm.
     * @private
     * @param {*} currentVertex - The current vertex.
     * @param {Map} shortestDistances - A map of shortest distances to each vertex.
     * @param {Map} prevVertices - A map of previous vertices for path reconstruction.
     * @param {Queue} queue - The queue used in the algorithm.
     */
    #processNeighbors(currentVertex, shortestDistances, prevVertices, queue) {
        const neighbors = this.graph.get(currentVertex);

        for (const neighbor of neighbors) {
            // Since all edges are unweighted and treated as having weight 1
            const distance = shortestDistances.get(currentVertex) + 1;

            if (distance < shortestDistances.get(neighbor)) {
                shortestDistances.set(neighbor, distance);
                prevVertices.set(neighbor, currentVertex);
                queue.enqueue(neighbor);
            }
        }
    }

    /**
     * Prints the graph structure to the console.
     */
    printGraph() {
        for (let [vertex, edges] of this.graph) {
            console.log(vertex + ' -> ' + [...edges].join(', '));
        }
    }
}

module.exports = { Graph };