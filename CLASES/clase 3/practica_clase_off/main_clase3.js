
// // while

// let x = 0; //el que inicializa el ciclo
// while (x<10)/*evalua la condición*/{/*si es verdadera ejecuta el codigo que esta dentro*/
//     console.log("Ciclo numero " + x);
//     alert("Ahora x vale " + x)
//     x = x + 1;
// }


// // for

// for (let x = 0; x < 10; x++){
//     console.log("Ciclo número " + x);
// }

// // for anidado

// for (let x = 0; x < 10; x++){
//     console.log("Ciclo principal número " + x);

//     for(let y = 0; y<5;y++){
//         console.log("Ciclo secundario " + y);
//     }
// }

// do.... while


// let z = prompt("Ingrese un numero");
// do {
//     console.log(z);
//     z = prompt("Ingrese un numero");
// } while (z < 10);

// // while
// let x = 10;
// while (x < 10){
//     console.log("Ciclo while numero " + x)
//     x++;
// }


// // do...while
// let z = 10; 
// do {
//     console.log("Ciclo do... while numero " + z);
//     z++;
// }   while (z<10)


// Switch

// let diadelasemana = parseInt(prompt("Ingrese dia de la semana con números"));

// switch (diadelasemana){
//     case 1:
//         console.log("Lunes");
//         break;
//     case 2:
//         console.log("Martes");
//         break;
//     case 3:
//         console.log("Miercoles");
//         break;
//     case 4:
//         console.log("Jueves");
//         break;
//     case 5:
//         console.log("Viernes");
//         break;
//     case 6:
//         console.log("Sabado");
//         break;
//     case 7:
//         console.log("Domingo");
//         break;
//     default:
//         console.log("No equivale a ningun dia de la semana");
// }


// //Este código calculará la suma de todos los números pares desde 1 hasta el número ingresado por el usuario y mostrará el resultado en la consola.
// let numeroLimite = prompt("Ingrese un número:");
// let suma = 0;

// for (let i = 1; i <=numeroLimite; i++){
//     if (i % 2 === 0){ //recordar aqui que el operador de modulo: "%" es para obtener el residuo de una división
//         suma = suma + i;
//     }
// }

// console.log("La suma de los números pares hasta " + numeroLimite + " es: " + suma);



// //Codigo que imprime los numeros pares que hay de 1 a 100:
// for(let i = 1; i<=100 ; i++){
//     if ( i % 2 == 0){
//         console.log("El numero " + i + " es par");
//     }
// }


// //Codigo que calcula la suma de los números impares de 1 hasta 50.
// let suma = 0;

// for(let i = 1; i <= 50; i++){
//     if(i % 2 != 0){
//         suma = suma + i;
//         console.log("Numero impar: " + i+ "." + " La suma es "+ suma);
//     }
// }



// //Imprimir una secuencia de caracteres
// let texto = prompt("Ingrese un texto");

// for(let i=0; i < texto.length ; i++){
//     console.log("Caracter numero " + i+ "= " + texto[i]);
// }



// //Contar el numero de vocales de una palabra
// let palabra = prompt("Ingrese una palabra");
// let contador = 0;

// for(let i=0; i < palabra.length ; i++){
//     if ( palabra[i] == "a" || palabra[i] == "e" || palabra[i] == "i" || palabra[i] == "o" || palabra[i] == "u"){
//         contador = contador + 1;
// }
// }
// console.log("La cantidad de vocales en la palabra: " + palabra + " es de " + contador);


// //Busquedad de un caracter en una cadena 

// let texto = prompt("Ingrese una cadena de texto");
// let caracter = prompt("Ingrese un caracter a buscar");

// for ( var i = 1 ; i < texto.length ; i++){
//     if ( texto[i] == caracter){
//     console.log("Se encontro el caracter indicado: " +"(" + caracter + ") " + "en la letra numero " + i + " del texto: " + texto);
//     break;
//     }
// }
// if( i == texto.length){
//     console.log("El caracter indicado: " + caracter + " no se encontro en el texto indicado: " + texto);
// }


// //Contador ascendente

// let contador = 1;
// while ( contador <= 10){
//     console.log(contador);
//     contador++;
// }


// // Suma numeros
// let suma = 0;
// let numero = parseInt(prompt("Ingrese un numero para sumar"));

// while(numero !== 0){
//     suma = suma + numero;
//     numero = parseInt(prompt("Ingrese un otro numero"));

//     if (numero === "0"){
//         break;
//     }
// }
// console.log("La suma total es " + suma)


// //Contador descendente
// let contador = 10;

// while ( contador >= 1){
//     console.log(contador);
//     contador--;
// }


// // Conteo de vocales en una cadena

// let texto = prompt("Ingrese una cadena de texto");
// let contadora = 0;
// let i = 0;

// while( i <= texto.length){
//     let caracter = texto[i];

//     if( texto[i] == "a" || texto[i] == "e" || texto[i] == "i" || texto[i] == "o" || texto[i] == "u"){
//         contadora = contadora + 1;
//     }
//     i++; //no olvidar incremntar el valor de i, sino entrara en un bucle infinito
// }

// console.log("La cantidad de vocales en la cadena de texto es de " + contadora)



// // Adivinar un numero

// let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

// let numeroUsuario;

// do{
//     numeroUsuario = parseInt(prompt("Adivine el numero (entre el 1 y el 10)"));
//     if (numeroUsuario < numeroAleatorio){
//         console.log("El nummero a adivinar en mayor. Intente otra vez");
//     }else if(numeroUsuario > numeroAleatorio){
//         console.log("El numero a adivinar es menor. Intente nuevamente");
//     }
// }while (numeroUsuario != numeroAleatorio);

// console.log("Felicitaciones! Adivinaste el numero.");