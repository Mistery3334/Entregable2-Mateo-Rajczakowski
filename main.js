function iniciarCalculadora() {
  alert("¡Bienvenido al simulador de calculadora!");

  let seguir = true;

  while (seguir) {
    const operacion = prompt("¿Qué operación querés hacer? (sumar, restar, multiplicar, dividir)").toLowerCase();
    const numero1 = parseFloat(prompt("Ingresá el primer número:"));
    const numero2 = parseFloat(prompt("Ingresá el segundo número:"));
    let resultado;

    switch (operacion) {
      case "sumar":
        resultado = numero1 + numero2;
        break;
      case "restar":
        resultado = numero1 - numero2;
        break;
      case "multiplicar":
        resultado = numero1 * numero2;
        break;
      case "dividir":
        if (numero2 !== 0) {
          resultado = numero1 / numero2;
        } else {
          alert("No se puede dividir por cero.");
          continue;
        }
        break;
      default:
        alert("Operación no válida.");
        continue;
    }

    alert(`El resultado de ${operacion} es: ${resultado}`);
    console.log(`Operación: ${operacion}, Resultado: ${resultado}`);

    seguir = confirm("¿Querés hacer otra operación?");
  }

  alert("¡Gracias por usar la calculadora!");
}
