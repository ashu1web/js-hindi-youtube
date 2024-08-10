const promisesOne=new Promise(function(resolve,reject){
    //DO an async task
    //DB calls,crypotgraphy,network
    setTimeout(function(){
       // console.log('Async task is completed')
        resolve()
    },1000)
}
)
promisesOne.then(function(){
   // console.log("Promise consumed")
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
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})
