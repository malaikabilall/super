class Person{
    name:string
    gender:string
    constructor(n:string,g:string){
        this.name=n;
        this.gender=g;
    }
    welcome(){
        console.log(`hello,how are you`)
    }
}

class Student extends Person{
    rollNum:number
    constructor(n:string,g:string,r:number){
        super(n,g)
        this.rollNum=r;
    }
    welcome(){
        console.log(`hello ${this.name}`)
    }
}

class Teacher extends Person{
    email:string
    constructor(n:string,g:string,e:string){
        super(n,g)
        this.email=e
    }
    welcome():void{
        super.welcome()
    }
}

let t = new Teacher ("Malaika","M","abc@abc.com")

console.log(t.welcome())
    


