//1- asyncrouns operation using async and await =>
const myFnc = async () => {
    await console.log("Hello world By async!")
}

myFnc() 

//2- asyncrous operation using the promises =>
const myPromise = new Promise((resolve, reject) => {
    resolve("Hello world By promise!")
})
myPromise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

//3- asyncrounous operation using the async call back =>
const asyncCallback = (callback) => {
    callback("I am from the call back!")
}

asyncCallback((data) => {
    console.log(data)
})

console.log("I am from console!")