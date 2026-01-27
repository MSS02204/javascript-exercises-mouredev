// 1. Utiliza map, filter o reduce para crear un ejemplo diferente al de la lección
let myArray = [1, 2, 4, 6, 8]
console.log(myArray) // imprime [ 1, 2, 4, 6, 8 ]
let operationWithMap = myArray.map(num => num * 10 / 4) // ejemplo de map que multiplica por 2 y divide entre 4
console.log(operationWithMap) // Imprime [ 2.5, 5, 10, 15, 20 ]


let operationWithFilter = myArray.filter(number => number > 4) // ejemplo de filter que filtra los números mayores que 4
console.log(operationWithFilter) // Imprime [ 6, 8 ]
myArray = ["hola", "Mundo", 123, 23, NaN]
operationWithFilter = myArray.filter(number => isNaN(number)) // ejemplo de filter que filtra los elementos que no son números (NaN)
console.log(operationWithFilter) // Imprime [ 'hola', 'Mundo' ]

myArray = [3, 4, 5, 10]
console.log(myArray) // imprime [ 3, 4, 5, 10]
let mult = myArray.reduce((result, current) => result * current, 1) // ejemplo de reduce que multiplica todos los elementos del array
console.log(mult) // Imprime 600 que sale de la operación (3*4*5*10)
console.log("\n")

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
let numbersArray = [1, 2, 3, 4, 5]
let operation = numbersArray.map(n => n ** 3).filter(n => n % 2 == 0)
console.log(operation) // Imprime [ 8, 64 ] que sale de elevar al cubo los números y filtrar los pares (2^3=8, 4^3=64)
console.log("\n")

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
let flatUse = [ "hola", ["melisa", ["como", ["te", ["va?"]]]]]
let resultFlat = flatUse.flat(2) // ejemplo de flat que aplana el array dos niveles
console.log(resultFlat) // Imprime [ 'hola', 'melisa', 'como', [ 'te', [ 'va?' ] ] ]
console.log(flatUse.flat(5)) // Imprime [ 'hola', 'melisa', 'como', 'te', 'va?' ]


let nestedArray2 = [[1, 2], [3, 4], [5, 6]]
console.log(nestedArray2) // Imprime [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
let flatArray2 = nestedArray2.flat() // por defecto aplana un nivel
console.log(flatArray2) // Imprime [1, 2, 3, 4, 5, 6]
console.log("\n")

let arraysWithDuplicates = [[1, 2, 3], [3, 4, 5]]
let flatMapped = arraysWithDuplicates.flatMap(arr => arr.filter(num => num > 2)) // ejemplo de flatMap que filtra los números mayores que 2 en cada sub-array y aplana el resultado
console.log(flatMapped) // Imprime [ 3, 3, 4, 5 ]
console.log("\n")

let txtArrays = ["Hola mundo developer 2026, la IA nos reemplazará?"]
let flatMapUse = txtArrays.flatMap(texto => texto.split(" ")) // ejemplo de flatMap que divide el string en un array por espacios en blanco
console.log(flatMapUse) // Imprime [ 'Hola', 'mundo', 'developer', '2026,', 'la', 'IA', 'nos', 'reemplazará?' ]

let numbersArr = [1, 3, 56, 78, 90]
let flatMapUse2 = numbersArr.flatMap(num => num.toString().split("")) // ejemplo de flatMap que convierte cada número a string y lo divide en un array
console.log(flatMapUse2) // Imprime [ '1', '3', '5', '6', '7', '8', '9', '0' ]
numbersArr = ["1", "3", "56", "78", "90"]
flatMapUse2 = numbersArr.flatMap(num => num.split("")) // ejemplo de flatMap que divide cada string en un array de caracteres
console.log(flatMapUse2) // Imprime [ '1', '3', '5', '6', '7', '8', '9', '0' ]
console.log("\n")


// 4. Ordena un array de números de mayor a menor
let arraysToSort = [10, 3, 6, 2, 9, 1, 7]
console.log("Array Original:", arraysToSort) // Imprime [ 10, 3, 6, 2, 9, 1, 7 ]
let arraySorted = arraysToSort.sort((a, b) => a - b) // ordena de menor a mayor
console.log("Array ordenado de menor a mayor:", arraySorted) // Imprime [ 1, 2, 3, 6, 7, 9, 10 ]
let arraySorted2 = arraysToSort.sort((a, b) => b - a) // ordena de mayor a menor
console.log("Array ordenado de mayor a menor:", arraySorted2) // Imprime [ 10, 9, 7, 6, 3, 2, 1 ]
console.log("\n")


// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
let n1Array = new Set([1, 4, 6, 8, 8, 10, 12])
let n2Array = new Set([1, 4, 4, 5, 7, 9, 10, 11, 12])
console.log(n1Array)
console.log(n2Array)
console.log("Set Union: ")
let union = new Set([...n1Array, ...n2Array]) // unión de dos sets
console.log(union) // Imprime Set(10) { 1, 4, 6, 8, 10, 12, 5, 7, 9, 11 }

let intersection = new Set([...n1Array].filter(num => n2Array.has(num))) // intersección de dos sets
console.log("Set Intersection: ")
console.log(intersection) // Imprime Set(4) { 1, 4, 10, 12 }

let difference = new Set([...n1Array].filter(x => !n2Array.has(x))) // diferencia de dos sets
console.log("Set Difference: ")
console.log(difference) // Imprime Set(2) { 6, 8 }
console.log("\n")


// 6. Itera los resultados del ejercicio anterior
console.log("Iterating Set Union:")
union.forEach(element => console.log(element)) // itera la unión del set. Imprime 1,4,6,8,10,12,5,7,9,11
console.log("Iterating Set Intersection:")
intersection.forEach(num => console.log(num)) // itera la intersección del set. Imprime 1,4,10,12
console.log("Iterating Set Difference:")
difference.forEach(x => console.log(x)) // itera la diferencia del set. Imprime 6,8
console.log("\n")

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
let userMap = new Map([
    ["user1", {name: "Melisa", age: 23, email: "m@example.com"}],
    ["user2", {name: "Jose", age: 30, email: "j@example.com"}],
    ["user3", {name: "Tobias", age:15, email: "t@example.com"}]
])

userMap.forEach((value, key) => {
    console.log(`Clave: ${key}, Nombre: ${value.name}, Edad: ${value.age}, Email: ${value.email}`)
})
console.log("\n")
// otra forma de crear el mapa sin mostrar numero de usuario como clave
let userMap2 = new Map([
    ["name", "Melisa"],
    ["age", 23],
    ["email", "m@example.com"],
    ["name", "Jose"],
    ["age", 30],
    ["email", "j@example.com"],
    ["name", "Tobias"],
    ["age",21],
    ["email", "t@example.com"]
])
userMap2.forEach((value, key) => {
    console.log(`Clave: ${key}, Valor: ${value}`)
})
console.log("\n")

// 8. Dado el mapa anterior, crea un array con los nombres
let mapToArray = Array.from(userMap.values()).map(user => user.name) // convierte los valores del mapa en un array y extrae los nombres
console.log(mapToArray)
// otros resultados para imprimir los valores y las claves del mapa
mapToArray = Array.from(userMap) // convierte los valores del mapa en un array
console.log(mapToArray)
mapToArray = Array.from(userMap.values()) // convierte los valores del mapa en un array
console.log(mapToArray)
mapToArray = Array.from(userMap.keys()) // convierte las claves del mapa en un array
console.log(mapToArray)
console.log("\n")


// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
let arr = Array.from(userMap.values()) // convierte los valores del mapa en un array
console.log(arr)
let emailSet = new Set(arr.filter(user => user.age >= 18).map(user => user.email)) // filtra los usuarios mayores de edad y extrae sus emails
console.log(emailSet) // Imprime Set(2) { 'm@example.com', 'j@example.com' }

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en una mapa como clave el email de cada usuario y como valor todos los datos del usuario
let obj = Object.fromEntries(userMap) // transforma el mapa en un objeto
console.log(obj)
let mapToObj = new Map([
    ["m@example.com", {user: "User01", name: "Melisa", age: 23}],
    ["j@example.com", {user: "User02", name: "Jose", age: 30}],
    ["t@example.com", {user: "User03", name: "Tobias", age: 15}]
])

console.log(mapToObj) // transforma el objeto en un mapa con el email como clave y los datos del usuario como valor


// otra forma de hacerlo
const usersObject = Object.fromEntries(userMap) // transforma el mapa en un objeto
const emailToUserMap = new Map() // crea un nuevo mapa
for (const key in usersObject) { // itera sobre las claves del objeto, que es cada usuario
    const user = usersObject[key] // obtiene los datos del usuario
    emailToUserMap.set(user.email, user) // usa el email como clave y los datos del usuario como valor
}

console.log(emailToUserMap) // Imprime Map(3) {'m@example.com' => { name: 'Melisa', age: 23, email: 'm@example.com' },'j@example.com' => 
// { name: 'Jose', age: 30, email: 'j@example.com' },'t@example.com' => { name: 'Tobias', age: 15, email: 't@example.com' }}