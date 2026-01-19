export function Divide2(n1, n2) {
    return n1 / n2
}

export const numberPositive2 = 12

export class Television2 {
    constructor(brand, size) {
        this.brand = brand
        this.size = size
    }

    location() {
        return `La televisión ${this.brand} de ${this.size} pulgadas está en la sala.`
    }
}