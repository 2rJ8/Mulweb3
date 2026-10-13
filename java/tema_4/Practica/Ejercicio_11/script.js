
/*
 El teorema de los cuatro cuadrados de Lagrange, también conocido 
como conjetura de Bachet, afirma que todo número natural puede 
representarse como la suma de cuatro cuadrados enteros.  
Haz una función que devuelva un array con los cuatro números naturales 
que cumplan el teorema dado un número natural pasado como argumento. 
 */



function cuatroCuadrados(n) {
    if (!Number.isSafeInteger(n) || n < 0) {
        throw new RangeError("El número debe ser un entero no negativo");
    }

    for (let a = Math.floor(Math.sqrt(n)); a >= 0; a--) {
        const restoA = n - a * a;

        for (let b = Math.floor(Math.sqrt(restoA)); b >= 0; b--) {
            const restoB = restoA - b * b;

            for (let c = Math.floor(Math.sqrt(restoB)); c >= 0; c--) {
                const restoC = restoB - c * c;
                const d = Math.floor(Math.sqrt(restoC));

                if (d * d === restoC) {
                    return [a, b, c, d];
                }
            }
        }
    }

    return null;
}

console.log(cuatroCuadrados(30));
// Resultado: [5, 2, 1, 0]
