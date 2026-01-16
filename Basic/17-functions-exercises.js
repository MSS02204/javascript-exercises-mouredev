// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios.

// 1. Crea una función que reciba dos números y devuelva su suma.
function mySum(a, b) {
    console.log(`Operación: ${a} + ${b} `)
    return a + b
}
let result = mySum(3,2)
console.log("Resultado: ", result) // Imprime 5

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos.
function funcArray(arr){
    let max = arr[0]
    for (let i = 1; i < arr.length; i++) { // Empezamos desde 1 porque ya asignamos arr[0] a max
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}

let numbers = [3,7,29,12,16]
let maxNum = funcArray(numbers)
console.log("\nEl número mayor del array es: ", maxNum) // Imprime 29

//otra forma
function mayorNum(array) {
    return Math.max(...array)
}
console.log("\nMayor número: ", mayorNum([5,3,8,21])) // Imprime 21


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene.
function myString(str) {
    let vocales = 'aeiouAEIOU'
    let count = 0
    for (let char of str) {
        if(vocales.includes(char)) { // includes() verifica si un string contiene un caracter específico
            count++
        }
    }
    return count
}

let txt = "Enumerar"
console.log("\nCantidad de vocales en " + txt + ":", myString(txt)) //Imprime 4


// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas.
function funcArrayConMayus(array) {
    let mayusArray = []
    for (let string of array) {
        mayusArray.push(string.toUpperCase())
    }
    return mayusArray
}

let arraySinMayus = ["hola", "mundo", "javascript"]
console.log("\nArray original:", arraySinMayus) // Imprime ["hola", "mundo", "javascript"]
console.log("Array nuevo en mayúsculas:", funcArrayConMayus(arraySinMayus)) // Imprime ["HOLA", "MUNDO", "JAVASCRIPT"]


//otra forma
function convertirAMayusculas(arr) {
    return arr.map(str => str.toUpperCase()) // map() crea un nuevo array con los resultados de la función aplicada a cada elemento
}
console.log("\nConvertido a mayúscula: ",convertirAMayusculas(["sony", "xbox", "nintendo"])) // Imprime ["SONY", "XBOX", "NINTENDO"]



// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario. 
function esPrimo(num) {
    if(num <= 1) return false // Los números menores o iguales a 1 no son primos
    //Math es un objeto global que tiene propiedades y métodos matemáticos.
    for (let i = 2; i <= Math.sqrt(num); i++) { //Solo necesitamos verificar hasta la raíz cuadrada del número. sqrt() devuelve la raíz cuadrada. 
        if (num % i === 0) {
            return false  // Si es divisible por algún número, no es primo
        }
    }
    return true // Si no es divisible por ningún número, es primo
}
let num = 30
let resultadoPrimo = ""
if(esPrimo(num)) {
    resultadoPrimo = "Es primo"
} else {
    resultadoPrimo = "No es primo"
}
console.log(`\n¿El número ${num} es primo?`,resultadoPrimo) // Imprime false


// function esPrimo(num) {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false;
//     }
//     return true;
// }
// console.log(esPrimo(7));  // Resultado: true
// console.log(esPrimo(10)); // Resultado: false


// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos.
function funcArrays(array1, array2) {
    let comunes = []
    for (let elem of array1) {
        if(array2.includes(elem)) { // includes() verifica si array2 contiene elem
            comunes.push(elem)
        }
    }
    return comunes
}
let a1 = [1,4,8,10]
let a2 = [3,4,5,6,9,10]

console.log("\nElementos comunes entre el array 1  y el array 2:", funcArrays(a1, a2)) // Imprime [4, 10]

// otra forma
function elementosComunes(arra1,arra2) {
    return arra1.filter(item => arra2.includes(item)) // filter() crea un nuevo array con todos los elementos que cumplan la condición
}
console.log("Elementos comunes: ", elementosComunes([1,2,3],[3,4,5])) // Imprime [3]

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares.
function sumaPares(array) {
    let suma = 0
    for (let num of array) {
        if (num % 2 == 0) { // === verifica igualdad estricta (valor y tipo)
            suma += num
        }
    }
    return suma
}

let arraySuma = [1,3,4,8,12,16,20]
console.log("\nSuma de números pares en el array:", sumaPares(arraySuma)) // Imprime 60

//otra forma
function sumaNumPares(arr) {
    return arr.filter(num => num % 2 == 0).reduce((accumulador,num) => accumulador + num, 0) //Aqui usamos filter para obtener solo los números pares y luego reduce para sumar esos números.
    //reduce sirve para reducir un array a un solo valor, en este caso, la suma de los números pares.
    // acc es el acumulador que guarda la suma parcial
}
console.log("Suma de números pares: ", sumaNumPares([1,2,3,4,5,6])) // Imprime 12


// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado.
function elevarAlCuadrado(array) {
    let arrayCuadrado = []
    for (let num of array) {
        arrayCuadrado.push(num * num)
    }
    return arrayCuadrado
}
let firstArray = [2,4,6,8]
console.log("\nArray original:", firstArray) // Imprime [2,4,6,8]
console.log("Array con números al cuadrado:", elevarAlCuadrado(firstArray)) // Imprime [4,16,36,64]

//otra forma
function alCuadrado(arr) {
    return arr.map(num => num ** 2) // ** es el operador de exponenciación
}
console.log("\nNúmeros al cuadrado: ", alCuadrado([4,8,12])) // Imprime [16,64,144]


// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso.
function invertirPalabras(cadena) {
    let palabras = cadena.split(" ") // split() divide un string en un array de palabras
    let palabrasInvertidas = palabras.reverse() // reverse() invierte el orden de los elementos en un array
    return palabrasInvertidas.join(" ") // join() une los elementos de un array en un string
}
let cadenaTexto = "Palacio Real"
console.log("\nCadena original:", cadenaTexto) // Imprime "Hola mundo desde JavaScript"
console.log("Cadena invertida:", invertirPalabras(cadenaTexto)) // Imprime "JavaScript desde mundo Hola"

function invertirTexto(str) {
    let caracteres = str.split("") // split() divide un string en un array de caracteres
    let caracteresInvertidos = caracteres.reverse() // reverse() invierte el orden de los elementos en un array
    return caracteresInvertidos.join("") // join() une los elementos de un array en un string
}

let txtOriginal = "Palacio Real"
console.log("\nCaracteres de Texto original:", txtOriginal) // Imprime "Palacio Real"
console.log("Caracteres de Texto invertido: ", invertirTexto(txtOriginal)) // Imprime "laeR oicalaP"

// otra forma con palabras
function invTxt(string) {
    return string.split(' ').reverse().join(' ') // Aquí dividimos por palabras en lugar de caracteres
}
console.log("\nTexto original:", "Hola mundo desde JavaScript") // Imprime "Hola mundo desde JavaScript"
console.log("Texto invertido por palabras: ", invTxt("Hola mundo desde JavaScript")) // Imprime "JavaScript desde mundo Hola"

// otra forma con caracteres
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}
console.log("\nCaracteres de Texto original:", "Hola mundo desde JavaScript") // Imprime "Hola mundo desde JavaScript"
console.log("Caracteres de Texto invertida: ", invertirCadena("Hola mundo desde JavaScript")) // Imprime "tpircSavaJ edsed odnum aloH"


// 10. Crea una función que calcule le factorial de un número dado. 
function calcFactorial(num) {
    if (num < 0 ) return "No existe el factorial de un número negativo"
    let factorial = 1
    for (let i = 2; i <=num; i++) {
        factorial *= i
    }
    return factorial
}
let numeroFactorial = 5
console.log(`\nEl factorial de ${numeroFactorial} es: `, calcFactorial(numeroFactorial)) // Imprime 120

// otra forma
function factorial(n) {
    if (n < 0) return "No existe el factorial de un número negativo";
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1); // Llamada recursiva donde la función se llama a sí misma hasta llegar a la base del caso
}
console.log("Factorial: ", factorial(6)); // Imprime 720

// otra forma
function fact(num) {
    if(num === 0 || num === 1) return 1
    let result = 1
    for(let i = 2; i <= num; i++) {
        result *= i
    }
    return result
}
console.log("Factorial: ", fact(4)) // Imprime 24