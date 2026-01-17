// 1. Usa desestructuración para extraer los dos primeros elementos de un array
let newArray = [10, 20, 30, 40, 50]

let [n1, n2, n3, n4, n5] = newArray
console.log(n1) // Imprime 10
console.log(n2) // Imprime 20

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
let array2 = [100, , 300]
let [a1, a2 = 200, a3] = array2
console.log(a1) // Imprime 100
console.log(a2) // Imprime 200
console.log(a3) // Imprime 300

// 3. Usa desestructuración para extraer dos propiedades de un objeto
let flat = {
    rooms: 6,
    bathrooms: 3,
    floors: 1,
    owner: {
        firstName: "Michael",
        age: 44
    }
}

let { rooms, bathrooms, floors, owner: { firstName, age} } = flat
console.log(rooms) // Imprime 6   
console.log(bathrooms) // Imprime 3   
console.log(floors) // Imprime 1
console.log(firstName) // Imprime "Michael"
console.log(age) // Imprime 44

// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas a nuevas variables con nombres diferentes
let house = {
    rooms: 4,
    bathrooms: 2,
    floors: 3,
    address: {
        street: "Calle Falsa",
        number: 123
    }
}

let { rooms: myRooms, bathrooms:myBathrooms, address: { street, number} } = house
console.log(myRooms) // Imprime 4   
console.log(myBathrooms) // Imprime 2   
console.log(street) // Imprime "Calle Falsa"
console.log(number) // Imprime 123

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado.
let car = {
    brand: "Nissan",
    model : "GT-R",
    price: 90000,
    engine: {
        horsepower: 600,
        type: "V6"
    }
}

let { engine: { horsepower, type } } = car
console.log(horsepower) // Imprime 600
console.log(type) // Imprime "V6"   

// 6. Usa propagación para combinar dos arrays en uno nuevo
let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
let arra3 = [...arr1, ...arr2]
console.log(arra3) // Imprime [ 1, 2, 3, 4, 5, 6 ]


// 7. Usa propagación para crear una copia de un array
let arraOrig = [7, 8, 9]
let arrCopy = [...arraOrig]
console.log(arrCopy) // Imprime [ 7, 8, 9 ]

// 8. Usa propagación para combinar dos objetos en uno nuevo
house = {...flat, ...car}
console.log(house) // Imprime { rooms: 6, bathrooms: 3, floors: 1, owner: { firstName: 'Michael', age: 44 },
                   //  brand: 'Nissan', model: 'GT-R', price: 90000, engine: { horsepower: 600, type: 'V6' } }
   
console.log("\n") 
                   
// 9. Usa propagación para crear una copia de un objeto
let mansion = {...flat}
console.log(mansion) // Imprime { rooms: 6, bathrooms: 3, floors: 1, owner: { firstName: 'Michael', age: 44 },

// 10. Combina desestructuración y propagación 
// con arrays (no se si estara bien)
let fruits = ["apple", "banana", "cherry"]
let [f1, f2, f3 ] = fruits
console.log(f1) // Imprime "apple"
console.log(f2) // Imprime "banana"
console.log(f3) // Imprime "cherry"

console.log(fruits) // Imprime [ 'apple', 'banana', 'cherry' ]
let fruitsCopy = [...fruits]
console.log(fruitsCopy) // Imprime [ 'apple', 'banana', 'cherry' ]

// con objetos (no se si estara bien)
let drink = {
    nameDrink: "soda",
    flavor: "cola",
    size: "large"
}

let {nameDrink, flavor, size} = drink
console.log(nameDrink) // Imprime "soda"
console.log(flavor) // Imprime "cola"
console.log(size) // Imprime "large"

console.log(drink) // Imprime { nameDrink: 'soda', flavor: 'cola', size: 'large' }
let drinkCopy = {...drink}
console.log(drinkCopy) // Imprime { nameDrink: 'soda', flavor: 'cola', size: 'large' }

// otra forma que no se si estara bien
let persona = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid"
}
let {nombre, ...restante} = persona
console.log(nombre) // Imprime "Juan"
console.log(restante) // Imprime { edad: 30, ciudad: 'Madrid' }