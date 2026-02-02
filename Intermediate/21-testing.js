// TESTING
// Es el proceso para validar, para verifiqcar que el código funciona correctamente
// antes de que, en muchos casos, lo utilice el usuario real, antes de desplegarlo
// a producción. O si hemnos cambiado nuestro código que hace que el otro código 
// que antes funcionaba ahora falle, nosotros lo podamos detectar con antelación,
// que nuestro propio sistema de testing nos avise y que nosotros digamos que
// lo que estaba bien ya no lo esta o algo falló, vamos a corregirlo.

// En JavaScript, las pruebas pueden realizarse de varias maneras, desde simples
// afirmaciones hasta frameworks de pruebas completos.


// Existen varios tipos de testing.
// Tipos de testing: 
// 1. Unit Testing: Pruebas de unidades individuales de código, como funciones o métodos.
// Las pruebas unitarias sirven para evaluar una función o un módulo individual.
function sum(a, b) {
    return a + b; 
}

console.log(sum(3, 5) === 8); // true