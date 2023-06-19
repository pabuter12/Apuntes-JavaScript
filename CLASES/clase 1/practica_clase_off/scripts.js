var variable1 = "facultad";
var variable2 = 2.5;
var variable3 = true;
var variable4 = new Number();

console.log(typeof variable1);
console.log(typeof variable2);
console.log(typeof variable3);
console.log( typeof variable4); //Para saber que tipo de dato tiene otro objeto hay que utilizar otro OPERADOR.
/*
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

// Ejercicio 4

let cantidadMascotas = prompt("Ingrese la cantidad de mascotas que tienes");

alert("La cantidad de mascotas que usted tiene es de" + " " + cantidadMascotas);

// Ejercicio 5

let numero1 = 54;
let numero2 = 24;

let sumaNumeros = numero1 + numero2; //78
let restaNumeros = numero1 - numero2; // 30
let multiNumeros = numero1 * numero2; // 1296
let dividirNumeros = numero1 / numero2; // 2.25

console.log("La suma de los números es de" + " " + sumaNumeros);
console.log("La resta de los numeros es de " + restaNumeros);
console.log("La multiplicación de los números es de" + " " + multiNumeros);
console.log("La división de los números es de" + " " + dividirNumeros);

*/
// Ejercicio 6

let precioProducto = parseInt(prompt("Ingrese el precio del producto"));

const iva = 1.19;

let precioProductoIva = precioProducto * iva;

alert("El precio del producto con el iva incluido es de" + " " + precioProductoIva)

console.log(precioProducto)

const numeroX = 2;

console.log(typeof precioProducto);
console.log(typeof numeroX);

//Ejercicio 7

let correo;
correo = prompt("Ingrese su correo electrónico:");

alert("Su correo electronico es" + " " + correo)

// Ejercicio 8

let numeroA = 4;
let numeroB = 5;
const pi = 3.1416;

let multipliAB = numeroA * numeroB;

console.log(multipliAB);

let multipliAPi= numeroA * pi;

console.log(multipliAPi);


