// if/ else / else if / ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Melisa"
let n1 = 10

if(n1 = 10){
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con uno establecidos
let username = "user123"
let password = "pass123"

if(username === "user123" && password === "pass123"){
    console.log("Inicio de sesión exitoso")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = -5 

if(number > 0){
    console.log("El número es positivo")
} else if(number < 0){
    console.log("El número es negativo")
} else {
    console.log("El número es cero")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan 
let age = 16

if(age >= 18){
    console.log("Esta persona puede votar")
} else {
    console.log(`Esta persona nop puede votar, le faltan ${18-age} años.` )
}
// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
let edad = 20

const statusPerson = edad >= 18 ? "Adulto" : "Menor"
console.log(statusPerson)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let month = 7
if(month >= 3 && month <= 5){
    console.log("Estamos en primavera")
} else if(month >= 6 && month <= 8){
    console.log("Estamos en verano")
} else if(month >= 9 && month <= 11){
    console.log("Estamos en otoño")
} else if(month === 12 || month === 1 || month === 2){
    console.log("Estamos en invierno")
} else {
    console.log("Mes no válido")
}


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
if(month === 4 || month === 6 || month === 9 || month === 11){
    console.log("El mes tiene 30 días")
} else if(month === 2){
    console.log("El mes tiene 28 o 29 días")
} else if(month >=1 && month <=12){
    console.log("El mes tiene 31 días")
} else {
    console.log("Mes no válido")
}


// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Español" // Inglés, Español, Francés, Italiano, Alemán
let message

switch(idioma){
    case "Inglés": 
        message = "Hello!"
        break
    case "Español":
        message = "¡Hola!"
        break
    case "Francés":
        message = "Bonjour!"
        break
    case "Italiano":
        message = "Ciao!"
        break
    case "Alemán":
        message = "Hallo!"
        break
    default:
        message = "Idioma no soportado"
}

console.log(message)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch(month){
    case 3:
    case 4:
    case 5:
        console.log("Estamos en primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Estamos en verano")
        break
    case 9:
    case 10:
    case 11:    
        console.log("Estamos en otoño")
        break
    case 12:
    case 1:
    case 2:
        console.log("Estamos en invierno")
        break
    default:
        console.log("Mes no válido")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
switch(month){
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("El mes tiene 30 días") 
        break
    case 2:
        console.log("El mes tiene 28 o 29 días")
        break
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:    
    case 12:
        console.log("El mes tiene 31 días")
        break
    default:
        console.log("Mes no válido")
}
