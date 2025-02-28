// shallow copy =>
// in case of shallow copy , if copy one object in another object using spread operator , it creates the shallow copy of original object in the copied object.
// so , if any property will be changed in copied object then it will not affect to original object, but if original object has nested object then , if nested properites changes in copeid nested object then it will changes the value of original nested object.

// Note => in shalow copy nested property of an object still will reference to the original obj.

let userDetails = {
    name: "Jitesh Pandey",
    contactDetails: {
        email: "mr.jiteshpandey@gmail.com",
        number: "9170026121"
    }
}

let copiedObj = { ...userDetails };

copiedObj.name = "Pandey ji ka beta";
copiedObj.contactDetails.email = "pandeyji@gmail.com";

console.log(userDetails)
console.log(copiedObj)
