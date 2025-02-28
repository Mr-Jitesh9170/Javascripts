'use strict'

// 1=> cannot use any variable without declaration in strict mode, (but can use without use strict)
myvalue = 10;
console.log(myvalue)


// 2=>  cannot use any functions without declaration in strict mode, (but can use without use strict)
myFunction = () => {
    console.log("hello world!")
}
console.log(myFunction())