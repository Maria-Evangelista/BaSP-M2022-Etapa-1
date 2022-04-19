console.log("EXERCISE 3: ARRAYS");

/* a. Dado el siguiente array: 
["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
"Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] 
mostrar por consola los meses 5 y 11 (utilizar console.log). */

console.log("- Exercise 3.a: ");
var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("The fifth month is", months[5-1], "and the eleventh month is", months[11-1]);

/* b. Ordenar el array de meses alfabéticamente y mostrarlo por consola 
(utilizar sort). */
console.log("- Exercise 3.b: ");
var bMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(bMonths.sort());

/* c. Agregar un elemento al principio y al final del array 
(utilizar unshift y push). */
console.log("- Exercise 3.c: ");
var cMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
cMonths.unshift("2021");
cMonths.push("2022");
console.log(cMonths);

/* d. Quitar un elemento del principio y del final del array 
(utilizar shift y pop). */
console.log("- Exercise 3.d: ");
var dMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
dMonths.shift();
dMonths.pop();
console.log(dMonths);

/* e. Invertir el orden del array 
(utilizar reverse). */
console.log("- Exercise 3.e: ");
var eMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(eMonths.reverse());

/* f. Unir todos los elementos del array en un único string donde cada mes este separado por un guión - 
(utilizar join). */
console.log("- Exercise 3.f: ");
var fMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(fMonths.join("-"));

/* g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre 
(utilizar slice). */
console.log("- Exercise 3.g: ");
var gMonths = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log(gMonths.slice(4,11));