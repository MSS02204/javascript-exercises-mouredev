// Exportación de módulos
// Un módulo es una forma de dividir nuestro código en piezas que podemos reutilizar. Nos permite organizar nuestro código en archivos separados

// Un módulo es un fichero .js que contiene código que puede ser exportado e importado en otros archivos.

// Funciones
export function add(a, b) {
    return a + b
}

console.log(add(5,10)); // Imprime 15

// Propiedades
export const PI =3.1416
export let name = "MoureDev"

// Clases 
export class Circle {
    constructor(radius) {
        this.radius = radius
    }

    area() {
        return Math.PI * Math.pow(this.radius, 2)
    }

    perimeter() {
        return 2 * Math.PI * this.radius
    }
}


// Exportación por defecto (se va a exportar directamente esta función. Debes tener solo una exportación por defecto por módulo, 
// o sino marca error)
// Se puede exportar una función, clase, objeto, etc(en realidad declaraciones, no todo es exportable por defecto).
// No tiene sentido que exportes por defecto una propiedad, lo que tenemos que exportar es una funcionalidad. 

export default function substract(a, b) {
    return a - b
}


// export default function substract2(a, b) {
//     return a - b
// }

// esto esta mal
// export default const EMAIL = ""

// esto si esta bien 
// export default EMAIL  = {email: "mouredev@mouredev.com"}
// o esto tambien
// export const EMAIL  = {email: "mouredev@mouredev.com"}


//ejemplo con clase exportada por default
// export default class MyClass {
//     func() {
//         console.log("Mi clase")
//     }
// }