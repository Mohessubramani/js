//object
            const fun1={
                name:"mohes",
                age:27,
                place:'cbe'

            }
            const fun2={
                name:"arun",
                age:20,
                place:"cbe"
            }
// with out parameter
            function myfunction(){
                console.log(fun1.name)
                console.log(fun1.age)
            // with parameter
            function  function2(name,age,place){
                console.log(name)
                console.log(age)
                console.log(place)

             }
             function2(fun2.name,fun2.age,fun2.place)
            }
            myfunction()

//direct object called in parameter            
      function function3(fun1){

        console.log(fun1.name)
      }
function3(fun1)

//REST PARAMETERS
function function4(...arg){
    console.log(arg)

}
function4(fun1.name,fun2.name)