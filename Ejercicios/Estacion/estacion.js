//Hacer un programa en donde el usuario ingrese un mes y se le muestre en pantalla a qué estación pertenece.
let mes = parseInt(prompt("Ingrese un mes (1-12):"));

if(!isNaN(mes) && mes >= 1 && mes <= 12) {
    if (mes >= 3 && mes <= 5){
        alert("Estacion: Otoño")
    } else if (mes >= 6 && mes <= 8){
        alert("Estacion: Invierno")
    } else if (mes >= 9 && mes <= 11) {
        alert("Estacion: Primavera")
    } else {
        alert("Estacion: Verano")
    }
} else {
    alert("Ingreso invalido. Debe ser un numero entero entre 1 y 12");
}