 // arrey creation
    var a=[10,20,30,40]
    console.log(a)
    console.log(typeof a)
    console.log(a.length)
    console.log(a[1])//intex
    

var b=new Array(50,40,30,20)
console.log (b)

var c=[100]
console.log(c)

var d=new Array(100)
console.log(d)

// looping in array
var a=[10,20,30,40]
for(i=0;i<a.length;i++)
    console.log("a["+i+"]="+a[i])

a[0]=100 //inserting
delete a[2] //deleteing
console.log(a)
