class User{
    constructor(username){
        this.username=username 
    }
    
    logMe(){
        console.log(`UserName is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`UserName is ${this.username}`)
    }
}

const chai =new Teacher("abc","abc@gmail.com","123")

console.log(chai)