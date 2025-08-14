//El costo del helado es de $5. Escriba un programa en donde se le pida al usuario ingresar la cantidad de helados que quiere y mostrar cuánto le saldría
let num1 = parseInt(prompt("Ingrese la cantidad de helados que quiere ($5 c/u):"));
let precio = num1 * 5;

if (!isNaN(num1) && num1 > 0) {
    alert("El precio total es: $" + precio);
} else {
    alert("Ingreso invalido. Debe ser un numero entero positivo.");
}