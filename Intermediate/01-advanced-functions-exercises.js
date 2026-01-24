// 1. Crea una función que retorne a otra función
function myFirstFunction() {
    return function() {
        console.log("Hola soy una función retornada")
    }
}
console.log(myFirstFunction()) // Imprime [Function (anonymous)]
const returnedFunction = myFirstFunction()
returnedFunction() // Imprime "Hola soy una función retornada"
console.log("\n")
 
// 2. Implementa una función currificada que multiplique 3 números
function curryMult(n1) {
    return function(n2) {
        return function (n3) {
            return n1 * n2 * n3
        }
    }
}

const multn1n2 = curryMult(5)(6) // Imprime [Function (anonymous)]
console.log("Resultado de multiplicación currying de 3 números:", multn1n2(10)) // Imprime 300
console.log("\n")

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
function recurPow(base, exponente) {
    if (exponente == 0) return 1
    return base * recurPow(base, exponente - 1) // 3^4 = 3 * 3^3 = 3 * 3 * 3^2 = 3 * 3 * 3 * 3^1 = 3 * 3 * 3 * 3 * 3^0 = 3 * 3 * 3 * 3 * 1 = 81
}
console.log("Resultado de potencia recursiva: ", recurPow(3,4)) // Imprime 81
console.log("Resultado de potencia recursiva: ", recurPow(2,0)) // Imprime 1
console.log("\n") 

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado.
function createCounter(iniValue) {
    let value = iniValue
    return {
        increment: function() {
            value++
        },
        decrement: function() {
            value--
        },
        getValue: function() {
            return value
        }
    }
}
const counter = createCounter(10)
console.log("Valor incial del contador: ", counter.getValue()) // Imprime 10
counter.increment()
console.log("Valor del contador después de incrementar: ", counter.getValue()) // Imprime 11
counter.decrement()
console.log("Valor del contador después de decrementar: ", counter.getValue()) // Imprime 10
console.log("\n")

// 5. Crea una función sumManyTimes(multiplier, ...number) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier.
function sumManyTimes(multiplier, ...number) {
    let result = 0
    for (let num of number) {
        result += num
        console.log("Suma: ", result)
    }
    return result * multiplier
}
const numMultiplier = 5
console.log(`Resultado de sumManyTimes: ${numMultiplier} x (1 + 2 + 3) =`, sumManyTimes(numMultiplier, 1,2,3)) // Imprime 30

// 6. Crea una Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

// 7. Desarrolla una función parcial

// 8. Implementa un ejemplo que haga uso de Spread

// 9. Implementa un retorno imp´lícito

// 10. Haz uso del this léxico