// Este es un fichero de test asociado a 21-testing.js

// Eso significa que vamos a testear ese archivo

// import { sum } from './21-testing.js' // No sirve porque en 21-testing.js no se exporta como módulo ES6
const sum = require('./21-testing'); // Importa la función sum desde el archivo 21-testing.js usando CommonJS

test("Suma de 3 + 5 tiene que ser 8", () => {
    expect(sum(3, 5)).toBe(8)
})

test("Suma de 3 + 3 tiene que ser 6", () => {
    expect(sum(3, 4)).toBe(6)
})