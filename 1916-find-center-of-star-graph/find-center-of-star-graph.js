/**
 * @param {number[][]} edges
 * @return {number}
 */
var findCenter = function(edges) {
    let visited = new Set();

    for (let i = 0; i < edges.length; i++) {

        if (visited.has(edges[i][0])) {
            return edges[i][0];
        }else if (visited.has(edges[i][1])) {
            return edges[i][1];
        }else {
            visited.add(edges[i][0]);
            visited.add(edges[i][1]);
        }
    }
};