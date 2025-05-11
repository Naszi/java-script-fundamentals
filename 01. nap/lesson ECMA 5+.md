
# 📚 ECMAScript verziók röviden (ES5 → ES6+)

> **Nagyon jó témaválasztás** — ez egy kulcsfontosságú áttekintés JavaScript és TypeScript tanfolyamhoz is.  
> Tökéletes akár videóhoz, akár GitHub .md fájlba!

---

## ✅ ES5 (2009) – "Modern JS alapok"

- `"use strict";`
- Array metódusok: `.forEach()`, `.map()`, `.filter()`, `.reduce()`
- JSON támogatás: `JSON.parse()`, `JSON.stringify()`
- `Object.create()`, `Object.defineProperty()`

---

## 🚀 ES6 / ES2015 (2015) – "A nagy ugrás"

- **`let`**, **`const`** kulcsszavak (blokk-szintű változók)
- **Arrow function**: `() => {}`
- **Template literal**: `` `Hello ${name}` ``
- **Destructuring (szétszedés)**

```js
const { name, age } = person;
```

- **Default paraméterek**

```js
function sum(a = 0, b = 0) { return a + b; }
```

- **Rest / Spread operator**: `...args`
- **Classes**

```js
class Person {}
```

- **Modules**: `import / export`
- **Promises**
- **Map**, **Set**
- **Symbol**

---

## ⚡ ES7 / ES2016

- **Array.includes()**

```js
[1, 2, 3].includes(2); // true
```

- **Exponentiation operator**

```js
2 ** 3; // 8
```

---

## ⚡ ES8 / ES2017

- **`async` / `await`**
- **Object.entries()**, **Object.values()**
- **String padding**: `padStart()`, `padEnd()`
- **Trailing commas**

---

## ⚡ ES9 / ES2018

- **Rest/Spread objektumokban**

```js
const { a, ...rest } = obj;
```

- **Promise.finally()**
- **Regex fejlesztések**: Lookbehind, s (dotAll)

---

## ⚡ ES10 / ES2019

- **Array.flat()**, **Array.flatMap()**
- **Object.fromEntries()**
- **Optional catch binding (catch nélküli paraméter)**

---

## ⚡ ES11 / ES2020

- **Optional chaining** `?.`

```js
user?.address?.city;
```

- **Nullish coalescing** `??`

```js
value ?? 'default';
```

- **BigInt**
- **Promise.allSettled()**
- **globalThis**

---

## ⚡ ES12 / ES2021

- **String.replaceAll()**
- **Logical assignment operators**

```js
a ||= b;
a &&= b;
a ??= b;
```

- **Promise.any()**
- **Numeric separators**

```js
1_000_000;
```

---

## ⚡ ES13 / ES2022

- **Class fields & private methods**
- **Array.at()**

```js
arr.at(-1); // utolsó elem
```

- **Top-level await (module szinten)**

---

## ⚡ ES14 / ES2023

- **Array.findLast()**, **Array.findLastIndex()**
- **Hashbang** (`#!/usr/bin/env node`)
- **Symbol.asyncDispose**
- **RegExp v (unicode property escapes)**

---

## 📌 Főbb újítások (gyors emlékeztető)

| Verzió | Főbb újítások                       |
|--------|--------------------------------------|
| ES5    | `strict`, Array metódusok, JSON     |
| ES6    | `let`, arrow fn, class, modules     |
| ES7    | `.includes()`, `**`                 |
| ES8    | `async/await`, Object.values()      |
| ES9    | Rest/spread obj, Promise.finally()  |
| ES10   | `.flat()`, Object.fromEntries()     |
| ES11   | `?.`, `??`, BigInt, allSettled()    |
| ES12   | replaceAll(), Promise.any()         |
| ES13   | at(), top-level await               |
| ES14   | findLast(), hashbang, asyncDispose  |

---

## ✨ Záró tipp

> **TypeScript** automatikusan támogatja a legtöbb új ES funkciót  
> *(ha a `target` engedélyezve van a `tsconfig.json`-ben).*
