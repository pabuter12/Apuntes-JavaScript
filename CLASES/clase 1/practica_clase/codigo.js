// clase 1 (comentario corto)

/* jklasdjlrkjklfjsld

sdfd

sdfsd (comentario largo)
*/


// Variables
// 1. declaración de la variable
let nombre;
// 2. asignacion de datos
nombre = "Pepe"; //dato de tiempo string o cadena de texto

// declaraxcion y asignacion en la misma linea
let apellido = "Gomez";

// la informacion puede variar
nombre = "Lau";

let edad = 45; // dato de tipo number

// constantes
const america = 1492;
const pi = 3.1416;

// pi=67;

// Operaciones matematicas
let nota1 = 10;
let nota2 = 6;
let sumaNotas = nota1 + nota2; // =16

let restNotas = nota1 - nota2; // =4

let multipNotas = nota1 * nota2; // =60

let divideNotas = nota1 / nota2; // =1.66


// Concatenación
let nombreCompleto = nombre + " " + apellido; // Lau Gomez

//Salida de datos

//por la consola
console.log( "La suma de las notas es: " + sumaNotas);
console.log( "La resta de las notas es: " + restNotas);
console.log( "La multiplicacion de las notas es: " + multipNotas);
console.log( "La división de las notas es: " + divideNotas);

// por alert 
alert( "La suma de las notas es: " + sumaNotas);

//ingreso de datos del usuario
let anioActual = parseInt(prompt("ingrese el año actual"));
// prompt toma los datos en formato string y para poder convertirlo a numero entero utulizo parseInt
console.log(anioActual);

let desdeDescubrimientoAmercia = anioActual - america;

alert("Hace "+desdeDescubrimientoAmercia+" años que se descubrio America");

// otro ejemplo 
// Para numero decimal se utiliza parseFloat
let precio = parseFloat(prompt("Ingrese el precio del producto"));
console.log(precio);

let precioConIva = precio * 1.21;
alert("El precio final con Iva es $"+precioConIva);

// otro ejemplo
let calle = prompt("Ingrese la calle de su domicilio");
let numero = prompt("Ingrese el numero de su domicilio");

alert("Su dirección completa es: "+calle+" "+numero);