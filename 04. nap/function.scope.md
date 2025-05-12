
# JavaScript Oktatás – 5. nap: Függvények és Scope

## Cél
Megérteni, hogyan tudunk kódblokkokat újra felhasználni (függvényekkel), és hogyan működnek a változók láthatósági szabályai (scope).

## Videó forgatókönyv

### 0. Intro (1 perc)
„Ma megtanuljuk, hogyan írjunk saját függvényeket, hogyan adjunk át adatokat nekik, és mi történik a változókkal különböző kódrészekben.”

---

## 1. Függvények alapjai (Functions)

### 1.1 Függvény deklarálása és meghívása
```js
function greet() {
  console.log('Hello, világ!');
}

greet(); // meghívás
```

### 1.2 Paraméterek és visszatérés
```js
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Anna'); // Hello, Anna!

function add(a, b) {
  return a + b;
}

const result = add(3, 5);
console.log(result); // 8
```

### 1.3 Default paraméterek
```js
function greet(name = 'Ismeretlen') {
  console.log(`Hello, ${name}!`);
}

greet(); // Hello, Ismeretlen!
```

---

## 2. Függvény típusok

### 2.1 Function expression
```js
const greet = function(name) {
  console.log(`Hello, ${name}!`);
};

greet('Béla');
```

### 2.2 Arrow function (nyílfüggvény)
```js
const greet = (name) => {
  console.log(`Hello, ${name}!`);
};

const add = (a, b) => a + b;

console.log(add(4, 7)); // 11
```

Rövidített szintaxis, ha 1 paraméter:
```js
const greet = name => console.log(`Hello, ${name}!`);
```

---

## 3. Scope (Változók hatóköre)

### 3.1 Lokális és globális változók
```js
const globalVar = 'Globális';

function demo() {
  const localVar = 'Lokális';
  console.log(globalVar); // elérhető
  console.log(localVar);  // elérhető
}

demo();
console.log(globalVar); // elérhető
// console.log(localVar); // Hiba
```

### 3.2 Block scope (let / const)
```js
if (true) {
  let x = 10;
  const y = 20;
}

// console.log(x); // Hiba
```

### 3.3 Function scope vs Block scope különbség
```js
function test() {
  var a = 5;
  let b = 10;
  const c = 15;
}

// console.log(a, b, c); // Hibák
```

### 3.4 Lexical scope és closure alap
```js
function outer() {
  const outerVar = 'Külső';

  function inner() {
    console.log(outerVar);
  }

  inner();
}

outer();
```

---

## 4. Gyakorlatok

### Feladat 1: Összeadás függvény
```js
function sum(a, b) {
  return a + b;
}

console.log(sum(4, 6)); // 10
```

### Feladat 2: Páros/Páratlan meghatározás
```js
function isEven(num) {
  return num % 2 === 0 ? 'Páros' : 'Páratlan';
}

console.log(isEven(7)); // Páratlan
```

### Feladat 3 (opcionális): Több név köszöntése
```js
function greetNames(names) {
  for (let name of names) {
    console.log(`Szia, ${name}!`);
  }
}

greetNames(['Anna', 'Béla', 'Cecil']);
```

---

## 5. Extra tippek (haladó)

### 5.1 Paraméter destructuring
```js
function displayUser({name, age}) {
  console.log(`${name} (${age})`);
}

const user = { name: 'Anna', age: 25 };
displayUser(user);
```

### 5.2 Arrow function és `this` viselkedése (előretekintés)

---

## 6. Videó végén (1 perc)
Összefoglalás: Ma megtanultuk a függvények létrehozását, paraméterek kezelését és a változók láthatóságát.

---

## Következő nap
Objektumorientált JS alapjai — Object methods, `this` kulcsszó, constructor functions

---

## Eszközök és mellékletek

- GitHub repo: `day05-functions-scope`
- Cheatsheet PDF: „Függvény típusok és Scope gyorssegédlet”
- Használt kódok linkje: Replit / Codesandbox

---

## Extra gyakorlat (haladó)

### Számológép függvények (összeg, szorzat stb.)
```js
const add = (a, b) => a + b;
const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => b !== 0 ? a / b : 'Hiba: Nullával osztás';

console.log(add(5, 3));      // 8
console.log(multiply(5, 3)); // 15
console.log(subtract(5, 3)); // 2
console.log(divide(5, 0));   // Hiba
```

### Feladat: Arrow function-ökkel kalkulátor bővítés
- Írj további műveleteket (hatványozás, maradékos osztás)
