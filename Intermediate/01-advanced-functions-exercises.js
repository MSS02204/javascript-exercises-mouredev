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
function sumWithCallback(callback, ...numbers) {
    let result = 0
    for (let num of numbers) {
        result += num
    }
    callback(result)
}

function printResult(result) {
    console.log("El resultado de la suma es: ", result)
}

sumWithCallback(printResult, 5,4,11) // Imprime 20
console.log("\n")


// 7. Desarrolla una función parcial
function operation(n1, n2, n3, txt) {
    return `${txt} : ${(n1 * n2) / n3}`
}

function partialOperation(funct, n1) {
    return function(n2, n3, txt) {
        return funct(n1, n2, n3, txt)
    }
}

const operationWith = partialOperation(operation, 10)
console.log(operationWith(2, 5, "El resultado de la operación parcial es")) // Imprime El resultado de la operación parcial es : 4
console.log("\n")

// 8. Implementa un ejemplo que haga uso de Spread
const strings = ["Hola", "mundo", "2026"]
function joinStrings(str1, str2, str3) {
    return `${str1} ${str2}, ${str3}`
}

console.log(joinStrings(...strings)) // Imprime Hola mundo, 2026
console.log("\n")


// 9. Implementa un retorno implícito
const sumAndDivision = (a, b, c) => (a + c) / b
console.log("Resultado de operación combinada con retorno implícito: ", sumAndDivision(10, 2, 6)) // Imprime 8
console.log("\n")
// RETORNO IMPPLÍCITO SOLO FUNCIONA EN ARROW FUNCTIONS Y NO NECESITA DEL RETURN NI LLAVES


// 10. Haz uso del this léxico
const myObject = {
    name: "MiObjeto", 
    regularFunction: function() {
        console.log(`Hola desde la función regular de ${this.name}`) // this apunta a myObject
    },
    arrowFunction: () => {
        console.log(`Hola desde la función arrow de ${this.name}`) // this no apunta a myObject, sino al contexto superior (global en este caso)
    }
}

myObject.regularFunction() // Imprime Hola desde la función regular de MiObjeto
myObject.arrowFunction(); // Imprime Hola desde la función arrow de undefined
// se debe poner el ; para delimitar la expresión anterior de la siguiente línea
console.log("\n")


const person = {
    name: "John", 
    greet: function() {
        console.log(`Hola, mi nombre es ${this.name}`); // this apunta a person
    },
    greet2: () => {
        console.log(`Hola, mi nombre es ${this.name}`); // this apunta a person
    }
};
person.greet(); // Imprime Hola, mi nombre es John.
person.greet2(); // Imprime Hola, mi nombre es undefined. ya que las arrow functions no tienen su propio this
const greetFunction = person.greet
greetFunction() // Imprime Hola, mi nombre es undefined., ya que this apunta al contexto global por perder el contexto del objeto person