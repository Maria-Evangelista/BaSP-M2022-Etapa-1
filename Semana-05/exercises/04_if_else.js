console.log("EXERCISE 4: IF ELSE");

/* a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), 
si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” 
y sino un alerta con el mensaje “Lower than 0,5”. */

console.log("- Exercise 4.a: ");
var randomNumber = Math.random();
console.log(randomNumber);
if (randomNumber >= 0.5) {
    alert("Greater than 0,5");
} else {
    alert("Lower than 0,5");
}

/* b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
i. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años. */

console.log("- Exercise 4.b: ");
var Age = 25;
if (Age < 2) {
    alert("Bebe");
} else if (Age >= 2 && Age <= 12) {
    alert("Niño");
} else if (Age >= 13 && Age <= 19) {
    alert("Adolescente");
} else if (Age >= 20 && Age <= 30) {
    alert("Joven");
} else if (Age >= 31 && Age <= 60) {
    alert("Adulto");
} else if (Age >= 61 && Age <= 75) {
    alert("Adulto mayor");
} else if (Age > 75){
    alert("Anciano");
}