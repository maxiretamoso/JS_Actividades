/*Realizar un programa donde se le pida al usuario ingresar un número positivo y luego mostrar en pantalla el conteo desde 1 hasta ese número.
NOTA: Tener en cuenta validar que es un número positivo el que ingresó.*/
let numero = parseInt(prompt("Ingrese un numero positivo para iniciar el conteo ascendente:"));

if (!isNaN(numero) && numero > 0) {
    for (i = 1; i <= numero; i++) {
        alert(i);
    }
} else {
    alert("Ingreso invalido. El numero debe ser un entero positivo");
}