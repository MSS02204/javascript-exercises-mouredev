// Funciones avanzadas

// Ciudadanos de primera clase 
// (son entidades que se pueden tratar como cualquier otro valor del lenguaje)
// un valor se puede almacenar en una variable, constante, objeto.
// Un valor podemos pasarlo como parametro a función o retornar en una función
const greet = function (name) {
    console.log(`Hola, ${name}`)
}

greet("Brais")
console.log("\n")

// pasar una función como parámetro
function processGreeting(greetFunction, name) {
    greetFunction(name)
}
processGreeting(greet, "MoureDev")

// funcion puede retornar otra función
function returnGreeting() {
    return greet
}

// llamar a la función retornada
const greet2 = returnGreeting()
greet2("Brais Moure")




// Arrow functions avanzadas
// (no crean su propio contexto, ya que lo heredan del ámbito superior)
// - Retorno implícito
// RETORNO IMPPLÍCITO SOLO FUNCIONA EN ARROW FUNCTIONS Y NO NECESITA DEL RETURN NI LLAVES
console.log("\n")
const multiply = (a, b) => a * b
console.log(multiply(2, 5))


// - this léxico
const handler = {
    name : "Brais",
    greeting: function() {
        console.log(`Hola, ${this.name}`)
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`)
    }
}

handler.greeting() // Hola, Brais
handler.arrowGreeting(); // Hola, undefined, porque this no apunta al objeto handler, sino al contexto superior (global en este caso)
//Se debe poner el ; para delimitar la expresión anterior de la siguiente línea




// IIFE (Immediately Invoked Function Expression: Expresión de Función Invocada Inmediatamente)
// Se les invocan en el momento en que se definen
// - IIFE Clásico
(function () {
    console.log("IIFE clásico")
})();
// no se suele meter parametros en IIFE clásicas, ya que se va invocar directamente
// Debemos indicar que es independiente, entonces vamos a ver de que encuentra todo el contexto de lo escrito anteriormente.
(function () {
    console.log("IIFE con arrow function")
})();

// LA FUNCION DE LAS IIFE ES UNA BUENA FORMA DE EJECUTAR UN CODIGO
// CONCRETO Y NO CONTAMIINAR EL ÁMBITO GLOBAL




// Parámetros Rest(...). Cuando no sabemos que parametros puede recibir una funcion,
// podemos usar los parámetros rest, es una sintaxis que va a agrupar todos los argumentos adicionales en un array
function sum(...numbers) { //numbers se recibe como un array
    // console.log(numbers) el anterior ejemplo
    let result = 0
    for(let number of numbers) {
        result += number
    }
    return result
}
// sum(1,2,3,4,5) // [1,2,3,4,5] primer ejemplo
// sum(10, 15) // [10, 15] primer ejemplo
console.log(sum(1,2,3,4,5)) // 15
console.log(sum(10, 15)) // 25
// El parametro rest genera un array automaticamente con los parametros




// Parámetros Spread(...) vale para expandir elementos de un array, los objetos en argumentos o de otra estructura 
const numbers = [1, 2, 3]
function sumWithSpread(a, b, c) {
    return a + b + c
}

console.log(sumWithSpread(1,2,3)) // Imprime 6
console.log(sumWithSpread(...numbers)) // equivale a sumWithSpread(1, 2, 3). Imprime 6
// Diferencia entre rest y spread: 
// rest: lo que recibe lo empaqueta en un array
// spread: un array lo desempaqueta, lo expanda 




// Closures (Clausuras) se ejecuta tantas veces como querramos pero conservando el scope de la funcion que la esta conteniendo
// Una función, que es interna a otra función, va a acceder a variables de la función externa, incluso después de que 
// la función externa haya terminado su ejecución
function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador:${counter}`)
    }
}
const counter = createCounter()
counter() // Contador:1
counter() // Contador:2
counter() // Contador:3
counter() // Contador:4
// con el counter lo que se ejecuta es la función interna
// executeCounter() // Error: executeCounter no está definida
//una funcion interna accede al scope de la funcion externa
// scope significa el contexto de las variables

const counter2 = createCounter()
counter2() // Contador:1
counter2() // Contador:2
counter2() // Contador:3
counter2() // Contador:4




// Recursividad es una funcion que se llama a si misma, pero debemos delimitar un contexto donde deje de llamarse a si misma
//  (funcion capaz de invocarse así misma)
//factorial de 5 = 5 * 4 * 3 * 2 * 1 = 120

// ERROR DE DESBORDAMIENTO DE PILA (STACK OVERFLOW)
// function myFunction() {
//     myFunction()
// }
// myFunction() // Llamada infinita, provoca un error de desbordamiento de pila (stack overflow)


function factorial(n) {
    if (n <= 1) return 1
    return n * factorial(n - 1)
}

console.log(factorial(1)) // 1
console.log(factorial(2)) // 2
console.log(factorial(3)) // 6
console.log(factorial(0)) // 1, ya que 0! = 1 por definición
console.log(factorial(5)) // 120




// Funciones parciales
// es la idea de dividir una funcion con varios parametros en funciones mas pequeñas que reciben parte de los parametros
// y retornan una nueva funcion que espera los siguientes parametros (teniendo que hacer como una doble invocación)
// function sum(a, b, c) {
//     return a + b + c
// }

function partialSum(a) {
    return function(b, c) {
        return sum(a, b, c)
    }
}
const sumWith = partialSum(4) // fijamos el primer parametro a 4
console.log(sumWith(2, 3)) // Imprime 9
console.log(sumWith(1, 2)) // Imprime 7
console.log("\n")
// eso no enseño Brais 
//partialSum(4)(5,10) // Imprime 19
// console.log(partialSum(4)(5,10)) // Imprime 19




// Currying
// transformar una función que recibe varios parametros, varios argumentos en una funcion que en 
// realidad va a recibir uno cada vez
function currySum(a){
    return function(b) {
        return function (c) {
            return sum(a, b, c)
        }
    }
}

const sumAB = currySum(1)(2) // Imprime 9
console.log(sumAB) // Imprime [Function (anonymous)]
console.log(sumAB(3)) // Imprime 6
console.log(sumAB(4)) // Imprime 7
console.log(sumAB(5)) // Imprime 8
console.log("\n")
function currySum2(a){
    return function (b) {
        return function (c) {
            return function (d) {
                return sum(a, b, c, d)
            }
        }
    }
}
const sumAB2 = currySum2(1)(2)
const sumC = sumAB2(3) 
console.log(sumC(3)) // Imprime 9
console.log(sumC(4)) // Imprime 10
// Si no quiero sumaAB2 3, entonces lo puedes cambiar asi
console.log(sumAB2(5)(7)) // Imprime 15
console.log("\n")



// Callbacks
// a una funcion le pasamos otra funcion como argumento para acabar personalizando su comportamiento
function processData(data, callback) {
    const result = sum(...data)
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

 processData([1, 2, 3], processResult) // Imprime 6
 processData([1, 2, 3], processResult2) // Imprime 6
 processData([1, 2, 3], (result) => {
    console.log(`Mi resultado en la arrow function es: ${result}`)
 }) // Imprime Mi resultado en la arrow function es: 6


// function fetchData(callback) {
//     setTimeout(() => {
//         const data = { name: "Brais Moure" }
//         callback(data)
//     }, 2000)
// }
// fetchData(function (data) {
//     console.log("Datos recibidos:", data)
// })  
// despues de 2 segundos imprime: Datos recibidos: { name: 'Brais Moure' }

// fecth significa obtener datos de una fuente externa, como una API o una base de datos