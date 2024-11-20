const user = {
  username: "hitesh",
  loginCount: 8,
  signedIn: true,

  getUserDetails: function(){
      console.log("Got user details from database");
      console.log(`Username: ${this.username}`);
      console.log(this);
  }

}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);


function User(username, loginCount, isLoggedIn){
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn

  this.greeting = function(){
      console.log(`Welcome ${this.username}`);

  }

  return this
}

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

//this keyword
/*
function Toy(name) {
  this.name = name; // Refers to the new toy object
}
const myToy = new Toy("Teddy");
console.log(myToy.name); // Output: "Teddy"


What's happening in your code:
The Function Parameter (name): When you call new Toy("Teddy"), "Teddy" is passed to the function as an argument. Inside the function, name is just a local variable—it only exists inside the function while it's running.

The Purpose of this: The goal of the constructor function is to create a new object (like myToy) and attach properties to it. this refers to the specific object being created when you use the new keyword.

Assigning the Name to the Object:

Without this, the name variable would only exist temporarily inside the function.
By using this.name, you're saying:
"Take the value of name and store it as a property of the object being created."

This makes the name available as part of the myToy object, so you can access it later using myToy.name.
*/