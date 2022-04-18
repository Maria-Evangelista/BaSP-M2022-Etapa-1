console.log("EXERCISE 2: STRINGS");

/* a. Crear una variable de tipo string con al menos 10 caracteres 
y convertir todo el texto en mayúscula (utilizar toUpperCase). */

console.log("- Exercise 2.a: ");
var aString1 = "newell's old boys";
console.log(aString1.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable
(utilizar substring). */

console.log("- Exercise 2.b: ");
var bString1 = "programming";
var bString2 = bString1.substring(0,5);
console.log(bString2);

/* c. Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable 
(utilizar substring). */

console.log("- Exercise 2.c: ");
var cString1 = "conversation";
var cString2 = cString1.substring(9,12);
console.log(cString2);

/* d. Crear una variable de tipo string con al menos 10 caracteres 
y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. 
Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log("- Exercise 2.d: ");
var dString1 = "vacationing";
var dString2 = dString1.substring(0,1).toUpperCase() + dString1.substring(1,11).toLowerCase();
console.log(dString2);

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log("- Exercise 2.e: ");
var eString1 = "happy easter";
var eFirstBlank = eString1.indexOf(" ");
console.log(eFirstBlank);

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga 
la primera letra de ambas palabras en mayúscula y las demás letras en minúscula 
(utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log("- Exercise 2.f: ");
var fString1 = "software professional";
var fString2 = 
fString1.substring(0,1).toUpperCase() + 
fString1.substring(1, fString1.indexOf(" ")).toLowerCase() + 
fString1.substring(fString1.indexOf(" "), fString1.indexOf(" ")+1) +
fString1.substring(fString1.indexOf(" ")+1, fString1.indexOf(" ")+2).toUpperCase() +
fString1.substring(fString1.indexOf(" ")+2).toLowerCase();
console.log(fString2);