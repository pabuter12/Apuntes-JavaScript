
function correr() {
  let apellido = prompt("Ingrese su apellido");
  let nombre = prompt("Ingrese su nombre");
  let edad = prompt("Cual es su edad?");
  let año_actual = 2023; // Cambiado a número
  let jubilación = 62; // Cambiado a número

  let calculo = jubilación - edad;
  let jubilo = año_actual + calculo; 

  alert("Hola " + nombre + " " + apellido); // Agregado espacio entre nombre y apellido
  alert("Usted se va a jubilar en el año " + jubilo);
}

correr(); // Llamando a la función