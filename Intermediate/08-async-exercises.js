// 1. Crea una función para saludar que reciba un nombre y un callback 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
function greet(name, callback) {
    setTimeout(() => {
        console.log("Hola, " + name)
        console.log(`Hola, ${name}`)
        callback()
    }, 2000)
}
greet("Melisa", () => {
    console.log("Saludo completado")
}) // Después de 2 segundos imprime: Hola, Melisa
// o tambien así
// greet("Melisa", () => console.log("Saludo completado"))



// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback)
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback
function task1(callback) {
    setTimeout(() => {
        console.log("Tarea callback 1 completada")
        callback()
    }, 1000)
}

function task2(callback) {
    setTimeout(() => {
        console.log("Tarea callback2 completada")
        callback()
    },1000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Tarea callback 3 completada")
        callback()
    }, 1000)
}

// Llamar a las tareas en orden usando callbacks
task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las tareas callbacks completadas")
        })
    })
})


// 3. Crea una función para verificar un número que retorne una Promesa.
//    Si el número es par, la promesa se resuelve con el mensaje "Número par".
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
function checkEvenNumber(number) {
    return new Promise((resolve, reject) => {
        if(number % 2 == 0) {
            resolve("Número par") 
        } else {
            reject("Número impar")
        }
    })
}

checkEvenNumber(2)
    .then(message => { console.log(message) }) // Imprime "Número par"
    .catch(error => { console.log(error) }) // No se ejecuta

const number = 4
checkEvenNumber(number)
    .then(message => { console.log(`${number} es ` + message) }) // Imprime "Número par"
    .catch(error => { console.log(error) }) // No se ejecuta

const number2 = 3
checkEvenNumber(number2)
    .then(message => console.log(message)) // No se ejecuta
    .catch(error => console.log(`${number2} es ` +error)) // Imprime "Número impar"


// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada"
//    secondTask(): tarda 2s y muestra "Segunda tarea completada"
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada"
function firstTask() {
    return new Promise(resolve => {
        setTimeout(() =>  {
            console.log("Primera tarea promesa completada")
            resolve()
        }, 1000)
    })
}

function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Segunda tarea promesa completada")
            resolve()
        }, 2000)
    })
}

function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Tercera tarea promesa completada")
            resolve()
        }, 1500)
    })
}

firstTask()
    .then(secondTask)
    .then(thirdTask)
    .then(() => {
        console.log("Todas las tareas con promesas completadas")
    })



// 5. Transforma el ejercicio de Promesas en una función async/await llamada executeTasks().
async function executeTasks() {
    await firstTask()
    await secondTask()
    await thirdTask()
    await console.log("Todas las tareas con async/await completadas")
}

executeTasks()


// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Simulando llamada a API...")
            if(id < 5) {
                resolve({ id, nombre: "Usuario " + id})
            } else if(id >= 5) {
                reject("Usuario no encontrado")
            }
        }, 2000)
    })
}

async function fetchUser(id) {
    try {
        const user = await getUser(id)
        console.log("Usuario encontrado ->", user)
    } catch (error) {
        console.log("Error: " + error)
    }
}

fetchUser(3) // Después de 2 segundos: Usuario encontrado { id: 3, nombre: 'Usuario 3' }
fetchUser(5) // Después de 2 segundos: Error: Usuario no encontrado


// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio") // 1 Primero
//    setTimeout(() => console.log("setTimeout ejecutado"), 0) // 4 Cuarto
//    Promise.resolve().then(() => console.log("Promesa resuelta")) // 3 Tercero
//    console.log("Fin") // 2 Segundo

console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")

// ATENCION: Promise.resolve() se usa para crear una promesa que se resuelve inmediatamente.



// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
function promiseA() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa A completada")
            resolve()
        }, 5700)
    })
}

function promiseB() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Promesa B completada")
            resolve()
        }, 5800)
    })
}

function promiseC() {
    return new Promise(resolve => {
        setTimeout (() => {
            console.log("Promesa C completada")
            resolve()
        }, 5500)
    })
}

Promise.all([promiseA(), promiseB(), promiseC()]) // esto hace que se ejecuten las tres promesas en paralelo
    .then(() => {
        console.log("Todas las promesas RESUELTAS")
    }).catch(error => {
        console.log("Error en alguna promesa: " + error)
    })

// otra forma de hacerlo e imprimiendo arrays de resultados
const tarea1 = new Promise(resolve => setTimeout(() => resolve("Tarea 1 completada"), 5950))
const tarea2 = new Promise(resolve => setTimeout(() => resolve("Tarea 2 completada"), 5900))
const tarea3 = new Promise(resolve => setTimeout(() => resolve("Tarea 3 completada"), 5900))

Promise.all([tarea1, tarea2, tarea3])
    .then((resultados) => {
        console.log(resultados) // imprime un array con los resultados de cada promesa. [ 'Tarea 1 completada', 'Tarea 2 completada', 'Tarea 3 completada' ]
        console.log("Todas las promesas resueltas")
    })



// 9. Crea una función esperarSegundos(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
function esperarSegundos(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Esperados ${segundos} segundos`)
            resolve()
        }, segundos * 1000)
    })
}

async function ejecutarEspera() {
    await esperarSegundos(3)
    console.log("Tiempo finalizado")
}

ejecutarEspera()

// 10. Crea una simulación de un cajero automático usando asincronía.
//     -La función checkBalance() tarda 1s y devuelve un saldo de 500$
//     -La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     -Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más. 
//
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Error: Fondos insuficientes
function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            const balance = 500
            console.log(`Saldo disponible: ${balance}`)
            resolve(balance)
        }, 1000)
    })
}

function withdrawMoney(amount, balance) { //withdraw significa retirar
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            if(amount <= balance) {
                balance -= amount
                console.log(`Retirando ${amount}...`) 
                console.log(`Operación exitosa, saldo restante: ${balance}`)
                resolve(balance)
            } else {
                reject("Fondos insuficientes")
            }
        }, 2000)
    })
}

async function atmSimulation() {
    try {
        let balance = await checkBalance()
        balance = await withdrawMoney(300, balance)
        balance = await withdrawMoney(300, balance)
    } catch (error) {
        console.log("Error: " + error)
    }
}

atmSimulation()