const persone1={
    name:"mohes",
    age:27,
    place:"coimbatore",
    login(){
        console.log("hii",this.name)
        console.log("you are login")
    },
    logout(){
        console.log("you are log out")
    }
}
const persone2={
    name:"arun",
    age:24,
    place:"coimbatore",
    login(){
        console.log("hii",this.name)
        console.log("you are login")
    },
    logout(){
        console.log("you are log out")
    }
}
console.log(persone1.name)
persone1.login()
persone2.login()