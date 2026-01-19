// 1. Exporta una función
export function multiply(a, b) {
    return a * b
}

// 2. Exporta una constante
export const name = "JavaScript"

// 3. Exporta una clase
export class House {
    constructor(address, postal) {
        this.address = address
        this.postal = postal
    }
}

// 4. Importa una función 
import defaultImport from "./28-export-modules.js";
console.log(defaultImport(20,8))

// 5. Importa una constante
import { PI } from "./28-export-modules.js";
console.log(PI)

// 6. Importa una clase
import { Circle } from "./28-export-modules.js";
let circle = new Circle(9)
console.log(circle.area().toFixed(1))

// 7. Exporta una función, una constante y una clase por defecto (en caso de que lo permita)
export default function sum(a, b) {
    return a + b
}

// No lo permite, solo debe haber un DEFAULT por módulo
// export default const number = 42

// export default class Music {
//     constructor(genre) {
//         this.genre = genre
//     }
// }


// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
// NO SE PUEDE, SOLO UN DEFAULT POR MÓDULO
import defaultSubstract from "./28-export-modules.js"; // importación de función por defecto
console.log(defaultSubstract(7,3))

// 9. Exporta una función, una constante y una clase desde una carpeta}
export function Divide(n1, n2) {
    return n1 / n2
}

export const numberPositive = 12

export class Television {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    }

    location() {
        return `La televisión ${this.brand} de ${this.size} pulgadas está en la sala.`
    }
}

// 10. Importa una función, una constante y una clase desde un directorio diferente al anterior 
import { Divide2, numberPositive2, Television2 } from "../export/32-modules-exercises-export.js";
console.log("\n")
console.log(Divide2(20,5))
console.log("Este es un número positivo:", numberPositive2)
console.log(new Television2("Samsung", 43).location())  