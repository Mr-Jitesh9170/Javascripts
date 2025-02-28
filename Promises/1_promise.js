//1- Handling Single Promise =>
// => promise takes callback and three call backs as argument - resolve ,reject and error;
// => promise has three state , fullfilled , pending , rejected;

let myPromise = new Promise((resolve, reject, err) => {
    if (err) {
        return reject("Rejected!")
    }
    resolve("Accepted!")
});

myPromise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err, "<---- Error!")
})