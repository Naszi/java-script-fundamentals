
# 📚 var vs let vs const – Részletes összehasonlítás

## Összefoglaló táblázat

| Tulajdonság | `var` | `let` | `const` |
|-------------|-------|-------|---------|
| Bevezetve   | ES5 (1995) | ES6 (2015) | ES6 (2015) |
| Scope | Function scope | Block scope | Block scope |
| Újradeklarálható ugyanabban a scope-ban? | ✅ Igen | ❌ Nem | ❌ Nem |
| Újraértékelhető? | ✅ Igen | ✅ Igen | ❌ Nem (de objektum mutató módosítható) |
| Hoisting | ✅ Igen (undefined-ként inicializálva) | ✅ Igen (de **TDZ**) | ✅ Igen (de **TDZ**) |
| Modern ajánlás | ❌ Nem ajánlott | ✅ Igen (ha érték változik) | ✅ Igen (ha érték nem változik) |

---

## 🛠️ Alap definíciók

- **Scope** – Hol elérhető a változó (blokkon belül vagy függvényen belül?)
- **Hoisting** – A változó deklaráció „felfelé emelése” a scope tetejére.
- **TDZ (Temporal Dead Zone)** – A let/const változó nem használható a deklaráció előtt (hiba lesz).

---

## 🥇 var – Régi, kerülendő

```js
function example() {
  console.log(a); // undefined (hoisting)
  var a = 5;
  console.log(a); // 5
}
example();
```

```js
if (true) {
  var x = 10;
}
console.log(x); // 10 (rossz gyakorlat)
```

---

## 🥈 let – Modern, változó értékekhez

```js
let count = 1;
count = 2;
console.log(count); // 2
```

```js
if (true) {
  let y = 20;
  console.log(y); // 20
}
console.log(y); // ❌ ReferenceError
```

```js
console.log(a); // ❌ ReferenceError
let a = 5;
```

```js
let z = 1;
let z = 2; // ❌ SyntaxError
```

---

## 🥉 const – Változatlan referencia

```js
const PI = 3.14;
PI = 3.14159; // ❌ TypeError
```

```js
const person = { name: 'Alice' };
person.name = 'Bob'; // ✅ OK
console.log(person.name); // Bob
```

```js
const arr = [1, 2, 3];
arr.push(4); // ✅ OK
console.log(arr); // [1,2,3,4]
```

---

## ✨ Mikor melyiket?

✅ **const** – mindig, ha nem kell új érték  
✅ **let** – ha érték változni fog  
❌ **var** – NE HASZNÁLD (elavult)

```js
const MAX_USERS = 100;
let currentUsers = 0;
currentUsers++;
```

---

## ⚡ Gyakorlati példa összehasonlítás

```js
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
```

---

## 💡 Záró tipp

> Használj **const**-ot alapértelmezettként, és csak akkor válts **let**-re, ha tényleg kell változtatni.  
> **Var-t teljesen kerüld modern kódban!**
