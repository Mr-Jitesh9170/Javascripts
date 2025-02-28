//Ex-1=> shallow copy 
let arr = [1, 2, 3, 3, { name: "jiteshpandey" }]

let arr2 = [...arr]
arr2[0] = 2

arr2[4].name = "pandey ji"
console.log(arr, "  ", arr2)

// Ex-2=> Deep copy 
let original = [1, 2, 3, 3, { name: "jiteshpandey" }]

let copied = JSON.parse(JSON.stringify(original))
copied[0] = 2

copied[4].name = "pandey ji"
console.log(original, "  ", copied)