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

module.exports = sum; // Exporta la función sum para que pueda ser utilizada en otros archivos de prueba.

console.log(sum(3, 5) === 8); // imprime true, entonces el test pasa como correcto
console.log(sum(2, 2) === 5); // imprime false, entonces el test falla



// 2. Pruebas de integración: Verifican la interacción entre diferentes módulos o componentes
// Ahi se intenta comprobar la integridad de diferentes módulos, si interactúan bien entre ellos.
// Por ejemplo cuando un carrito de compras interactúa con una tabla de resumen de precios, entonces 
// cuando yo cambio una cosa en el carrito de compras, el resumen de precios se actualiza correctamente.



// 3. Pruebas end-to-end (E2E): Simulan el comportamiento del usuario final para verificar
// que todo el sistema funcione correctamente desde el punto de vista del usuario.
// Son las pruebas de recorrido más largo, donde se prueba toda la aplicación de extremo a extremo, 
// porque lo que en realidad está probando es una interacción real de la aplicación.
// Ejemplo, como es una prueba end to end de un proceso de compra, ps desde que el usuario entra
// a la página, agrega un producto al carrito,  se va a la pasarela de pago, realiza el pago y
// eso se convierte en un pedido, ps eso seria un test que lo que va simulando es todo ese flujo que
// acaba llevando a cabo un usuario. 



// En JS existen herramientas para poder realizar este testing de una forma mucho más




// JEST:// Jest es un framework de pruebas de JavaScript desarrollado por Facebook.
// Es una libreria que lo creo Meta y se integra con varios proyectos, Babel, TypeScript, Node
// React, Angular, Vue.  
// Funciona bien y es completo, es muy popular y tiene muchas funcionalidades.


// npm init -y : inicializa un proyecto de Node.js creando un archivo package.json con la configuración predeterminada.
// el -y es de Jest porque le va a decir que si a todas las opciones por defecto.


// npm install sirve para instalar paquetes o dependencias en un proyecto de Node.js.
// solo se va a usar esta dependencia para el entorno de desarrollo.
// npm install --save-dev jest
// --save-dev es para indicar que esta dependencia es solo para el entorno de desarrollo y no es necesaria en producción.
// jest es para indicar que esa es la dependencia que quiero instalar 

// si sale ERROR es porque ya lo tenemos instalado, o que no tienes los permisos necesarios para instalar paquetes globalmente.
// Entonces puedes ejecutar esto sudo npm install --save-dev jest y luego pones tu contraseña



//   "scripts": {
//     "test": "jest"
//   },

// Ponemos esto para que el entorno de ejecucion de Node, cuando nostros 
// ejecutemos Node a nivel general en nuestro proyecto, ps Jest sepa donde 
// buscar los test


// npm test : ejecuta el comando definido en el script "test" del archivo package.json.
