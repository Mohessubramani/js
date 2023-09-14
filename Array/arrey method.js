//join 
a=[10,20,30,40,50]
b=[50,40,20,30,10]
console.log(a.join("mohes"))
console.log(a.join("10"))

//sort
c=["c","a","d","b"]
console.log(c.sort())
console.log(b.sort())

//reverse
console.log(a.reverse())

//pop it will be delete tha last element
d=[100,200,300,400]
console.log (d.pop())
console.log(d)

//shift it will be delete the first element
console.log(d.shift)
console.log(d)

//push it will be join the last element
console.log(d.push("mohes"))
console.log(d)

//unshift it will be join the first elemrnt
console.log(d.unshift("abi"))
console.log (d)

// concat it will be join the to arrays and join the elelments
e=[1,2,3,4,5,6,7]
f=[8,9,10,11,12,13,14,15]
console.log(e.concat(f))
console.log(e.concat("mohes"))

//splice g.splice(starting element,deleteing element,inseart element)

g=[100,200,300,400,500]
console.log(g.splice(1,2,600))
console.log(g)
h=[100,300,400,500,600,700,800]
console.log(h.splice(1,0,200))
console.log(h)
console.log(h.splice(1,0,2000,3000))
console.log(h)

n=[10,20,30,40,50]
console.log(n.splice(1,2))
console.log(n)

//slice  z.slice(start index,stop intex)
z=[500,600,700,100,400,10,40]
console.log(z.slice(0,3))
