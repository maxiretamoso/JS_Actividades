//Escriba un programa en donde el usuario ingrese 3 notas, calcule el promedio y si es mayor o igual a 4 le indique que está aprobado con un alert
let notas = [];
let tot = 0;

for (i = 0; i < 3; i++) {
    let nota;
    do {
        nota = parseFloat(prompt("Ingrese la nota N°" + (i + 1) + " (entre 1 y 10):"));
        if (isNaN(nota) || nota <= 0 || nota > 10) {
            alert("Ingreso invalido. Debe ser un numero entre 1 y 10. Vuelva a intentarlo.");
        }
    } while (isNaN(nota) || nota <= 0 || nota > 10);
    notas[i] = nota;
    tot += nota;
}

let promedio = tot / 3;
if (promedio >= 4) {
    alert("Esta aprobado (El promedio es " + promedio + ").");
}