/* 
 Los cajeros automáticos permiten códigos PIN de 4 o 6 dígitos y los 
códigos PIN no pueden contener más que exactamente 4 dígitos o 
exactamente 6 dígitos. Si a la función se le pasa una cadena de PIN 
válida, devuelve true, de lo contrario devuelve false. 
*/
/**
 * Count the amount of vocals in the input string
 * @function vocalsInWord
 * @param {"int"} pin
 * @returns {"boolena"}
 */

function isValidPin(pin) {
  if (typeof pin === "number") {
    return pin.toString().length === 4 || pin.toString().length === 6;
  } else return false;
}

const palabra = 123548;

console.log("el pin " + palabra + " es: " + isValidPin(palabra));
