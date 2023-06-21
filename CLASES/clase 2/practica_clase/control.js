/*
// control de flujos

let edad = 63;

if (edad > 17){
    console.log("Eres mayor de edad");
}

// otro caso

let anio = 2021;

if(anio==2023){ //Los dos == significan COMPARACIÓN
    console.log("Este es el año en curso");
}

// otro ejemplo

let usuario = prompt("Ingrese nombre de usuario");

if(usuario == "Manzanita3030"){ //Los dos == significan COMPARACIÓN
    console.log("Bienvenida Manzanita !!!");
}else{ //Se utiliza el else cuando el IF no era cierto
    console.log("Usuario inexistente o no valido");
}

// Ejemplo 2, este es un ejemplo de condiciones multiples, se queires evaluar mucchas cosas

let equipo = prompt("Ingrese tu equipo favorito de futbol");

if(equipo == ""){
    alert("No ingresaste nada");
}else if(equipo == "river" ){
    alert("River, el más grande de America");
}else if(equipo=="boca"){
    alert("Boca tiene la mejor hinchada!!");
}else if(equipo=="Independiente"){
    alert("El rey de copas!!");
}else{
    alert("Tu equipo favortio es "+equipo);
}

//Variables booleanas

let estaLloviendo = true; //o flase

let esMayor = (edad>17); //aqui lo que queda es la variable esMayor, queda TRUE (recordar que ya arriba se habia dicho que la edad era 63)

if(esMayor){
    console.log("Es mayor de edad, puedes ingresar al bar !")
}



// == 0 ==, gran ejemplo del operador logico ===, que tambien es para comparación como ==, pero más especifica. 

let num1 = 1;
let numUno = 1;

if (num1 == numUno){
    console.log("Ambos datos contienen el mismo valor");
}

if(num1 === numUno){
    console.log("Ambos son iguales en valor y tipo");
}

// != son distintos en valor
let num2 = 2;

if(num1 != num2){
    console.log("Los números son distintos en valor");
}


// !== este mira no solo el valor sino tambien el dato

if(num2 !== "2"){
    console.log("Los números son extrictamente distintos");
}

// && (and) buen ejemplo

let usuActivo = "Pepe";
let clave = "1234";

if((usuActivo=="Pepe") && (clave == "1234")){
    // ambas condiciones deben ser verdaderas
    console.log("Bienvenido Pepe");
}else{
    console.log("Usuario y/o contraseña erroneos");
}

// || (or)

if((usuActivo == "pepe") || (usuActivo == "Pepe") || (usuActivo == "PEPE")){
    console.log("Tu eres Pepe");
}else{
    console.log("Tu no eres Pepe");
}
*/

/* 
se le pide el año de su vehiculo al usuario
Si el vehiculo tiene entre 0 y 5 años de antiguedad debe abonar $120000 
Si el vehiculo tiene entre 6 y 10 años de antiguedad debe abonar $60000 
Si el vehiculo tiene más 10 años de antiguedad debe abonar $30000 
EL MENSAJE DEL VALOR A ABONAR DEBE ABSERVARSE POR ALERT 
*/

let anioVehiculo = parseInt(prompt("¿Cual es el año de su año Vehiculo?"));

const anioActual = 2023;

let antiguedadVehiculo = anioActual - anioVehiculo;

console.log("La antiguedad de vehiculo es de " + antiguedadVehiculo + " años");

if (antiguedadVehiculo <= 5){
    alert("Debe abonar 120000");
}else if((antiguedadVehiculo >= 6) && (antiguedadVehiculo <= 10)){
    alert("Debe abonar $60000");
}else{
    alert("Debe abonar $30000");
}
