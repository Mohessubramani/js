/*String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()
string indexOf()
string lastindexOf()
string search()*/


//1.slice and substring and substr 

let text="apple, banana,kiwi";
let part=text.slice(7);
let part2=text.slice(7,13);
let part3=text.slice(-4,-1);
console.log(part);
console.log(part2);
console.log(part3);
console.log(text.substring(0,5))//substring  not use negative indexing
console.log(text.substr(0,12))

//2.length
let fruit="apple";
console.log(fruit.length)

//3 replace
let fruit2="apple and orange and apple";
let fruit3=fruit2.replace("orange","banana");
let fruit4=fruit2.replace(/apple/g,"kiwi")
console.log(fruit3);
console.log(fruit4);

//4 replace All
let rep ="I love Cats. Cats are very easy to love. Cats are very popular.";
let repall=rep.replaceAll("Cats","Dogs")
console.log(repall)

// 5.Upper Case and Lower Case
let upp='hellow';
let upp2=upp.toUpperCase();
let upp3=upp2.toLowerCase()
console.log(upp2);
console.log(upp3)

//6.concat
let text1 = "Hello";
let text2 = "World!";
let text3 = text1.concat(" ",text2);
console.log(text3)

//7.trim
let text4 = "      Hello World!      ";
let text5 = text1.trim();
console.log(text5)


//8.split
 /* text.split(",")     Split on commas
  text.split(" ")     Split on spaces
  text.split("|")    Split on pipe*/

let spl = "Hello";
const myArr = spl.split("");
console.log(myArr)

let text6 = "a,b,c,d,e,f";
const myArray = text6.split(",");
console.log(myArray)

//9.indexOf and lastindexof and search

let s1="welcome to javascript "
console.log(s1.indexOf("e"))
console.log(s1.lastIndexOf("e"))
console.log(s1.search("o"))

//charAt and charcodeAt

console.log(s1.charAt(3))
console.log(s1.charCodeAt(5))

//string in for loop

for (i=0;i<s1.length;i++);
  {
    console.log(s1[i]);
}