/*
// Ciclo por conteo - FOR
for(let i=1; i<=3;i++){ // i++ es para sumar 1 de a 1
    // i es la variable contadora
    console.log("Valor de i="+i);
}

console.log("Fin del ciclo for");

// Diapo 11 - ejemplo practico

// Solicitamos un valor al usuario
let Numero = parseInt(prompt("Ingresar Numero"));
// En cada repetición, calculamos el número ingresado x el número de repetición (i)
for (let i = 1; i <= 10; i++) {
    let resultado = Numero * i ;//2*1=2
    console.log(Numero +" X "+ i +" = "+ resultado);
}


// Diapositiva 12 - ejemplo práctico - Turnos

//Algoritmo para dar turno del 1 al 5 a los nombres asignados

for (let i = 1; i <= 5; i++) {
    // En cada repetición solicitamos un nombre.
    let Nombre = prompt("Ingresar nombre");
    // Informamos el turno asignado usando el número de repetición (i).
    console.log(" Turno  N° "+i+" Nombre: "+Nombre);
}
console.log("No hay mas turnos disponibles para hoy");
*/
/*
// Break
//Proceso de pedido de usuario y contraseña
let user;
let pass;
fallidos = 0;
for(let i=1; i<=3; i++){
    user = prompt("Ingrese nombre de usuario");
    pass = prompt("Ingrese contraseña");
    if((user=="pepe") && (pass=="1234")){
        alert("Bienvenido Pepe!!");
        break; //aqui se utilizo el break porque si la ingreso bien para que preguntarle más veces
    }else{
        fallidos = fallidos + 1;
        alert("Usuario y/o contraseña invalido");
    }
}

if(fallidos == 3){
    alert("El sistema se bloqueo",)
}

//continue

for (let i = 1; i <= 10; i++) {
    //Si la variable i es 5, no se interpreta la repetición
    if(i == 5 || i==7){
        continue;
    }
    alert(i);
}
*/

/*
// Ciclos por condición WHILE

let edad = prompt("Ingrese su edad (0-para salir)");
// si yo ingreso el 0 nunca entramos al while
while (edad != "0"){
    if(edad < 20){
        alert("Eres un niño o adolescente");
    }else if(edad<60){
        alert("Eres un adulto con experiencia");
    }else{
        alert("Que bien estas!");
    }

    edad = prompt("Ingrese su edad (0-para salir");
}

// do while | Al menos cicla una vez

let dato = "mesa"
do{
    console.log(dato)
}while(dato != "mesa");
*/

// otro ejemplo / diapo 21

let numero;
do{
   //Repetimos con do...while mientras el usuario ingresa un n°
   numero = prompt("Ingresar Número");
   console.log(numero);
//Si el parseo no resulta un número se interrumpe el bucle.   
}while(parseInt(numero));

// switch es un condicional como el if

let id = prompt("Ingresa el codigo del producto, 0-para salir");


while(id != "0"){
switch(id){
    case "1":
        alert("Mouse marca Logitech U$D 30");
        break;
    case "2":
        alert("Teclado wireless marca Genius U$D 88");
        break;
    case "3":
        alert("Monitor...");
        break;
        default:
            alert("Codigo inexistente");
            break;
    }
    id = prompt("Ingresa el codigo del prodcuto 0-para salir")
}
