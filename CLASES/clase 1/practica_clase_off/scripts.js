var variable1 = "facultad";
var variable2 = 2.5;
var variable3 = true;
var variable4 = new Number();

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log( typeof variable4); //Para saber que tipo de dato tiene otro objeto hay que utilizar otro OPERADOR.

//Ejercicio 1:

let nombreUsuario = prompt("Ingrese su nombre");

console.log("Hola" + " " + nombreUsuario+ ", espero este muy bien!" );

//Ejercicio 2:

let anioActual = parseInt(prompt("Ingrese el año actual"));
let nacimientoPregunta = parseInt(prompt("¿En que año fue su nacimiento?"));

let edad = anioActual - nacimientoPregunta;

console.log("Usted tiene" + " " + edad + " años.");

//Ejercicio 3

let peso = parseInt(prompt("Ingrese su peso en kilogramos"));

const proteina = 1.2;

let proteinaPorPeso = peso * proteina;

alert("La cantidad de gramos de proteina que debe consumir por cada kilogramo de peso corporal es de" + " " + proteinaPorPeso + " " + "gr")






