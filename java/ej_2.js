document.addEventListener("DOMContentLoaded", function () {
  const fomr = document.getElementById("form");

  fomr.addEventListener("submit", function (event) {
    event.preventDefault();
    const rawNumber = document.getElementById("number1").value;
    // comprobamos si es un tipo de dato valido y si no es un string vacío
    if ( rawNumber.trim() === "" || !isNumeric(rawNumber)) {
      console.log("Por favor, ingrese un número válido.");
      return;
    }
    const number = parseInt(rawNumber);
    const result = document.getElementById("result");
    // Comprobamos si el elemnto donde se mostrará el resultado es nulo y si formData es nulo
    if (result == null) {
      console.log("Result element is null");
    }
    if (number == null) {
      console.log("Form data is null");
    }
    // Comprobamos si el número es negativo y mostramos un mensaje de error si lo es
    if (number < 0) {
      console.log("Por favor, ingrese un número positivo.");
      return;
    }else{
      // Calculate the factorial and display the result
      result.textContent =
        "El factorial de " + number + " es: " + factorial(number);
    }
  });
});
/**
 * n - The number for which to calculate the factorial.
 * @returns The factorial of the number n.
 */
function factorial(n) {
  if (n < 0) {
    throw new Error("Factorial is not defined for negative numbers.");
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

function isNumeric(str) {
  if (typeof str != "string") return false ;
  return !isNaN(str) && 
         !isNaN(parseFloat(str));
}