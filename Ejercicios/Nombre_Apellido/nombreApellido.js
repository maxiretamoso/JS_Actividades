// Escriba un programa donde se le solicite el año de nacimiento. Si es mayor a 18 se le tiene que pedir que ingrese su nombre y apellido para mostrarle un texto con el formato: “Hola nombre apellido, tu edad actual es: edad”. Ejemplo: “Hola Rodrigo Río, tu edad actual es 25”. 
let nacimiento = parseInt(prompt("Ingrese su año de nacimiento:"));

if (!isNaN(nacimiento) && nacimiento > 0) {
    let edad = 2025 - nacimiento;

    if (edad > 18) {
        let nombre = prompt("Ingrese su nombre y apellido");
        alert("Hola " + nombre + ", tu edad actual es " + edad + ".")
    }

} else {
    alert("Ingreso invalido. El año de nacimiento debe ser un numero entero positivo.");
}