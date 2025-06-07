//for of
//cannot apply on objects
// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
     console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
     console.log(key, ':-', value);
}



//for of loop doesnt work on objects directly Obkects.keys() returns anarray if index
let person = { name: "Alice", age: 25, city: "New York" };

for (let key of Object.keys(person)) {
  console.log(key, ":", person[key]);
}


