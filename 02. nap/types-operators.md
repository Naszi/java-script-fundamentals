
# 📆 JavaScript Oktatás – Nap 2  
**Téma:** Alap típusok és operátorok

🎯 **Cél:** Megérteni a primitív és összetett típusokat, és helyesen használni az alapvető operátorokat.  
*(Ez TypeScript előtt nélkülözhetetlen alap!)*

---

### **0️⃣ Intro**

> „Ma megtanuljuk, milyen adatokat tudunk kezelni JavaScript-ben, és hogyan tudunk velük műveleteket végezni.”

---

## 1️⃣ Primitív típusok

| **Típus** | **Példa** | **typeof eredmény** |
|-----------|-----------|---------------------|
| Number | `42`, `3.14`, `NaN`, `Infinity` | `"number"` |
| String | `'Hello'`, `"world"` | `"string"` |
| Boolean | `true`, `false` | `"boolean"` |
| Undefined | `let x;` | `"undefined"` |
| Null | `null` | `"object"` *(figyelem!)* |
| Symbol | `Symbol('id')` | `"symbol"` |
| BigInt | `9007199254740991n` | `"bigint"` |

### 🛠️ Példa kód

```js
const age = 30; // Number
const name = 'Anna'; // String
const isStudent = true; // Boolean
let job; // Undefined
const empty = null; // Null (szándékos)
const uniqueId = Symbol('id'); // Symbol
const bigNumber = 9007199254740991n; // BigInt

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof job);
console.log(typeof empty); // "object"
console.log(typeof uniqueId);
console.log(typeof bigNumber);
```

> ⚠️ **Figyelmeztetés:**  
> `typeof null === "object"` → történelmi bug, ne zavarjon meg.

---

## 2️⃣ Összetett típusok

### **Object**

```js
const user = {
  name: 'Anna',
  age: 25
};
```

### **Array (Tömb)**

```js
const colors = ['red', 'green', 'blue'];
```

### 🔍 typeof vizsgálat

```js
typeof user; // "object"
typeof colors; // "object"
Array.isArray(colors); // true
```

> **Megjegyzés:** Tömb is `object`, de `Array.isArray()` segítségével külön tudjuk választani.

---

## 3️⃣ Típuskonverzió és truthy/falsy

### ⚙️ Automatikus konverziók

```js
console.log('5' + 3); // "53"
console.log('5' - 3); // 2
console.log(true + 1); // 2
console.log(false + 1); // 1
```

### ✅ Truthy / Falsy értékek

| **Falsy érték** | **Értelmezése** |
|-----------------|-----------------|
| `false` | false |
| `0` | false |
| `''` *(üres string)* | false |
| `null` | false |
| `undefined` | false |
| `NaN` | false |

> Minden más → **truthy**

#### Példa

```js
if ('hello') console.log('truthy'); // truthy
if (0) console.log('nem fut le'); // falsy
```

---

## 4️⃣ Operátorok

### ➕ **Aritmetikai operátorok**

```js
const a = 10;
const b = 3;

console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.333...
console.log(a % b); // 1
console.log(a ** b); // 1000 (hatványozás)
```

---

### ⚖️ **Összehasonlító operátorok**

```js
console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 >= 5); // true
```

### ❗ **Egyenlőség**

```js
console.log(5 == '5'); // true  (laza egyenlőség)
console.log(5 === '5'); // false (szigorú egyenlőség)
console.log(null == undefined); // true
console.log(null === undefined); // false
```

> ✅ **Szabály:** Mindig `===` használd! (szigorú egyenlőség)

---

### ⚙️ **Logikai operátorok**

```js
console.log(true && false); // false (ÉS)
console.log(true || false); // true (VAGY)
console.log(!true); // false (negáció)
```

---

## 5️⃣ Gyakorlat

### ✏️ **Feladat 1: User adatok**

```js
const name = 'Anna';
const age = 25;
const isStudent = true;

console.log(`${name} is ${age} years old and is a student: ${isStudent}`);
```

---

### ✏️ **Feladat 2 (opcionális): Páros/páratlan**

```js
function isEven(number) {
  return number % 2 === 0;
}

console.log(isEven(4)); // true
console.log(isEven(5)); // false
```

---

## 🎬 Videó vége

> **Összefoglalás:**  
> Ma megtanultuk, milyen típusok vannak JS-ben és hogyan vizsgáljuk őket.

**Következő nap:** Tömbök és Objektumok részletesen

---

## 🌟 Haladó ötletek

### 🔹 typeof vs Array.isArray() különbség

```js
const list = [1, 2, 3];
const user = { name: 'Anna' };

console.log(typeof list); // "object"
console.log(Array.isArray(list)); // true
console.log(Array.isArray(user)); // false
```

> **Összefoglalás:**  
> `typeof` csak annyit mond, hogy "object", de `Array.isArray()` tudja megmondani, hogy tényleg tömb-e.

---

### 🔹 isNaN() használat bemutatása

```js
console.log(isNaN('hello')); // true (nem szám)
console.log(isNaN(42)); // false
console.log(isNaN('42')); // false (string → szám konverzió)

console.log(Number.isNaN('hello')); // false
console.log(Number.isNaN(NaN)); // true
```

> **Fontos:**  
> `isNaN` kicsit trükkös → sokszor jobb a `Number.isNaN` használata!