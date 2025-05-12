# JavaScript Oktatás – 4. nap: Feltételek és ciklusok
## Cél:
 Megérteni, hogyan tudunk döntéseket hozni (elágazás) és ismétlődő feladatokat végrehajtani (ismétlés)

0. Intro
„Ma megtanuljuk, hogyan írjunk olyan programokat, amelyek feltételek alapján döntenek, vagy ismétlődő feladatokat hajtanak végre.”

1. Feltételes szerkezetek (Elágazás)

1.1 if / else
```js
const age = 18;

if (age >= 18) {
  console.log('Felnőtt vagy.');
} else {
  console.log('Még nem vagy felnőtt.');
}
```

1.2 if / else if / else
```js
const score = 85;

if (score >= 90) {
  console.log('Kitűnő');
} else if (score >= 60) {
  console.log('Elégséges');
} else {
  console.log('Elégtelen');
}
```

1.3 Logikai operátorokkal kombinálás
```js
const age = 20;
const hasID = true;

if (age >= 18 && hasID) {
  console.log('Beléphetsz.');
}
```

2. switch szerkezet
```js
const day = 'hétfő';

switch (day) {
  case 'hétfő':
    console.log('Hét eleje');
    break;
  case 'péntek':
    console.log('Hét vége');
    break;
  default:
    console.log('Valamilyen más nap');
}
```
Tipp: Mindig használjunk break-et!

3. Ciklusok
3.1 for ciklus
```js
for (let i = 0; i < 5; i++) {
  console.log('Szám:', i);
}
```

3.2 while ciklus
```js
let i = 0;
while (i < 5) {
  console.log('Szám:', i);
  i++;
}
```

3.3 do…while
```js
let i = 0;
do {
  console.log('Szám:', i);
  i++;
} while (i < 5);
```

4. Ciklus tömbbel (Array)
4.1 for…of
```js
const fruits = ['alma', 'banán', 'narancs'];

for (let fruit of fruits) {
  console.log(fruit);
}
```

4.2 forEach
```js
fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

4.3 break & continue használata
```js
for (let fruit of fruits) {
  if (fruit === 'banán') {
    continue; // kihagyja a banánt
  }
  console.log(fruit);
}
```

5. Gyakorlat
Feladat 1:
Írj programot, amely eldönti egy számról, hogy negatív, nulla vagy pozitív.

```js
const num = -5;

if (num > 0) {
  console.log('Pozitív');
} else if (num < 0) {
  console.log('Negatív');
} else {
  console.log('Nulla');
}
```

Feladat 2:
Írj ciklust, amely kiírja a számokat 1-től 10-ig.

```js
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
```

Feladat 3 (opcionális):
Írj programot, amely egy tömb elemein végigmegy, és csak a 4 karakternél hosszabb szavakat írja ki.

```js
const words = ['alma', 'barack', 'körte', 'szilva'];

for (let word of words) {
  if (word.length > 4) {
    console.log(word);
  }
}
```

6. Videó végén
Összefoglalás: Ma megtanultuk a programok irányításának alapjait (elágazás, ciklus)

Következő nap: Függvények (function declaration, expression, arrow function)

Extra tipp
Ternary operator (egysoros if/else)

```js
const age = 18;
const message = age >= 18 ? 'Beléphetsz' : 'Nem léphetsz be';
console.log(message);
```

Nested loops bemutatása

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 2; j++) {
    console.log(i=${i}, j=${j});
  }
}
```
