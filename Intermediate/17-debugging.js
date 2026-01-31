// Depuración

// Es esa parte dentro del desarrollo que se ocupa de la detección de errores y de los diferentes mecanismos
// , y de diferentes herramientas que tenemos para acabar encontrando esos errores y sobretodo no tenemos que 
// llegar hasta el final cuando se produce el error, sino que tengamos un mecanismo agil de cara a saber como 
// se esta comportando nuestro código.

// Es un proceso de encontrar y corregir errores en el código, pero tambien de saber como se comporta nuestro codigo.
// Porque a veces no tenemos que esperar a que se produzca un error para empezar a depurar el codigo, sino que debemos 
// lanzar unas ejecuciones y vamos a ver como se comportar, para asi poder implementar mejoras o corregir posibles errores que
// puedan surgir.


// console.log()
// La forma mas sencilla de depurar es usando console.log() para imprimir valores en la consola y ver como se comporta
// nuestro codigo.

function sum(a, b) {
    console.log("a:", a)
    console.log("typeof a:", typeof a)
    console.log("b:", b)
    console.log("typeof b:", typeof b)
    return a + b
}

// console.log(sum(3, 5)) // Imprime 8 en la consola
console.log(sum(3, "5")) // Aqui vemos que se produce una concatenacion en lugar de una suma




// Depurador (profesional)
// VS Code y cualquier editor de codigo y los IDEs tiene este modo de manera nativa  
// El stack es la pila de llamadas, la pila de ejecución

// Puntos de interrupción (breakpoints):
// - Son marcas que ponemos en una línea de código para que el depurador se detenga allí durante la ejecución
// - Permiten inspeccionar el estado del programa en ese punto específico
// Continue (Continuar): 
// - Continua la ejecución hasta el siguiente punto de interrupción (breakpoint) o hasta el final del programa
// Step Over (Saltar, "Depurar paso a paso por procedimientos"): 
// - Ejecuta la siguiente línea de código, pero si es una función, no entra en ella
// Step Into (Entrar, "Depurar paso a paso por instrucciones"): 
// - Ejecuta la siguiente línea de código y si es una función, entra en ella y asi hasta que acabe la linea de código
// Step Out (Salir, "Salir de la depuración"): 
// - Sale de la función actual y vuelve al punto donde fue llamada
// Restart (Reiniciar): Reinicia la ejecución del programa desde el principio
// Stop (Detener, Desconectar): 
// - Detiene la ejecución del programa. Desconecta el depurador del programa en ejecución


// También podemos inspeccionar variables, ver la pila de llamadas (call stack) y evaluar expresiones en tiempo real
// El depurador es una herramienta muy poderosa para entender el flujo de ejecución y encontrar errores en el código

// Tambien podemos deshabilitar temporalmente puntos de interrupción (breakpoints), en PUNTOS DE INTERRUPCIÓN,
//  sin eliminarlos, lo que es útil para pruebas rápidas


function divide(a, b) {
    if(b === 0) {
        throw new Error("No se puede dividir por cero")
    }
    const result = a / b
    return result
}

console.log(divide(5, 0)) // Imprime Infinity en la consola
console.log("HOLA")
// Se puede habiliar las Excepciones detectadas en el PUNTO DE INTERRUPCIÓN para que el 
// depurador se detenga cuando se lanza una excepción
// También podemos configurar el depurador para que se detenga en excepciones no capturadas,
// lo que es útil para identificar errores que no hemos previsto