// set (listado de elemetos ordenados con un hash(codigo unico) para cada elemento, no permite elementos duplicados)

// Declaración

let mySet = new Set()
// let mySet2 = {} // esto no es un set, es un objeto vacío

console.log(mySet) // imprime Set(0) {}
// console.log(mySet2) // imprime {}

// Inicialización
// mySet = new Set("Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com") //esto esta mal
// console.log(mySet) // imprime Set(5) { 'B', 'r', 'a', 'i', 's'}

mySet = new Set(["Brais", "Moure", "mouredev", 37, true, "braismoure@mouredev.com"])
console.log(mySet) // imprime Set(6) { 'Brais', 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com' }

// Metodos comunes

// add y delete
mySet.add("https://moure.dev")
console.log(mySet) // imprime Set(7) { 'Brais', 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com', 'https://moure.dev' }

mySet.delete("https://moure.dev") //debes indicar que elemento eliminar
// console.log(mySet[4]) // imprime undefined, no se accede por indice en los sets
console.log(mySet) // imprime Set(6) { 'Brais', 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com' }

//el set no tiene acceso a los indices.
console.log(mySet.delete("Brais")) // imprime true (elimina el elemento y devuelve true)
console.log(mySet.delete(4)) // imprime false (no existe el elemento 4, devuelve false)

console.log(mySet) // imprime Set(5) { 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com' }

//se puede realizar en condicionales
// if(mySet.delete(4)){
// } else {
    
// }


// has (verifica si un elemento existe en el set)
console.log(mySet.has("Moure")) // imprime true
console.log(mySet.has("Brais")) // imprime false


// size (tamaño del set)
console.log(mySet.size) // imprime 5

// Convertir un set a array
let myArray = Array.from(mySet)
console.log(myArray) // imprime [ 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com' ]

//Convertir un array a set
mySet = new Set(myArray)
console.log(mySet) // imprime Set(5) { 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com' }   

// PRINCIPAL DIFERENCIA DE SET CON ARRAYS: NO PERMITE ELEMENTOS DUPLICADOS
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("braismoure@mouredev.com")
mySet.add("BraisMoure@mouredev.com")
console.log(mySet) // imprime Set(5) { 'Moure', 'mouredev', 37, true, 'braismoure@mouredev.com' }  (no añade elementos duplicados)