/*
Dada un array de enteros, encuentra todo los números que aparecen 
un número impar de veces.   
*/

/**
 * @param  {number[]} nums
 * @returns {number[]}
 */
function findOddOccurrences(nums) {
  const countMap = new Map();
  for (const num of nums) {
    countMap.set(num, (countMap.get(num) || 0) + 1);
  }
  const result = [];
  for (const [num, count] of countMap) {
    if (count % 2 !== 0) {
      result.push(num);
    }
  }
  return result;
}

const numbers = [3, 4, 5, 6, 4, 5, 7, 8, 7, 9];
console.log(findOddOccurrences(numbers));
