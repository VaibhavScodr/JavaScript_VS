let value="false";

console.log(typeof value);
let valnum=Number(value);  // in such a way we convert the string to number same we can do this like String
console.log(typeof valnum);
console.log(valnum+1)
console.log(typeof NaN)

let it=0;
let mit=Boolean(it);
console.log(mit); //

let num=23;

let str=String(num)

console.log(typeof str)  //string

// concatination in conactination js starts treating everything as string as soon as it gets and string 
// like "1" + 2 + 2  == 122 and 1+2+"2" == 31 1+"2"+2==122
console.log("1"+2) //12

console.log(1+'2') //12

console.log("1"+2+2) //122

console.log(2+2+"1") //41

console.log(1+"2"+2)

let a=100
++a, a++
console.log(a++)
console.log(a)