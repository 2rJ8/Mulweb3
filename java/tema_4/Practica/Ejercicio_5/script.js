/*
 Implementar la función que toma como argumento una array de 
enteros o string, pueden ser híbrido, y devuelve una array de 
elementos sin ningún elemento repetido y preservando el orden 
original de los elementos.   
*/

/**
 * @param  {Array} nums
 * @returns {Array}
 */
function removeDuplicates(nums) {
  const seen = new Set();
  const result = [];
  for (const num of nums) {
    if (!seen.has(num)) {
      seen.add(num);
      result.push(num);
    }
  }
  return result;
}

const numbers = [3, 4, 5, 6, 4, 5, 7, 8, 7, 9];
console.log(removeDuplicates(numbers));
