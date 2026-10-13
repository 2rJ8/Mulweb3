
/*
 Ejercicio colorear triángulo 
Un triángulo de color se crea a partir de una fila de colores, cada uno de los 
cuales es rojo, verde o azul. Las filas sucesivas, cada una con un color 
menos que la anterior, se generan considerando los dos colores que se 
tocan en la fila anterior.  
Si estos colores son idénticos, se utiliza el mismo color en la nueva fila. Si 
son diferentes, se utiliza el color que falta en la nueva fila. Así se continúa 
hasta que se genera la última fila, con un solo color.


Se le dará la primera fila del triángulo como parámetro y la función debe 
devolver el color final que aparecería en la fila inferior como una cadena. En 
el caso del ejemplo anterior, se le dará "RRGBRGBB", y deberá devolver "G".

*/

/**
 * Calculates the final color of a triangle generated from a row of R, G and B colors
 * @function colorearTriangulo
 * @param {string} fila
 * @returns {string}
 */
function colorearTriangulo(fila) {
    const colores = ["R", "G", "B"];

    while (fila.length > 1) {
        let nuevaFila = "";

        for (let i = 0; i < fila.length - 1; i++) {
            const primero = fila[i];
            const segundo = fila[i + 1];

            if (primero === segundo) {
                nuevaFila += primero;
            } else {
                nuevaFila += colores.find(
                    color => color !== primero && color !== segundo
                );
            }
        }

        fila = nuevaFila;
    }

    return fila;
}

console.log(colorearTriangulo("RRGBRGBB"));
