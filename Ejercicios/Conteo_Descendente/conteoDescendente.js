//Pedirle al usuario que ingrese un número, realizar un conteo hacia atrás hasta llegar a 0 pero sólo mostrando los números que son pares.
let numero = parseInt(prompt("Ingrese un numero positivo para iniciar el conteo descendente:"));

if (!isNaN(numero) && numero > 0) {
    for (i = numero; i >= 0; i--) {
        if (i % 2 == 0) {
            alert(i);
        }
    }
} else {
    alert("Ingreso invalido. El numero debe ser un entero positivo");
}