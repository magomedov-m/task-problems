/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions) {
    return new Promise((resolve, reject) => {
        let res = [];
        let completed = 0;

        for (let id = 0; id < functions.length; id++) {
            functions[id]()
            .then((data) => {
                res[id] = data;
            }).catch((err) => {
                reject(err)
            }).finally(() => {
                completed++;

                if (completed === functions.length) {
                    resolve(res);
                }
            });
        }
    });
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */