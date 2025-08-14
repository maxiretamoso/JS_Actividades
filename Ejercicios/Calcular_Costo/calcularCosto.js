//Escriba un programa que permita calcular el costo total del producto con su IVA. Para esto, solicite al usuario el precio del producto, calcule su IVA (21%) y muéstrele en pantalla con un alert el precio final.

let precioProducto = parseFloat(prompt("Ingrese el precio del producto para calcular su IVA:"));

if (!isNaN(precioProducto) && precioProducto > 0 ) {
    let costoTotal = precioProducto * 1.21;
    alert("El costo total del producto con su iva es: $" + costoTotal.toFixed(2));
} else {
    alert("El precio del producto debe ser mayor a 0");
}