/**
 * Array
 */
// Létrehozás és hozzáférés
const colors = ['red', 'green', 'blue'];

console.log(colors[0]); // red
console.log(colors[1]); // green
console.log(colors.length); // 3

// Módosítás
colors[1] = 'yellow';
console.log(colors); // ['red', 'yellow', 'blue']

// Elem hozzáadás / eltávolítás
colors.push('purple');   // hozzáadás végére
colors.pop();            // eltávolítás végéről
colors.unshift('pink');  // hozzáadás elejére
colors.shift();          // eltávolítás elejéről

// Iteráció (bejárás)
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}
  
for (let color of colors) {
    console.log(color);
}

// Hasznos metódusok
console.log(colors.includes('red')); // true
console.log(colors.indexOf('blue')); // 2

/**
 * Objektumok (Object)
 */
// Létrehozás és hozzáférés
const user = {
    name: 'Anna',
    age: 25,
    isStudent: true
};
  
console.log(user.name);    // Anna
console.log(user['age']);  // 25

// Módosítás és új property
user.age = 26;
user.city = 'Budapest';
console.log(user);

// Törlés property
delete user.isStudent;
console.log(user);

// Iteráció objektumon (for...in)
for (let key in user) {
    console.log(key, user[key]);
}