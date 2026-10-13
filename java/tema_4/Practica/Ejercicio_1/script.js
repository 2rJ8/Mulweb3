/*
Haz una función que calcule y devuelva el número de vocales en la 
cadena dada. Consideraremos a, e, i, o, u como vocales. La cadena de 
entrada sólo consta de letras minúsculas y/o espacios. 

*/

/**
 * Count the amount of vocals in the input string
 * @function vocalsInWord
 * @param {"string"} word
 * @returns {int}
 */

function vocalsInWord(word) {
  const vocals = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vocals.includes(word.charAt(i))) count++;
  }
  return count;
}

const palabra = "patata";

console.log(
  "el numero de vocales el la palabra " +
    palabra +
    " es: " +
    vocalsInWord(palabra),
);
