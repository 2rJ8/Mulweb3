
/*
Implementa una función de diferencia, que devuelva un array que 
tenga todos los valores de la lista pasada como primer parámetro 
que no están presentes en la lista b manteniendo su orden. Si un 
valor está presente en b, todas sus apariciones deben ser eliminadas 
de la otra: 
arrayDiff([1,2],[1]) == [2] 
arrayDiff([1,2,2,2,3],[2]) == [1,3] 
La representación binaria de 1234 es 10011010010, por lo que la función 
debería devolver 5 en este caso

*/


/**
 * Returns the elements from array a that are not present in array b
 * @function arrayDiff
 * @param {number[]} a
 * @param {number[]} b
 * @returns {number[]}
 */
function arrayDiff(a, b) {
    return a.filter(numero => !b.includes(numero));
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2]));
