
# JavaScript Oktatás – 3. nap  
## Tömbök és Objektumok (Arrays & Objects)

**Cél:** Megérteni a tömbök és objektumok létrehozását, elérését, módosítását, valamint a legfontosabb metódusaikat.

---

## 🎥 Videó forgatókönyv

### 0. Intro (1 perc)

> „Ma megtanuljuk kezelni a JavaScript két legfontosabb összetett adattípusát: a tömböket és az objektumokat.”

---

## 1️⃣ Tömbök (Array)

### Létrehozás és hozzáférés

```js
const colors = ['red', 'green', 'blue'];

console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors.length); // 3
```

### Módosítás

```js
colors[1] = 'yellow';
console.log(colors); // ['red', 'yellow', 'blue']
```

### Elem hozzáadás / eltávolítás

```js
colors.push('purple');   // hozzáadás végére
colors.pop();            // eltávolítás végéről
colors.unshift('pink');  // hozzáadás elejére
colors.shift();          // eltávolítás elejéről
```

### Iteráció (bejárás)

```js
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for...of
for (let color of colors) {
  console.log(color);
}
```

### Hasznos metódusok

```js
console.log(colors.includes('red')); // true
console.log(colors.indexOf('blue')); // 2
```

---

## 2️⃣ Objektumok (Object)

### Létrehozás és hozzáférés

```js
const user = {
  name: 'Anna',
  age: 25,
  isStudent: true
};

console.log(user.name);    // Anna
console.log(user['age']);  // 25
```

### Módosítás és új property

```js
user.age = 26;
user.city = 'Budapest';
```

### Törlés property

```js
delete user.isStudent;
```

### Iteráció objektumon (for...in)

```js
for (let key in user) {
  console.log(key, user[key]);
}
```

---

## 3️⃣ Objektumok és tömbök kombinálása

### Tömb objektumokkal

```js
const users = [
  { name: 'Anna', age: 25 },
  { name: 'Béla', age: 30 }
];

console.log(users[0].name); // Anna
```

### Objektum tömbbel

```js
const classRoom = {
  teacher: 'Mrs. Smith',
  students: ['Anna', 'Béla', 'Cecil']
};

console.log(classRoom.students[1]); // Béla
```

---

## 4️⃣ Gyakorlat

### Feladat 1  
**Hozz létre egy tömböt kedvenc könyveid címeivel. Írd ki őket egyenként.**

```js
const books = ['1984', 'Brave New World', 'Sapiens'];

for (let book of books) {
  console.log(book);
}
```

### Feladat 2  
**Készíts egy objektumot a kedvenc filmed adataival (title, year, director), majd írd ki ezeket.**

```js
const movie = {
  title: 'Inception',
  year: 2010,
  director: 'Christopher Nolan'
};

console.log(`${movie.title} (${movie.year}), directed by ${movie.director}`);
```

### Feladat 3 (opcionális)  
**Készíts egy tömböt több film objektummal, és írd ki mindegyik címét.**

```js
const movies = [
  { title: 'Inception', year: 2010 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Dunkirk', year: 2017 }
];

for (let film of movies) {
  console.log(film.title);
}
```

---

## 5️⃣ Videó végén (1 perc)

> Összefoglalás: Ma megtanultuk, hogyan kezeljünk tömböket, objektumokat és hogyan kombináljuk őket.

➡️ **Következő nap:** Feltételes szerkezetek (if, switch) és ciklusok (for, while)

---

## 🛠️ Eszközök és mellékletek

- GitHub repo: **day03-arrays-objects**
- Cheatsheet PDF: **„Tömb és Objektum metódusok gyorssegédlet”**
- Használt kódok linkje: **Replit / Codesandbox**

---

## ✨ Extra tipp (haladó)

### Array.isArray() használat

```js
console.log(Array.isArray(colors)); // true
```

### Object.keys(), Object.values(), Object.entries()

```js
console.log(Object.keys(user));   // ['name', 'age', 'city']
console.log(Object.values(user)); // ['Anna', 26, 'Budapest']
console.log(Object.entries(user)); // [['name', 'Anna'], ['age', 26], ['city', 'Budapest']]
```

---

## 🏆 Haladó feladat  
**Készíts egy "felhasználói adatbázist": tömb + objektumok**

```js
const userDB = [
  { name: 'Anna', age: 25, city: 'Budapest' },
  { name: 'Béla', age: 30, city: 'Debrecen' },
  { name: 'Cecil', age: 22, city: 'Szeged' }
];

for (let user of userDB) {
  console.log(`${user.name} (${user.age}) - ${user.city}`);
}
```
