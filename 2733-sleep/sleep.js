/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {

    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(t)
        }, millis)
    })

    return await promise;
}


let t = Date.now()
sleep(100).then(() => console.log(Date.now() - t)) // 100
