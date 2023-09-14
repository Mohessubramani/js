let cont={car:"bmw",modal:"zr",color:"red"}
console.log("car modal is"+ cont.modal)

const person = {
    firstName: "John",
    lastName : "Doe",
    id     : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person.fullName)
console.log(person.id)
  