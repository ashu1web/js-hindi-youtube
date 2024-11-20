/*class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}dabc`
    }
    changeUsername(name){
        return `${this.username=name}`
}

}

const chai=new User("chai","abc@gmailo.com","123")

console.log(chai.encryptPassword())
console.log(chai.changeUsername("Me"))
*/


//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}dabc`
}
User.prototype.changeUsername=function(name){
    return `${this.username=name}`
}

const chai=new User("chai","abc@gmailo.com","123")

console.log(chai.encryptPassword())
console.log(chai.changeUsername("Me"))