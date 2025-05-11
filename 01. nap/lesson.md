## Nap 1 – A JavaScript világ megértése
### __Elmélet:__
* Mi az a JavaScript? Hol fut? (Browser + Node.js)
* ECMAScript verziók röviden (ES5 → ES6+)
* var, let, const közti különbségek

### __Gyakorlat:__
VS Code, Node.js környezet beállítása

__Feladat:__ Hello World konzolra, és változók deklarálása (_let, const_)

### Elmélet
 Ma elindítjuk a JavaScript tanulást a nulláról. A cél, hogy már ma működő kódot írjunk, és értsük, hogyan dolgozik a nyelv.

 1. Mi az a JavaScript?
    * __Definíció:__ JavaScript egy szkriptnyelv, amit eredetileg böngészőkben használtak weboldalak interaktívvá tételéhez.
    * __Hol fut ma?__ - Böngésző (_Chrome, Firefox, Safari_)
    * Szerver (_Node.js_)
    * Mobilappok, Desktop appok (_React Native, Electron_)
    * __Érdekesség:__ Nem azonos a Java-val!

2. Hogyan fut a JS kód?
    * Developer Console (böngésző) Chrome → F12 → Console → `console.log('Hello JS!')`
    * Node.js telepítés (nodejs.org) letöltése, ellenőrzés: node -v, node --version
    * VS Code telepítés Egyszerű szerkesztő, bővítményekkel

3. Első JavaScript fájl
    __Létrehozás:__ index.js
    __Tartalom:__
    ```js
            console.log('Hello JavaScript World!');
    ```
    __Futtatás terminálban:__ `node index.js`
    __Eredmény:__ Hello JavaScript World!