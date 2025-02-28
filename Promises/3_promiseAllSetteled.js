// Promise All setteld =>
// -> promise all setteld use to perform multiple asyncronous task , if any promise faild it will excecute next promise rather rejecting rest of all promises.

const promise1 = new Promise((resolve, reject, err) => {
    fdfd
    if (err) {
        reject("Rejected Promise 1")
    }
    resolve("Accepted Promise 1")
})

const promise2 = new Promise((resolve, reject, err) => {
    dfdf
    if (err) {
        reject("Rejected Promise 2")
    }
    resolve("Accepted Promise 2")
})

const promise3 = new Promise((resolve, reject, err) => {
    if (err) {
        reject("Rejected Promise 3")
    }
    resolve("Accepted Promise 3")
})

Promise.allSettled([promise1, promise2, promise3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})