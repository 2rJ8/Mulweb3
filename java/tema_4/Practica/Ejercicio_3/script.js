/*
Haz una función  que como parámetro reciba un array de números y 
obtenga el número que menos repeticiones haya tenido. En caso de 
empate devuelve el número más pequeño.   
*/

/**
 * @param  {number[]} nums - Array of numbers
 * @returns {number}
 */
function minRepetitions(nums) {
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  let minCount = Infinity;
  let result = Infinity;
  for (const [num, count] of countMap) {
    if (count < minCount || (count === minCount && num < result)) {
      minCount = count;
      result = num;
    }
  }
  return result;
}

const numbers = [3, 4, 5, 6, 4, 5, 7, 8, 7, 9];
console.log(minRepetitions(numbers));
