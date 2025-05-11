//console.log(`Hello JavaScript World!`);

// var példa kerülendő
var age = 30;
age = 31;
var age = 32; // újradeklaráció OK

function example() {
    console.log(a); // undefined (hoisting)
    var a = 5;
    console.log(a); // 5
  }
example();

if (true) {
  var x = 10;
}
console.log(x); // 10 (rossz gyakorlat)

// let példa (ajánlott)
let name = 'Anna';
name = 'Béla';
//let name = 'Cecil'; // Hiba: újradeklaráció nem engedett

let count = 1;
count = 2;
console.log(count); // 2

if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ❌ ReferenceError

console.log(a); // ❌ ReferenceError
let a = 5;

let z = 1;
//let z = 2; // ❌ SyntaxError

// const példa
const birthYear = 1995;
//birthYear = 1996; // Hiba: nem módosítható

const PI = 3.14;
PI = 3.14159; // ❌ TypeError

const person = { name: 'Alice' };
person.name = 'Bob'; // ✅ OK
console.log(person.name); // Bob

const arr = [1, 2, 3];
arr.push(4); // ✅ OK
console.log(arr); // [1,2,3,4]

function demo() {
  if (true) {
    var v = 1;
    let l = 2;
    const c = 3;
  }
  console.log(v); // 1 (rossz)
  console.log(l); // ❌ Error
  console.log(c); // ❌ Error
}
demo();



 