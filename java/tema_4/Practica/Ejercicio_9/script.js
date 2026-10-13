/*
Haz una función que pueda tomar cualquier número entero no 
negativo como argumento y devolverlo con sus dígitos en orden 
descendente. Esencialmente, reordenar los dígitos para crear el 
mayor número posible. 
Entrada: 42145 Salida: 54421 
Entrada: 145263 Salida: 654321 
Entrada: 123456789 Salida: 987654321 

*/




/**
 * Sorts the digits of a non-negative integer in descending order
 * @function descendingOrder
 * @param {number} n
 * @returns {number}
 */
function descendingOrder(n) {
    return Number(
        n.toString()
            .split("")
            .sort((a, b) => b - a)
            .join("")
    );
}
console.log(descendingOrder(145263));