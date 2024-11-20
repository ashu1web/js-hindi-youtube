function userName(username){
         this.username=username
} 

function createuser(username,email,id){
             userName.call(this,username)             //call holds the context of above UserName fn values after it execution
             this.email=email
             this.id=id
}


const chai=new createuser("a","abc@gmail.com","2")

console.log(chai)