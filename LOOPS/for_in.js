const arr=[1,2,3,4,5,"apple"];
// for(let x in arr){
//     console. log (arr[x]);
// }

 arr.forEach(myFunction);
 function myFunction(value,index,arrey){
    console.log ("value-"+value);
    console.log ("index-"+index);
    console.log("arrey-"+arrey)
    console.log("\n");
 }
 const obj={1:"a",2:"b"}
 for (let x in obj){
     console.log(x)
     console.log(obj[x]);
     console.log("\n");
 }

 var a=[];
 a=[5]
 for (let m in a){
   console.log(m)
 }