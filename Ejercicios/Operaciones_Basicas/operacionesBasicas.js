//Realizar un programa en donde se le pida al usuario 2 números y realice las cuatro operaciones básicas (tener en cuenta que no se puede dividir por cero)

let numeros = [];
for (i = 0; i < 2; i++) {
    let num;
    do {
        num = parseFloat(prompt("Ingrese el numero N°" + (i + 1) + ":"));
        if (isNaN(num)) {
            alert("Ingreso invalido. Debe ser un numero. Vuelva a intentarlo.");
        }
    } while (isNaN(num))
    numeros[i] = num;
}
let suma = numeros[0] + numeros[1];
let resta = numeros[0] - numeros[1];
let multiplicacion = numeros[0] * numeros[1];

alert("Suma: " + numeros[0] + " + " + numeros[1] + " = " + suma);
alert("Resta: " + numeros[0] + " - " + numeros[1] + " = " + resta);
alert("Multiplicacion: " + numeros[0] + " * " + numeros[1] + " = " + multiplicacion);

if (numeros[1] == 0) {
    alert("No se puede dividir ya que el segundo numero (divisor) es 0.");
} else {
    alert("Division: " + numeros[0] + " / " + numeros[1] + " = " + numeros[0] / numeros[1]);
}