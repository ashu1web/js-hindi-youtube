const promisesOne=new Promise(function(resolve,reject){
    //DO an async task
    //DB calls,crypotgraphy,network
    setTimeout(function(){
        console.log('Async task is completed')
        resolve()                  //->to call promiseOne.then
    },1000)
}
)
promisesOne.then(function(){      //--->Consumption of promise
console.log("Promise consumed")  //--->.then ke andar ek function milta h
})



new Promise((resolve,reject)=>{ 
     setTimeout(function(){
       console.log('Async task 2 is completed')
        resolve()
    },4000)
}).then(()=>{
   console.log("Async task 2 is completed")    
})



const promiseThree=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
/*promiseThree.then(function(user){                               //The user has resolve value {}---->Method 1
    console.log(user)
})*/

promiseThree.then((res)=> console.log("resolve--->",res) )       //Resolve has the value{}----------->Method2
 


const promiseFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(error){
            resolve({username:"chai",password:"123"})
        }
        else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})
promiseFour
.then((user) => {
   console.log(user);
   return user.username
}).then((username) => {
   console.log(username);
}).catch(function(error){
   console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))




const promiseFive = new Promise(function(resolve, reject){
   setTimeout(function(){
       let error = true
       if (!error) {
           resolve({username: "javascript", password: "123"})
       } else {
           reject('ERROR: JS went wrong')
       }
   }, 1000)
});
async function consumePromiseFive(){
   try {
       const response = await promiseFive
       console.log(response);
   } catch (error) {
       console.log(error);
   }
}
consumePromiseFive()




// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary') //fetch is a promise
.then((response) => {
   return response.json()
})
.then((data) => {
   console.log(data);
})
.catch((error) => (console.log(error)))

// promise.all
/*
=======
.catch((error) => console.log(error))
>>>>>>> cea0d84d6ec14f18b90484e31553f009ea0e0ae0

                                 PROMISES
A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
It acts as a placeholder for a value that is initially unknown but will be available in the future.


                                 RESOLVE
In JavaScript, resolve is a function used within a Promise to indicate that the asynchronous operation has completed successfully 
and to pass the resulting value. When resolve(value) is called, the promise transitions from pending to fulfilled, and the .then() method receives the resolved value.

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched successfully!");
    }, 2000);
});

promise.then(result => console.log(result));

                                OUTPUT
Data fetched successfully!

*/