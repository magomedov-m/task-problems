/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    if (path === '/') return '/';
    let arr = path.split('/');
    let stack = [];
    
    for (let i of arr) {
        if (i === '..') {
            stack.pop();
        }else if (i === '.' || i === '') {
            continue;
        }else {
            stack.push(i);
        }
    }
    if (stack.length == 0) return '/';
    let S = '';
    for (let i = 0; i < stack.length; i++) {
        S += '/';
        S += stack[i];
    }
    
    return S;
};