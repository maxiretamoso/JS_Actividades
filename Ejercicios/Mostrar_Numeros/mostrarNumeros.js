//Realice un programa que dados dos números, muestre todos los números que están entre ellos.
let num1 = parseFloat(prompt("Ingrese el primer numero (debe ser menor que el segundo):"));

if (isNaN(num1)) {
    alert("Ingreso invalido. Deben ser numeros.");
} else {
    let num2 = parseFloat(prompt("Ingrese el segundo numero (debe ser mayor que el primer numero):"));
    if (isNaN(num2)) {
        alert("Ingreso invalido. Deben ser numeros.");
    } else {
        if (num1 > num2) {
            alert("El segundo numero (" + num2 + ")" + " es menor que el primero (" + (num1) + ")");
        } else if (num1 === num2) {
            alert("Los numeros son iguales. (" + num1 + ")");
        } else if (num2 - num1 === 1) {
            alert("No hay numeros entre " + num1 + " y " + num2);
        } else {
            alert("Numeros entre " + num1 + " y " + num2);
            for (let i = num1 + 1; i < num2; i++) {
                alert(i);
            }
        }
    }
}