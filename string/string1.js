// string interpollation(use backtick symbol `)

let fruit1 =`apple's`
console.log(fruit1);

let p_name, city;
p_name="sam"
city ="coimbatore"
console.log(`My name is ${p_name} I am from ${city}`)// dynamic output----My name is sam I am from Coimbatore


//STRINGS

// 1 " " and ' 'in strings
let fruit = "apple"
console.log(fruit);
//let fruit = 'apple'
//console.log(fruit);

//2. Escape character(use \' )
let fruit2='banana\'s';
console.log(fruit2);
let text = "The character \\ is called backslash.";
console.log(text);

// 3.\n-new line, \t-horizontal tabulator,\v-vertical tabulator, \b- back space,\f=form feed,\r-carragre return
let message=" \t my name is \n mohes"
console.log(message);
console.log(message.length)


// 4.typeof
console.log(1+2+3+"hello");//output-----6hello
console.log("hello"+1+2+3+"hello"); //output----- hello123hello
console.log(typeof "apple") //output-------string

