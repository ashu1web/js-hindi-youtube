// const tinderUser = new Object()----->singleton object 
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//const obj3 = { obj1, obj2 }
//const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}  //If obj1 and  obj2 has same key then obj2 will overwrite obj1
console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser));      //Return array of keys
console.log(Object.values(tinderUser));   //Return array of values at this keys
console.log(Object.entries(tinderUser)); //--->all three return arrays
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

console.log("hiiiiiiiiiii")

//destructuing of an object

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//     what key           nameOfKey    object
const {courseInstructor: instructor} = course  //-->destructure

console.log(course.courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",  ---->JSON API
//     "price": "free"
// }

[
    {},  
    {},              //---->JSON API
    {}
]