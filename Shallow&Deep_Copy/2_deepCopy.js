// Deep copy =>
//  in case of deep copy if copy an object in another object , and changing the property of copied object then it will not affect to original object of properties.
// to make the deep copy use of loadous , json.parse or recursion.

const userDetails = {
    name: "Jitesh Pandey",
    contactDetails: {
        email: "mr.jiteshpandey@gmail.com",
        number: "748373834"
    }
}

const copiedObj = JSON.parse(JSON.stringify(userDetails));

copiedObj.name = "Pandey ji"
copiedObj.contactDetails.email = "pandeyji@gmail.com"

console.log(userDetails)
console.log(copiedObj)