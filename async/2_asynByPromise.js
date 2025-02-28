//2- asyncrous operation using the promises =>
const myPromise = new Promise((resolve, reject) => {
    resolve("Hello world By promise!")
})
myPromise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})