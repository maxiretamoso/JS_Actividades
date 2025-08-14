//Escriba un programa en donde se le solicite la edad al usuario y calcule su año de nacimiento, tomando en cuenta que el año actual es 2024
let edad = parseInt(prompt("Ingrese su edad:"));
let año = 2024;
let nacimiento = año - edad;

if (!isNaN(edad) && edad > 0) {
    alert("El año de nacimiento es: " + nacimiento);
} else {
    alert("Ingreso invalido. Debe ser un numero entero positivo.");
}