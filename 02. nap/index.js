/**
 * Primitive type - primitív tipusok
*/
const age = 50; // numbers
const name = 'Szabolcs'; // string
const isStudent = true; // Boolean
let job; // Undefined
const empty = null; // Null, szándékos
const uniqueId = Symbol('id') // Symbol
const bigNumber = 9007199254740991n; // BigInt

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof job);
console.log(typeof empty); // typeof null === "object", történelmi bug
console.log(typeof uniqueId);
console.log(typeof bigNumber);

/**
 * Összetett tipusok
 */
// Object
const user = {
    userName: 'Szabolcs',
    userJob: 'programmer',
    userAge: 50 
};
console.log(user.userName);
user.userName = 'Nagy Szabolcs';
console.log(user.userName);
console.log(`I'm ${user.userName}. I'm ${user.userAge} years old. I'm a ${user.userJob}.`);

// Array
const colors = ['red', 'green', 'blue'];
console.log(colors);
console.log(colors.length);
console.log(colors[0]);
console.log(colors.push('purple'));
console.log(colors);

// typeof vizsgálat
console.log(typeof user); // Object
console.log(typeof colors); // Object
console.log(Array.isArray(colors)); // true

/**
 * Truthy / Falsy értékek
 * alsy értékek: false, 0, '' (üres string), null, undefined, NaN
 * a többi érték az truthy
 */
if ('hello') console.log('truthy'); // Truthy
if (0) console.log('nem fut le'); // Falsy

/**
 * Operátorok
 */
// Aritmetikai operátorok
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000 (hatványozás)

// Összehasonlító operátorok
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
console.log(5 <= 6); // true

// Egyenlőség
console.log(5 == '5'); // true  (laza egyenlőség)
console.log(5 === '5'); // false (szigorú egyenlőség)
console.log(null == undefined); // true
console.log(null === undefined); // false

// Logikai operátorok
console.log(true && false); // false (ÉS)
console.log(true || false); // true (VAGY)
console.log(!true); // false (negáció)

//function isEven(number) {
//    return number % 2 === 0;
//}
const isEven = (number) => number % 2 === 0;
console.log(isEven(4));
console.log(isEven(5));

// typeof vs Array.isArray() különbség
const list = [1, 2, 3];
const classUser = { name: 'Anna' };

console.log(typeof list); // "object"
console.log(Array.isArray(list)); // true
console.log(Array.isArray(classUser)); // false

// isNaN() használat bemutatása
console.log(isNaN('hello')); // true (nem szám)
console.log(isNaN(42)); // false
console.log(isNaN('42')); // false (string → szám konverzió)

console.log(Number.isNaN('hello')); // false
console.log(Number.isNaN(NaN)); // true