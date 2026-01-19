// Importación de módulos

import { add, PI, name, Circle} from "./28-export-modules.js";
import defaultImport from "./28-export-modules.js";

// Funciones
console.log(add(5,10))

// siempre que estemos ejecutando con node, ambos archivos deben estar con .mjs, que significa módulo. 
// O bien, en package.json, agregar "type": "module" seria otra forma de indicarle a node que estamos trabajando con módulos.

// Primero se indica que nuestro proyecto va a funcionar como modulo, eso permite que ya no sean todos ficheros independientes, 
// sino que nosotros podamos acabar exportando e importando la función


// Propiedades
console.log(PI)
console.log(name)
console.log("\n")

// Clases
let circle = new Circle(10)
console.log(circle.radius)
console.log(circle.area().toFixed(2)) // 314.16, redondeado a 2 decimales
console.log(circle.perimeter().toFixed(2)) // 62.83, redondeado a 2 decimales
console.log("\n")

// Importación por defecto
console.log(defaultImport(5, 10))

// let myClass = new defaultImport()
// myClass.func()


// Proyecto Modular
// import { MyImport } from "./directory/file.js"}

