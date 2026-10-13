
/*
 Escriba una función que tome un número decimal como entrada, y 
devuelva el número de bits que son iguales a uno en la 
representación binaria de ese número. Comprueba que la entrada no 
sea negativa.  

*/

/**
 * Counts the number of ones in the binary representation of a non-negative integer
 * @function countBits
 * @param {number} n
 * @returns {number}
 * @throws {RangeError} If n is negative or is not an integer
 */
function countBits(n) {
    if (!Number.isInteger(n) || n < 0) {
        console.error("El número debe ser un entero no negativo");
    }else{

        const binario = n.toString(2);
        let contador = 0;

        for (let i = 0; i < binario.length; i++) {
            if (binario[i] === "1") {
                contador++;
            }
        }
    }
    return contador;
}

console.log(countBits(1234)); 
