class User{//base class or parent clss
    static numberOfUser=0
    constructor(name,age){
        // instance variable
        this.name=name;
        this.age=age;
        User.numberOfUser++;
    }
    login(){//non static method
        console.log("hii",this.name)
        console.log("you are login")
    }
    logout(){
        console.log("you are log out")
    }
    static displyTotalUser(){ //static method
        console.log("total number of users is "+User.numberOfUser)
    }
}

let userone=new User("mohes",26)
let usertwo=new User("arun",20)
userone.login()

//console.log("Number of users",User.numberOfUser)
User.displyTotalUser()

//inheritence

class paidUser extends User{//derived class Or sub class or chaild class
    constructor(name,age){
        super(name,age);
        this .storage=100;
        
    }
    massege(){
        console.log("you have thousend gb combleted")
    }
    logout(){// over riding
        console.log("you are log out "+this.name)
        return this
    }

}
let paidUser1=new paidUser("abi",22)
paidUser1.login()
paidUser1.massege()
paidUser1.logout()
console.log(paidUser1.storage)

//chain method

paidUser1.logout().massege()