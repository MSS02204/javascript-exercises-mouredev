// Funciones

//Simple
function myFunc() {
    console.log("¡Hola, función!")
}

for(let i = 0; i < 5; i++) {
    myFunc(); // Llamada a la función dentro del bucle
}

// Con parámetros
function myFuncWithParams(name) {
    console.log(`¡Hola, ${name}!`)
}

myFuncWithParams(); // Llamada sin argumentos. Imprime "¡Hola, función! undefined!"

myFuncWithParams("Brais"); // Llamada con argumento. Imprime "¡Hola, Brais!"
myFuncWithParams("MoureDev"); // Llamada con argumento. Imprime "¡Hola, MoureDev!"



// Funciones anónimas
const myFunc2 = function (name) { //función que no tiene nombre, lo que tiene nombre es la constante o la variable que la contiene
        console.log(`¡Hola, ${name}!`)
}

myFunc2("Brais Moure"); // Llamada con argumento. Imprime "¡Hola, Brais!"



// Arrow functions 
const myFunc3 = (name) => {
    console.log(`¡Hola, ${name}!`)
}
myFunc3("Brais Moure"); // Llamada con argumento. Imprime "¡Hola, Brais Moure!"

//  (puede usarlo cuando solo quieres hacer la funcion en una sola linea)
const myFunc4 = (name) => console.log(`¡Hola, ${name}!`)
myFunc4("Brais Moure"); 



// Parámetros
function sum(a,b) {
    console.log(a + b)
}

sum(5,10); // Llamada con argumentos. Imprime 15
sum(5) // Imprime NaN (Not a Number) porque b es undefined
sum() // Imprime NaN porque a y b son undefined.
//NaN es un valor especial en JavaScript que indica que el valor no es un número válido.


function defaultSum(a = 0, b = 0) { // Asignación de valores por defecto
    console.log(a + b)
}

// por defecto los parametros a y b valen 0
defaultSum() // Imprime 0 porque a y b toman los valores por defecto
defaultSum(5) // Imprime 5 porque a es 5 y b toma el valor por defecto
defaultSum(5, 10) // Imprime 15 porque a es 5 y b es 10
defaultSum(b = 5) // Imprime 5 porque a toma el valor por defecto y b es 5


// Retorno de valores
function  mult(a, b) {
    return a * b
}
// mult(5, 10) // Llamada con argumentos. Retorna 50 pero no lo muestra por pantalla
// console.log(mult(5, 10)) // Llamada con argumentos. Imprime 50

let result = mult(5, 10) // Llamada con argumentos. Retorna 50 y lo guarda en la variable result
console.log(result) // Imprime 50


// Funciones anidadas
function extern () {
    console.log("Función externa")
    function intern () {
        console.log("Función interna")
    }
    intern() // Llamada a la función interna. Imprime "Función interna"
}

extern() // Llamada a la función externa. Imprime "Función externa"
// intern() -> Error: fuera del scope(la debes llamar dentro de la funcion extern) 
// Error: intern is not defined, porque la función interna no es accesible desde fuera de la función externa
// el scope es el ámbito de validez de una variable o función, es decir, el contexto en el que se pueden acceder a ellas.


//ejemplo de otra función anidada
// function extern (param) {
//     console.log("Función externa")
//     function intern (param) {
//         return console.log("Función interna")
//     }
//     return intern() // Llamada a la función interna. Imprime "Función interna"
// }
// extern() // Llamada a la función externa. Imprime "Función externa"



// Funciones de orden superior (son funciones que reciben otras funciones como argumentos)
function applyFunc(func, param) {
    func(param)
}

applyFunc(myFunc4, "Función de orden superior") // Llamada con argumento. Imprime "¡Hola, Función de orden superior!"

// forEach (es una función que nos sirve para ejecutar bucles asociados a elementos iterables)
myArray = [1, 2, 3, 4]

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"]) 

myMap = new Map([
    ["name", "Brais"],
    ["email", "braismoure@mouredev.com"],
    ["age", 37]
])

// forEach es una operación, función, método que tienen los arrays de JavaScript y que ejecutan un for directamente
// forma larga
myArray.forEach(function(value) {
    console.log(value)
}) // Imprime 1 2 3 4 en líneas separadas

// forma corta con arrow function
myArray.forEach((value) => console.log(value)) // Imprime 1 2 3 4 en líneas separadas

mySet.forEach((value) => console.log(value))

myMap.forEach((value) => console.log(value))

// forEach son mucho más concisos, legibles que ejecutar un for o un while.
// forEach no pueden detenerse con el break o con el continue, no retorna un nuevo array como en otros casos.



