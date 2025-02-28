//2- Handling Mulitple promise =>
// if any promise got error every promise will be failed, this is the draw back of promise all.

let myPromise1 = new Promise((resolve, reject, err) => {
    bjn
    if (err) {
        return reject("Rejected myPromise1!")
    }
    resolve("Accepted myPromise1!")
});
let myPromise2 = new Promise((resolve, reject, err) => {
    if (err) {
        return reject("Rejected myPromise2!")
    }
    resolve("Accepted myPromise2!")
});
let myPromise3 = new Promise((resolve, reject, err) => {
    if (err) {
        return reject("Rejected myPromise3!")
    }
    resolve("Accepted myPromise3!")
});

Promise.all([myPromise1, myPromise2, myPromise3]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})