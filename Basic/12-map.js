// las estructuras sirven para almacenar en ellas un conjunto de datos

// Map (colección de elementos y cada elemento ya no es unico como el array ). Es paralelo al diccionario en Python.
// cada elemento esta formado por un par clave-valor (key-value pair). Claves de cualquier tipo y valores de cualquier tipo
// se puede almacenar cualquier tipo de dato.

// Declaración
let myMap = new Map()

console.log(myMap) // imprime Map(0) {}


// Inicialización
myMap = new Map([
    ["name", "Brais"], 
    ["email", "braismoure@mouredev.com"], 
    ["age", 37]
])

console.log(myMap) // imprime Map(3) { 'name' => 'Brais', 'email' => 'braismoure@mouredev.com', 'age' => 37 }

// Métodos y propiedades

// set

