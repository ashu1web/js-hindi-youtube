const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}
//arrow function always return a promise 
 user.welcomeMessage()
 user.username = "sam"    //Context means value in a scope
 user.welcomeMessage()

 console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
//}

//chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);   --->Can only use inside obj not in fn
// }

const a=function(){
     console.log(this)
}
a()


const chai =() => {
    let username = "hitesh"
    console.log("hiiiii")
    console.log(this)
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach(()=>{})