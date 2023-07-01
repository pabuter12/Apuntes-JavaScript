// // funciones

// function enviarBienvenida(){
//     let nombre = prompt("¿Cual es tu nombre");
//     alert("Te damos la bienvenida " + nombre);
// }
// //Invocar a la función
// enviarBienvenida();



// // Funciones con parametros

// function enviarDespedida (usuario){
//     alert("Gracias por participar, " + usuario);
// }

// enviarDespedida("Pepita");

// let usu = prompt("Ingresa tu nombre de usuario");//Martina

// enviarDespedida(usu);

// console.log(usu);// en la variable uso queda el valor almacenada arriba, no el de pepita
// console.log(usuario);//No existe, ya que este es un parametro y solo se reconoce dentro de la función.


// // otro ejemplo
// function calcularIva(precio){
//     let iva = precio * 0.21;
//     console.log("El iva de $" + precio + " es $"+ iva);
// }

// calcularIva(100);

// let valorProducto = parseFloat(prompt("Ingresa el precio del producto"));
// calcularIva(valorProducto);


// // Funciones con parametros y return
// function autenticarUsuario(user, password){
//     if((user == "Pepe") && (password=="1234")){
//         return true;
//     }else{
//         return false;
//     }
// }

// let usuario = prompt("Cual es su nombre de usuario?");
// let contrasenia = prompt("Cual es su contraseña?");

// let autenticado = autenticarUsuario(usuario, contrasenia);
// console.log(autenticado);

// if(autenticado){
//     alert("Bievenidad nuevamente " + usuario);
// }else{
//     alert("Usuario no reconido");
// }

// Scope gloval y local

// let  pais = "Uruguay"; // Pais es una variable global

// function observarPais(){
//     console.log(pais);
//     let ciudad = "Colonia";//Variable local
//     console.log(ciudad);
// }

// observarPais();
// //console.log(ciudad);// Esta no  va a funcionar porque solo funciona dentro la funcion, solo vive dentro de las llaves de la función
// console.log(pais);

//Función anonima
//Calcular el cuadrado de un numero

//funcion normal

function calcularCuadrado(numero){
    return numero * numero;
}

let resultado = calcularCuadrado(9);
console.log(resultado);

//pasado a funcion anonima
const resulCuadrado = function (num) { return num * num};

console.log(resulCuadrado(9));

// Función flecha

const area =(base, altura) => base * altura; // mas corta aún

console.log("El area del rectangulo es: " + area(10,5));

let rectanguloArea = area(10,5); //aqui puede volver el resultado del area una variable global
console.log(rectanguloArea);

// otro ejemplo

const oración = (palabra1, palabra2) => {
    console.log("La palabra 1 es: " + palabra1);
    console.log("La palabra 2 es: " + palabra2);
    console.log("La oración es: " + palabra1 + " " + palabra2);
    return palabra1 + " " + palabra2;
}

let resulOración = oración("Hola", "chicos");

console.log(resulOración);