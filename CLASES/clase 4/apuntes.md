# Funciones
Encapsular codigo y utilizarlo en otros programas. 
Una funcion es un conunto de instrucciones que se agrupan y se pueden reutilizar en el codigo. 

## Declarar una función
El nombre de la funciones deberia estar en infinitivo. 
En contenido de la función se escribe este las llaves. 
```javascript
function saludar (){
    console.log("Hola Estudiantes!");
}
```

Nota: A continucación la funcion declarada: 

```javascript
function enviarBienvenida(){
    let nombre = prompt("¿Cual es tu nombre");
    alert("Te damos la bienvenida " + nombre);
}
```
La funcion declarada no significa que se esta ejecuntando. Para ello:

```javascript
function enviarBienvenida(){
    let nombre = prompt("¿Cual es tu nombre");
    alert("Te damos la bienvenida " + nombre);
}

enviarBienvenida();//Invocar la función
```

## Parametros

Los parámetros son variables que se declaran dentro de la función, entre sus paréntesis. Los valores de éstos se definen luego en el llamado. Lo que se pone en los parentesis.

```javascript
function conParametros(parametro1, parametro2) {
    console.log(parametro1 + " " + parametro2);
}
```
```javascript
function calculadora(primerNumero, segundoNumero, operacion) {
    switch (operacion) {
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case "/":
            return primerNumero / segundoNumero;
            break;
        default:
            return 0;
            break;
    }
}
console.log(calculadora(10, 5, "*"));
```

## Resultado de una función (retorno)
Las funciones pueden utilizar un valor de retorno usando la palabra "return", obteniendo el valor cuando la función es llamada. 

```javascript
function sumar(primerNumero, segundoNumero) {
    return primerNumero + segundoNumero;
}
let resultado = sumar(5, 8);
```
```javascript
// Funciones con parametros y return
function autenticarUsuario(user, password){
    if((user == "Pepe") && (password=="1234")){
        return true;
    }else{
        return false;
    }
}

let usuario = prompt("Cual es su nombre de usuario?");
let contrasenia = prompt("Cual es su contraseña?");

let autenticado = autenticarUsuario(usuario, contrasenia);
console.log(autenticado);

if(autenticado){
    alert("Bievenidad nuevamente " + usuario);
}else{
    alert("Usuario no reconido");
}
```

# Scope

Es el ambito de una variable. Puede ser una variable global o local. 

## Variable global
Cuando una variable se declara fuera de cualquier función o bloque.

```javascript
let  pais = "Uruguay"; // Pais es una variable global

function observarPais(){
    console.log(pais);
}

observarPais();
```

## Variable local
Cuando definimos una variable dentro de una función o bloque. Si queremos utilizarla por fuera la variable no existe. 
```javascript
let  pais = "Uruguay"; // Pais es una variable global

function observarPais(){
    console.log(pais);
    let ciudad = "Colonia";//Variable local
    console.log(ciudad);
    return ciudad; // para sacarla de local y que pase a global
}

let ciudadRetornada = observarPais();//Colonia, y es global. para sacarla de local y que pase a global
console.log(ciudad);// Esta no  va a funcionar porque solo funciona dentro la funcion, solo vive dentro de las llaves de la función
```

# Funciones anónimas y funciones flecha

## Funciones anonimas
Forma corta de declarar funciones y de retornar. (No funcionan con hosting)
```javascript
//Generalmente, las funciones anónimas se asignan a variables declaradas como constantes
const suma  = function (a, b) { return a + b }
const resta = function (a, b) { return a - b }
console.log( suma(15,20) )
console.log( resta(15,5) )
```
```javascript
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
//Las dos hacen lo mismo
```

## Funciones flecha
Aun más cortas. No usan la palbra function sino una  => (flecha) entre los parámetros y el bloque. No tiene el hosting. Es la que más se va a usar durante el curso. 

```javascript
const suma  = (a, b) => { return a + b }
//Si es una función de una sola línea con retorno podemos evitar escribir el cuerpo.
const resta = (a, b) =>  a - b ; // asi sin las llaves tambien, cuando solo es una sentencia
console.log( suma(15,20) )
console.log( resta(20,5) )
```

```javascript
const area =(base, altura) => base * altura; // mas corta aún

console.log("El area del rectangulo es: " + area(10,5));

let rectanguloArea = area(10,5); //aqui puede volver el resultado del area una variable global
console.log(rectanguloArea);
```

En el caso de que tenga varias lineas con la funcion flecha:
```javascript
const oración = (palabra1, palabra2) => {
    console.log("La palbra 1 es: " + palabra1);
    console.log("La palabra 2 es: " + palabra2);
    console.log("La oración es: " + palabra1 + " " + palabra2);
}

oración("Hola", "chicos");
```
Con return:
```javascript
const oración = (palabra1, palabra2) => {
    console.log("La palbra 1 es: " + palabra1);
    console.log("La palabra 2 es: " + palabra2);
    console.log("La oración es: " + palabra1 + " " + palabra2);
    return palabra1 + " " + palabra2;
}

let resulOración = oración("Hola", "chicos");

console.log(resulOración);
```