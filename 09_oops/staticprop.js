class User{
    constructor(username,password,email){
         this.username=username
         this.password=password
         this.email=email
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }

     static Password(){
       return `${this.password}`
    }
}

const user=new User("abc","123","me@gmail.com")

//console.log(user.Password())   =>static do not allow user obj to access Password fn


class Teacher extends User{
    constructor(username,password,email){
        super(username,password)
        this.email=email
    }
}

const teacher=new Teacher("def","456","iphone@gmail.com")


console.log(user)
console.log(teacher)
