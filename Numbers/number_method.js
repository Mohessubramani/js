// number object
var x=new Number(10)
var z=new Number(10)
y=10
console.log("type of"+ typeof(x))
console.log("type of"+ y)
console.log("type of"+ typeof(z))

// comparession
console.log(x==y) //its compare the value
console.log(x===y)// its compare the types x=object & y=number
console.log(x==z)// two object can not to compare

//number methods
var n=15
var m=15.12345
console.log(typeof(x))

console.log(n.toExponential(3)) // the value 3 is used digites

console.log(n.toFixed(3))

console.log(m.toPrecision(3))


//number converstion

x="10"
y=Number(x)
console.log(y)
console.log(typeof(y))
console.log(parseInt(x))
z=parseFloat(x)
console.log(typeof(z))

//nuber properties
console.log (Number.MIN_VALUE)
console.log(Number.MAX_VALUE)
console.log(Number.POSITIVE_INFINITY)
console.log(Number.NEGATIVE_INFINITY)
console.log(Number.NaN)
