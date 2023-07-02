// // Funciones declaradas

// function saludar(nombre, apellido){
//     console.log("Hola "+ nombre);
// }

// saludar("Carpi");


// //Funciones anonimas

// const saludar = function(nombre){
//     console.log("Hola " + nombre);
// }
// saludar("carpi");


// // Funciones flecha
// const saludar = (nombre) => {
//     console.log("Hola " + nombre);
// }
// saludar("Carpi");

// //En una solo parametro y sentencia se pueden obviar los parentesis y las llaves

// // Funciones declaradas con retorno

// function saludar(nombre, apellido){
//     return "Hola " + nombre
// }

// let saludarACarpi = saludar("Carpi");
// console.log(saludarACarpi)

// //Función declarada con retorno
// function suma(a, b){
//     return a + b;
// }

// //Funciones flecha con retorno implicito
// const resta = (a, b) =>  a - b;

// console.log(suma(2, 3));
// console.log(resta(10 , 3));








//Ejercicios de CHAT GPT
/*





1. Suma de dos números:





Crea una función llamada sumar que reciba dos parámetros: num1 y num2.
Dentro de la función, suma los dos números y devuelve el resultado.
Llama a la función pasando dos números como argumentos e imprime el resultado.*/

function sumar (num1, num2){
    // let suma = num1 + num2;
    // return suma;
    return num1 + num2; // se puede hacer más corto de esta manera
}
let numerosSuma = sumar(10, 5);
console.log("El resultado de la suma es: " + numerosSuma);







/* 2. Verificación de número par:







Crea una función llamada esPar que reciba un parámetro numero.
Dentro de la función, verifica si el número es par.
Devuelve true si es par y false si no lo es.
Llama a la función pasando un número como argumento e imprime el resultado. */

function esPar(numero){
    if (numero % 2 == 0){
        console.log("True");
        return ("El numero " + numero + " es par");
    }else{
        console.log("False")
        return ("El numero " + numero + " no es par");
    }
}
esPar(3);

//Como lo hizo chat GPT:
// Definir la función para verificar si un número es par
function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  
  // Llamar a la función y mostrar el resultado
//   var numero = 7;
//   var esParResult = esPar(numero);
  
//   if (esParResult) {
//     console.log(numero + " es un número par.");
//   } else {
//     console.log(numero + " no es un número par.");
//   }
  





/* 3. Cálculo del área de un triángulo:





Crea una función llamada calcularAreaTriangulo que reciba dos parámetros: base y altura.
Dentro de la función, calcula el área del triángulo utilizando la fórmula base * altura / 2.
Devuelve el área calculada.
Llama a la función pasando la base y altura del triángulo como argumentos e imprime el resultado. */

function calcularAreaTriangulo (base, altura){
    return (base * altura)/2;
}

let areaTringulo = calcularAreaTriangulo(7, 2);
console.log("El area del triangulo es: " + areaTringulo);

//Como lo hizo chat GPT:
// function calcularAreaTriangulo (base, altura){
//     return (base * altura)/2;
// }

// let areaTringulo = calcularAreaTriangulo(7, 2);
// console.log("El area del triangulo es: " + areaTringulo);





/* 4. Conversor de temperaturas, pasar de grados Celsius a Fahrenheit*/






function conversorTemp (c){
    let deCelsiusAFahrenh = (c * 1.8) + 32;
    return deCelsiusAFahrenh;
}

let tempC = parseInt(prompt("Que temperatura en grados celsius quiero convertir a grados Fahrenheit?"));
let conversion = conversorTemp(tempC);
console.log("La conversion de " + tempC + "°C a °F es de " + conversion + "°F.");

//Como lo hizo Chat GPT:
// // Definir la función para convertir Celsius a Fahrenheit
// function convertirCelsiusAFahrenheit(celsius) {
//     var fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
//   }
  
//   // Llamar a la función y mostrar el resultado
//   var temperaturaCelsius = 25;
//   var temperaturaFahrenheit = convertirCelsiusAFahrenheit(temperaturaCelsius);
  
//   console.log(temperaturaCelsius + " grados Celsius equivale a " + temperaturaFahrenheit + " grados Fahrenheit.");




// 5. Generar Saludo

function saludo (nombre){
    return "Hola " + nombre + "; ¿como estas el dia de hoy?"
}

let nombre = prompt("Como te llamas?");
let saludoPersonalizado = saludo(nombre);
console.log(saludoPersonalizado);


/* //Como lo hizo chat GPT:
// Definir la función para generar un saludo personalizado
function generarSaludo(nombre) {
    var saludo = "¡Hola, " + nombre + "! Bienvenido.";
    return saludo;
  }
  
  // Solicitar al usuario su nombre
  var nombreUsuario = prompt("Ingrese su nombre:");
  
  // Llamar a la función y mostrar el resultado
  var saludoPersonalizado = generarSaludo(nombreUsuario);
  console.log(saludoPersonalizado); */
  
  