// NOTA: Explora diferentes sintaxis de bucles para resolver los ejercicios

// 1. Crea un bucle que imprima los números del 1 al 20

for(let i = 1; i <= 20; i++) {
    console.log(`Número: ${i}`)
}
console.log("\n")
//otra forma
for(let i = 0; i < 20; i++) {
    console.log(`Número: ${i+1}`)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
let suma = 0
let number = 0

while (number < 100) {
    number++
    suma += number // suma = suma + number
    console.log(suma)
}

// otra forma con for
let suma2 = 0;
for (let i = 1; i <= 100; i++) {
    suma2 += i;
}
console.log(`\nLa suma de los números del 1 al 100 es: ${suma2} \n`);


// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
let n1 = 0
let esPar = false
while(n1 < 50) {
    if(n1 % 2 == 0) {
        console.log(n1)
    }    
    n1++
}
console.log("\n")

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
let nameArray = ["Melisa", "Channel", "Fiorella", "Bryan"]

for(let i = 0; i < nameArray.length; i++){
    console.log(nameArray[i])
}
console.log("\n")

// otra forma con while
let i = 0
while(i < nameArray.length){
    console.log(nameArray[i])
    i++
}
console.log("\n")

// otra forma con for of
for(values of nameArray) {
    console.log(values)
}
console.log("\n")

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
let vocales = ["a", "e", "i", "o", "u"]
let string = "Lenguaje"
let contador = 0

for(let i = 0; i < string.length; i++) {
    for(let j = 0; j < vocales.length; j++) {
        if(string[i].toLowerCase() == vocales[j]) {
            contador++
        }
    }
}
console.log("Cant de vocales: ", contador)


let str = "Melisa"
let cantVocales = 0

for(let i = 0; i < str.length; i++) {
    if(str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u"){
        console.log(str[i])
        cantVocales++
    }
}
console.log("Cantidad de vocales: ", cantVocales)


let str2 = "Manuela"
let iterador = 0
let cantVocales2 = 0


while(iterador < str2.length){
     if(str2[iterador] == "a" || str2[iterador] == "e" || str2[iterador] == "i" || str2[iterador] == "o" || str2[iterador] == "u"){
        console.log(str2[iterador])
        cantVocales2++
    }
    iterador++
}
console.log("Cantidad de vocales: ", cantVocales2)

//otra forma hecho por x usuario
const texto = "Educacion"
let contadorVocales = 0

for (const char of texto.toLowerCase()) {
    if ("aeiou".includes(char)) {
        contadorVocales++
    }
}
console.log("Vocaless: ", contadorVocales)


let txt2 = "Hola";
let contVocales = 0;
let vocales2 = ['a', 'e', 'i', 'o', 'u'];
let itr = 0;

while (itr < txt2.length) {
    if (vocales2.includes(txt2[itr].toLowerCase())) {
        contVocales++;
    }
    itr++;
}

console.log(`El número de vocales en el texto es: ${contVocales}`);


// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto. 
let arrayMult = [2,4,5]
let prod = 1

while(arrayMult.length > 0) {
    prod *= arrayMult.shift() // shift elimina el primer elemento del array y lo devuelve
}
console.log(prod)


// otra forma con for
let numArray = [3,7,14, 6]
let producto = 1

for(let i = 0; i < numArray.length; i++) {
    producto *= numArray[i]
}
console.log(producto)
console.log("\n")

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
//con while
let numero = 5
let i2 = 0
let resultado = 0
while(i2 <= 12){
    resultado = numero * i2
    console.log(`${numero} x ${i2} = ` + resultado)
    i2++
}
console.log("\n")

let numFijo = 5
let multi = 0

for(let i= 0; i <= 12; i++){
    multi = numFijo * [i]
    console.log(`${numFijo} x ${i} = ` + multi)
}
console.log("\n")

// 8. Usa un bucle para invertir una cadena de texto
let cadTexto = "Amigos"
let newCad = ""
for(let i = cadTexto.length - 1; i >= 0; i--) {
    console.log(cadTexto[i])
    newCad += cadTexto[i]
}
console.log(newCad)
console.log("\n")

//otra forma
cadTexto2 = "Amigos"
newCad2 = ""
for(let i = 0; i < cadTexto2.length; i++) {
    newCad2 = cadTexto2[i] + newCad2
    console.log(newCad2)
}
console.log(newCad2) // imprime "somigA"


// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
let result2 = [0,1]

for(let i = 2; i < 10; i++) {
    result2[i] = result2[i-1] + result2[i-2]     
    console.log(result2)
}
console.log(`Los primeros 10 números de la secuencia de Fibonacci son: ${result2}`)

// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
let arrayNumbers = [0,2,4,16,28,30]
let iterador3 = 0
let nArray = []

while(iterador3 < arrayNumbers.length){
    if(arrayNumbers[iterador3] > 10) {
        nArray.push(arrayNumbers[iterador3])
        console.log(nArray)
    }
    iterador3++
}
console.log(nArray)

// Otra forma
let numerosArray = [3,12,5,18,21]
let mayA10 = []

for(let i = 0; i < numerosArray.length; i++) {
    if(numerosArray[i] > 10) {
        mayA10.push(numerosArray[i])
    }
}

console.log(`Números mayores a 10: ${mayA10}`)