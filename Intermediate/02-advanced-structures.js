// Estructuras avanzadas
// arrays, sets y maps

//Arrays avanzados: métodos funcionales
// Métodos funcionales de los arrays: map, filter, reduce, find, some, every
// forEach
let numbers = [1, 2, 3, 4, 5, 6]
numbers.forEach(element => console.log(element)) // Imprime 1 2 3 4 5 6 en líneas separadas)
console.log("\n")


// map (retorna un nuevo array transformando cada elemento)
let doubled = numbers.map(element => element * 2)
console.log(doubled) // Imprime [2, 4, 6, 8, 10, 12]
//doubled.forEach(element => console.log(element * 2)) // Imprime 4 8 12 16 20 24 en líneas separadas
console.log("\n")


// filter (retorna un nuevo array con los elementos que cumplen una condición)
let evens = numbers.filter(element => element % 2 === 0) //evens significa pares
console.log(evens) // Imprime [2, 4, 6]
console.log("\n")


// reduce (reduce el array a un único valor, aplicando una función acumulativa)
// ejecuta una función reductora sobre cada uno de los elementos del array, lo va a reducir devolviendo un único valor
let sum = numbers.reduce((result, current) => result + current, 0)
console.log(sum) // Imprime 21 (1+2+3+4+5+6)
console.log("\n")
//estos son funciones que tienen asociadas los arrays
// funciones de orden superior porque reciben otras funciones como argumentos, llamada callback 
// y nos va a devolver esa función con un nuevo valor




//Arrays avanzados: manipulación
// Manipulación

// flat (aplana un array de arrays en un solo nivel)
let nestedArray = [1, [2, [3, [4]]]] //nested significa anidado
console.log(nestedArray) // Imprime [ 1, [ 2, [ 3, [Array] ] ] ]
let flatArray = nestedArray.flat(1) // el parámetro indica el nivel de profundidad a aplanar
console.log(flatArray) // Imprime [1, 2, [3, [4]]]
flatArray = nestedArray.flat(2)
console.log(flatArray) // Imprime [1, 2, 3, [4]]
flatArray = nestedArray.flat(3)
console.log(flatArray) // Imprime [1, 2, 3, 4]
console.log("\n")



// flatMap (mapea, por el criterio que le das al aplanamiento) y flat (aplana el array resultante en un solo nivel)
let phrases = ["Hola mundo", "Adiós mundo"]
let words = phrases.flatMap(phrase => phrase.split(" ")) // split divide un string en un array de strings, aqui lo hace por cada espacio en blanco
console.log(words) // Imprime [ 'Hola', 'mundo', 'Adiós', 'mundo' ]
console.log("\n")
// flatMap modifico el array phrases de dos elementos en un array words de cuatro elementos con la condición de separar por espacios en blanco que lo realiza split


//Arrays avanzados: Ordenación
// Ordenación
// sort por defecto ordena los elementos como strings, con números no funciona bien
let unsorted = ["b", "a", "d", "c"] 
let sorted = unsorted.sort() // sort devuelve un nuevo array pero ordenado
console.log(sorted) 

unsorted = [3, 4, 1, 6, 10]
sorted = unsorted.sort((a, b) => a - b) // ordena de menor a mayor
console.log(sorted) // Imprime [ 1, 10, 3, 4, 6 ] -> ordena como strings
// debemos indicarle cual es el criterio de ordenación
console.log("\n")


// reverse (invierte el orden de los elementos del array)
sorted.reverse()
console.log(sorted) // Imprime [ 6, 4, 3, 10, 1 ]
console.log("\n")




// Arrays avanzados: búsqueda
// Búsqueda
console.log(sorted.includes(4)) // devuelve true si el elemento existe en el array
console.log(sorted.includes(5)) // devuelve false si el elemento existe en el array
console.log("\n")


