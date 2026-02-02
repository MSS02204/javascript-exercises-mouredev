// 1. Crea una función isEven(number) que devuelva true si el número es par y false si es impar
// 2. Escribe una prueba en Jest para verificar que la función funciona correctamente
// 3. Verifique que la prueba se ejecuta satisfactoriamente
function isEven(number) {
    let isEven = false
    if(number % 2 === 0) {
        isEven = true
    }
    return isEven
}

module.exports = isEven; // Exporta la función isEven para que pueda ser utilizada en otros archivos de prueba.

console.log(isEven(4)) // true
console.log(isEven(7)) // false

console.log("----------------------")


