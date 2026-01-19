// Módulos externos (módulos que no hemos creado nosotros)
const os = require("os")

console.log(os.platform()) // Muestra el sistema operativo, Imprime "win32" en Windows
console.log(os.arch()) // Muestra la arquitectura del sistema, Imprime "x64" en sistemas de 64 bits
console.log(os.totalmem()) // Muestra la memoria total del sistema en bytes
console.log(os.freemem()) // Muestra la memoria libre del sistema en bytes
console.log(os.uptime()) // Muestra el tiempo que el sistema ha estado encendido en segundos