//3- asyncrounous operation using the async call back =>
const asyncCallback = (callback) => {
    callback("I am from the call back!")
}

asyncCallback((data) => {
    console.log(data)
})
