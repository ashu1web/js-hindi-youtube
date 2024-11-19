const promisesOne=new Promise(function(resolve,reject){
    //DO an async task
    //DB calls,crypotgraphy,network
    setTimeout(function(){
       // console.log('Async task is completed')
        resolve()
    },1000)
}
)
promisesOne.then(function(){     //--->Consumption of promise
   // console.log("Promise consumed")  //--->.then ke andar ek function milta h
})

new Promise((resolve,reject)=>{
     setTimeout(function(){
       console.log('Async task 2 is completed')
        resolve()
    },1000)
}).then(()=>{
   console.log("Async task 2 is completed")    
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promisFour=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error=true
        if(!error){
            resolve({username:"chai",password:"123"})
        }
        else{
            reject('ERROR:Spmething went wrong')
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
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro. 