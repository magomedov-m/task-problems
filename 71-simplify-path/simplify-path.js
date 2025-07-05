/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let separatePath = path.split('/');

    for (let i of separatePath) {
        if (i == '..') {
            stack.pop();
        }else if (i == '.' || i == '') {
            continue;
        }else {
            stack.push(i);
        }
    }

    return '/' + stack.join('/');
};