// find (devuelve el primer elemento que cumple una condición)
// sorted = [3, 7, 11]
// retorna undefined si no encuentra ningún elemento que cumpla la condición
let firstEven = sorted.find(element => element % 2 === 0) // devuelve 10 (el primer número par)
console.log(firstEven)
console.log("\n")


// findIndex (devuelve el índice del primer elemento que cumple una condición)
 sorted = [3, 7, 11]
// retorna -1 si no encuentra ningún elemento que cumpla la condición
let firstEvenIndex  = sorted.findIndex(element => element % 2 === 0) // devuelve 2 (índice del primer número par)
console.log(firstEvenIndex)
console.log("\n")




// Sets avanzados: operaciones
// un set nos vale para eliminar repetidos
// Operaciones 

// Eliminación de duplicados 
let numbersArray = [1, 2, 2 , 3, 4, 5, 6, 6]
// const numbersSet = [new Set(numbersArray)] // convierte el array en un set, eliminando los duplicados. Imprime [Set { 1, 2, 3, 4, 5, 6 }]
numbersArray = [...new Set(numbersArray)]
console.log(numbersArray) // convierte el set de nuevo en un array. Imprime [ 1, 2, 3, 4, 5, 6 ]
console.log("\n")


// Unión de sets (elementos de ambos sets)
const setA = new Set([1, 2, 3])
const setB = new Set([2, 3, 4, 5])
const union = new Set([...setA, ...setB])
// const union = new Set([setA, setB])
// console.log(union) // Imprime Set(2) { Set(3) { 1, 2, 3 }, Set(4) { 2, 3, 4, 5 } }
console.log(union)
console.log("\n")


// Intersección de sets (elementos que están en ambos sets)
const intersection = new Set([...setA].filter(element => setB.has(element))) // Imprime Set(2) { 2, 3 })
console.log(intersection)
console.log("\n")


// Diferencia de sets (elementos que están en setA pero no en setB)
// elementos que estan en uno pero que no estan en el otro
const difference = new Set([...setA].filter(element => !setB.has(element))) // Imprime Set(1) { 1 })
console.log(difference)
const difference2 = new Set([...setB].filter(element => !setA.has(element))) // Imprime Set(2) { 4, 5 })]
console.log(difference2)
console.log("\n")



// Sets avanzados: conversión
// Conversión
// De set a array
console.log(setA) // Imprime Set(3) { 1, 2, 3 }
console.log([...setA]) // Imprime Set(3) { 1, 2, 3 }
console.log("\n")


// Iteración con forEach
// forEach
setA.forEach(element => console.log(element)) // Imprime 1 2 3 en líneas separadas
console.log("\n")
// Filter, Map, Reduce no están disponibles en sets, solo en arrays. 
// Debes hacer la conversión a array primero para usarlos.




// Maps avanzados: iteración. 
// Iteración
// Maps también son colecciones, pero que funcionan de tipo clave-valor para ofrecernos metodos 
// muy útiles para acceder rapidamente a un dato concreto
let myMap = new Map([
    ["name", "MoureDev"],
    ["age", 37]
])
console.log(myMap) // Imprime Map(2) { 'name' => 'MoureDev', 'age' => 37 }
myMap.forEach((value, key) => console.log(`${key}: ${value}`)) //el primer parametro es el valor, no la clave. Imprime name: MoureDev age: 37 en líneas separadas
console.log("\n")

// Conversión 
// Mapa a Array
const arrayFromMap = Array.from(myMap) // convierte el map en un array de arrays
console.log(arrayFromMap) // Imprime [ [ 'name', 'MoureDev' ], [ 'age', 37 ] ]
console.log("\n")


// Mapa a Diccionario (objeto)
const objectFromMap = Object.fromEntries(myMap) // convierte el map en un objeto
console.log(objectFromMap) // Imprime { name: 'MoureDev', age: 37 }
console.log("\n")


// Objeto a Mapa
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject) // Imprime Map(2) { 'name' => 'MoureDev', 'age' => 37 }
console.log("\n")


