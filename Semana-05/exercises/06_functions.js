console.log("EXERCISE 6: FUNCTIONS");

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. 
Ejecutar la función y guardar el resultado en una variable, 
mostrando el valor de dicha variable en la consola del navegador. */

console.log("- Exercise 6.a: ");
var aResult;
var aNumber1 = 1900;
var aNumber2 = 74;
aResult = addition(aNumber1, aNumber2);
console.log("First number:", aNumber1); 
console.log("Second number:", aNumber2); 
console.log("Result:", aResult); 

function addition(aNumber1, aNumber2) {
    var aSum;
    aSum = aNumber1 + aNumber2;
    return aSum; 
}

/* b. A la función suma anterior, 
agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error 
y retornar el valor NaN como resultado. */

console.log("- Exercise 6.b: ");
var bNumber1 = "hello";
var bNumber2 = 13;
var bSum;
var bResult;
console.log("First parameter:", bNumber1); 
console.log("Second parameter:", bNumber2); 
bResult = additionB(bNumber1, bNumber2);
console.log("Result:", bResult); 

function additionB(bNumber1, bNumber2) {
    if (isNaN(bNumber1) || isNaN(bNumber2)) {
        alert("Ex-6b: One of the parameters is not valid");
        return console.log(NaN);
    } else {
        bSum = bNumber1 + bNumber2;
        return bSum;
    }     
}

/* c. Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero. */

console.log("- Exercise 6.c: ");
var cNumber;
console.log("20 is an interger:", validateIntegerC(20));
console.log("20.5 is an interger:", validateIntegerC(20.5));

function validateIntegerC(cNumber) {
    return Number.isInteger(cNumber);
}

/* d. A la función suma del ejercicio 6b) 
agregarle una llamada que valide que los números sean enteros. 
En caso que haya decimales mostrar un alerta con el error 
y retornar el número convertido a entero (redondeado). */

console.log("- Exercise 6.d: ");
var dNumber1 = 2000;
var dNumber2 = 4.1;
console.log("First number:", dNumber1); 
console.log("Second number:", dNumber2); 
console.log("Result:", additionD(dNumber1, dNumber2));

function validateIntegerD(dNumber) {
    return Number.isInteger(dNumber);
}

function additionD(dNumber1, dNumber2) {
    var dResult;
    if (validateIntegerD(dNumber1) == false || validateIntegerD(dNumber2) == false) {
        alert("Ex-6d: One of the numbers is not valid");
        dResult = Math.round(dNumber1) + Math.round(dNumber2);
        return dResult;
    } else {
        dResult = dNumber1 + dNumber2;
        return dResult;
    }
}

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual. */

console.log("- Exercise 6.e: ");
var eNumber1 = 1990;
var eNumber2 = 2.2;
console.log("First number:", eNumber1); 
console.log("Second number:", eNumber2); 
console.log(additionE(eNumber1, eNumber2));

function validateIntegerE(eNumber) {
    return Number.isInteger(eNumber);
}

function validationE(eNumber1, eNumber2) {
    var eResult;
    if (validateIntegerE(eNumber1) == false || validateIntegerE(eNumber2) == false) {
        alert("Ex-6e: One of the numbers is not valid");
        eResult = Math.round(eNumber1) + Math.round(eNumber2);
        return eResult;
    } else {
        dResult = eNumber1 + eNumber2;
        return eResult;
    }
}

function additionE(eNumber1, eNumber2) {
    return validationE(eNumber1, eNumber2);
}