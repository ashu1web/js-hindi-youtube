const user={
    name:"A",
    rollno:10,
    signedInd:"true",

    getUserDetails:function (){
         //console.log("Got it")
         //console.log(`Username:${this.name}`)

    }
}

//console.log(user.name)
//console.log(user.getUserDetails())

                                                                  /* constructor */
function z(a, b) {
    this.a = a; // `this.a` becomes a property of the new object
    this.b = b; // `this.b` becomes a property of the new object
  }
  
  const obj = new z(5, 10);
  console.log(obj.a); // Output: 5
  console.log(obj.b); // Output: 10

  const obj2=new z(4,8)
  console.log(obj2.a); // Output: 4
  console.log(obj2.b); // Output: 8
  
 /* Why this is Needed Here
this attaches properties to the object being created.
Without this, a and b would not be stored on the object. They would only exist temporarily inside the function.
So this allows the function z to act like a blueprint for creating objects with properties a and b.


*/

                             /*Contructor is also used to not overwrite the properties inside the object or method  ==line 22 to 28 */


                             /*new 'keyword' steps by chaicode */
/*
1)As soon as you write new 'Keyword' an empty object is created or instance
2)Now bcoz of new a constructor is called and its pack the argument
3)this keyword inject the argument
4)we get the info  
*/



                                                              /*this/*
/*
1)Imagine you have a toy box, and inside this box are different toys like a car and a doll. Now, each toy can do different things: the car can zoom, and the doll can wave. 
Think of this as a magic word that each toy uses to know who it is and what it can do when it's inside the toy box.
Here’s how it works:
Pretend the Car Says "this": When the car says this, it’s actually talking about itself. 
So, if the car has a function called zoom, it can say something like "this car is zooming!" and know it’s talking about itself.

const car = {
  name: "Car",
  zoom: function() {
    console.log("This is " + this.name + " zooming!");
  }
};
car.zoom(); // "This is Car zooming!"

2)If We Move the Function to the Doll: 
If we put the same zoom function inside the doll, and the doll says this, it will be talking about the doll instead!
const doll = {
  name: "Doll",
  zoom: car.zoom
};
doll.zoom(); // "This is Doll zooming!"

3) Why This Is Useful: Using this helps each toy know who it is, even if it uses the same function. The function can work for both the car and the doll without changing it.

So, this is like the toy saying, "I know who I am!"
*/