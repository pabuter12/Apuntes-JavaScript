
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

let diadelasemana = parseInt(prompt("Ingrese dia de la semana con números"));

switch (diadelasemana){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;
    default:
        console.log("No equivale a ningun dia de la semana");
}

