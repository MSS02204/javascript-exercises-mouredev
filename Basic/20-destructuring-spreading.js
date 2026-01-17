// Desestructuración y propagación
// Desestructuración (es una sintaxis que nos permite extraer valores de arrays u objetos y asignarlos a variables individuales)

// puedes acceder al myArray sin que este empiece con let myArray, ya que no estamos creando una variable nueva, sino accediendo a una ya existente
// myArray = [1, 2, 3, 4] 
let myArray = [1, 2, 3, 4] 

let person = {
    name: "Brais",
    age: 37,
    alias: "MoureDev"
}

let myValue = myArray[1]
console.log(myValue) // Imprime 2

let myName = person.name
console.log(myName) // Imprime "Brais"



// Desestructuración

// Sintaxis en arrays (PUEDES COLOCARLE CUALQUIER NOMBRE A LAS VARIABLES)
// let myValue0, myValue1 = myArray
// console.log(myValue0) // Imprime undefined
// console.log(myValue1) // Imprime [ 1, 2, 3, 4 ]

// let [myValue0, myValue1] = myArray
// console.log(myValue0) // Imprime 1
// console.log(myValue1) // Imprime 2

// PUEDES COLOCARLE CUALQUIER NOMBRE A LAS VARIABLES
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray
console.log(myValue0) // Imprime 1
console.log(myValue1) // Imprime 2
console.log(myValue2) // Imprime 3
console.log(myValue3) // Imprime 4
console.log(myValue4) // Imprime undefined


// Sintaxis arrays con valores predeterminados
// [myValue0, myValue1, myValue2, myValue3, myValue4 = 0] = myArray
// console.log(myValue0) 
// console.log(myValue1) 
// console.log(myValue2) 
// console.log(myValue3) 
// console.log(myValue4) 
// // Imprime error ya que no se puede redefiniendo y al hacerlo asi, no se puede dar un valor predeterminado

let [myValue5 = 0, myValue6 = 0, myValue7 = 0, myValue8 = 0, myValue9 = 0] = myArray
console.log(myValue5) // Imprime 1
console.log(myValue6) // Imprime 2
console.log(myValue7) // Imprime 3
console.log(myValue8) // Imprime 4
console.log(myValue9) // Imprime 0

// con los valores predeterminados logras evitar el undefined en caso de que no 
// haya suficientes valores en el array para asignar a todas las variables.
console.log("\n")

// Ignorar elementos array
let [myValue10, , , myValue13] =myArray
console.log(myValue10)
console.log(myValue13)

console.log("\n")

// Sintaxis en objects (NO PUEDES COLOCARLE CUALQUIER NOMBRE A LAS VARIABLES, DEBE SER EL MISMO QUE LA PROPIEDAD DEL OBJETO)
let { name, age, alias} = person
console.log(name) // Imprime "Brais"
console.log(age) // Imprime 37
console.log(alias) // Imprime "MoureDev"



// Sintaxis objects con valores predeterminados (no tendria mucho sentido poner valores predeterminados en un objeto que ya tiene todas sus propiedades definidas, pero sirve para el caso en que falte alguna propiedad)
let { name2, age2, alias2, email = "email@email.com"} = person
console.log(name2) // Imprime undefined, ya que el nombre no existe en el objeto, es name (NO EXISTE)
console.log(age2) // Imprime undefined, ya que la edad no existe en el objeto, es age (NO EXISTE)
console.log(alias2) // Imprime undefined, ya que el alias no existe en el objeto, es alias (NO EXISTE)
console.log(email) // Imprime "email@email.com"



// Sintaxis objects con nuevos nombres de variables
let {name: name3, age: age3, alias: alias3 } = person
console.log(name3)
console.log(age3)
console.log(alias3)



// Objects anidados
let person3 = {
    name: "Brais",
    age: 37,
    alias: "MoureDev",
    walk: function() {
        console.log("La persona camina")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function() {
            console.log(`La persona de ${this.exp} años de experiencia trabaja`)
        }
    }
}

let { name: name4, job: { name: jobName} } = person3
console.log(name4)
console.log(jobName)



// Propagación (...) spread operator
// Sintaxis arrays
let myArray2 = [...myArray] // copia todos los elementos de myArray en myArray2
console.log(myArray2) // Imprime [ 1, 2, 3, 4 ]

// let myArray3 = myArray // no es una copia, es una referencia al mismo array (es igualar las referencias en memoria)
let myArray3 = [...myArray, 5, 6] // copia todos los elementos de myArray y agrega 5 y 6 al final
console.log(myArray3) // Imprime [ 1, 2, 3, 4, 5, 6 ]



// Combinación de arrays
let myArray4 = [...myArray, ...myArray2, ...myArray3]
console.log(myArray4) 



// Sintaxis objects
let person4 = {...person, email: "braismoure@mouredev.com" } // copia todas las propiedades de person en person4 y agrega la propiedad email
console.log(person4)

// Copia de objects
let person5 = {...person } // copia todas las propiedades de person en person5
console.log(person5) // Imprime { name: 'Brais', age: 37, alias: 'MoureDev' }