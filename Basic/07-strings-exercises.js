// 1. Concatena dos cadenas de texto
let text1 = "Hola, profesor "
let text2 = "Francisco!"

console.log(text1 + text2)

// 2.  Muestra la longitud de una cadena de texto
let exaText = "JavaScript es genial"
console.log(exaText.length)

// 3. Muestra el primer y el último carácter de un string
let txt3 = "JavaScript"
console.log(txt3[0]) // Primer carácter
console.log(txt3[txt3.length -1]) // Último carácter

// 4. Convierte a mayúsculas y minúsculas un string
let convertTxt = "Hola Mundo"
console.log(convertTxt.toUpperCase()) // Mayúsculas
console.log(convertTxt.toLowerCase()) // Minúsculas

// 5. Crea una cadena de texto en varias líneas
let lotlines = `Esto 
es un
poema hecho en 
programacion JavaScript.`
console.log(lotlines)

// 6. Interpola el valor de una variable en un string
let interTxt = "MoureDev"
console.log(`Gracias a ${interTxt} estoy aprendiendo JavaScript.`)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
let texto = "Aprende JS con MoureDev"
console.log(texto.replace(/ /g, "-")) // g de global para reemplazar todas las ocurrencias
console.log(texto.split(" ").join("-"))
console.log(texto.replaceAll(" ", "-"))
console.log(texto.replace(/ /gi, "-")) //gi para que no distinga mayusculas y minusculas

// 8. Comprueba si una cadena de texto contiene una palabra concreta
let nameClub = "Real Madrid Club de Fútbol"
console.log(nameClub.includes("Futbol")) // false
console.log(nameClub.includes("Fútbol")) // true

// 9. Comprueba si dos strings son iguales
let txtOne = "JavaScript"
let txtTwo = "Python"
console.log(txtOne == txtTwo) // false
console.log(txtOne == "JavaScript") // true
console.log(txtTwo == txtTwo) // true

console.log(txtOne === txtOne) // false
console.log(txtOne === 6) // false
console.log(txtTwo === txtOne) // true

// 10. Comprueba si dos strings tienen la misma longitud
let strOne = "Hola"
let strTwo = "Hello"
console.log(strOne.length == strTwo.length) // false