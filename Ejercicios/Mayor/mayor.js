//Escriba un programa en donde el usuario ingrese 2 números e indique cuál es el mayor
let num1 = parseFloat(prompt("Ingrese el primer numero:"));
if (isNaN(num1)) {
    alert("Ingreso invalido. Deben ser numeros.");
} else {
    let num2 = parseFloat(prompt("Ingrese el segundo numero:"));
    if (isNaN(num2)) {
        alert("Ingreso invalido. Deben ser numeros.");
    } else if (num1 > num2) {
        alert("El numero mayor es: " + num1);
    } else if (num2 > num1) {
        alert("El numero mayor es: " + num2);
    } else {
        alert("Los dos numeros son iguales (" + num1 + ").");
    }
}