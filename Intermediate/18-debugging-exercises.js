// 1. Crea un código con un error lógico y usa VS Code para encontrarlo
// 2. Experimenta con breakpoints y observa cómo cambia el flujo de ejecución
function multiply(a, b) {
    const result = a * b
    if(a < 0 || b < 0) {
        // console.log("Error: Uno de los números es negativo")
        throw new Error("Uno de los números es negativo")
    }
    return result
}

multiply(-2, 4)




