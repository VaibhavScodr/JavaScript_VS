//compare of the diffrent datatypes

console.log(Number(Number("2")+1));

// === is strict check with no conversion

console.log('2'===1)

console.log('2'==1)

//non-primivtive type arrays and objects

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

/*
   there are two types of memory like stack memory and heap memory
   Stack(Primitive)<--call by referance  Heap(Non-Primitive)<--call by referance

*/

let x="we";
let y="are";
let z=new String("vaibhav");
console.log(`vowels are ${x} ${y}`); //<-- Advance concatination

console.log(z.charAt(0));
console.log(x.length);
console.log(x.toUpperCase())
console.log(z.toLocaleUpperCase())
console.log(z.indexOf('v'));
let string="leetcode";
console.log(string.charAt(0));

// minus index's starts from last -1 -2 -3 -4 -5 