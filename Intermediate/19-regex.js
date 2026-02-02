// Expresiones regulares (RegEx) en JavaScript
// Regular Expressions (RegEx): son patrones utilizados para coincidir combinaciones de caracteres 
// en cadenas de texto. En JavaScript, las expresiones regulares se implementan mediante el objeto
//  RegExp o mediante literales de expresiones regulares.

// Es un patrón de busqueda texto, se utiliza para encontrar, validar, manipular caracteres en JS.
// Expresiones regulares existen en practicamente todos los lenguajes de programacion, ya que sigue 
// un estandar.




// Sintaxis: Test
// Sintaxis más basica de la expresión regular:
// la de barras es más común para usar ya que es más corta y legible.
const regex = /ab/ // Busca la secuencia exacta "abc", es el criterio de busqueda y se coloca entre barras diagonales.
const regex2 = RegExp("abc") // Otra forma de definir una expresión regular utilizando el constructor RegExp.
const text = "Hola abc JavaScript"

// test: verifica coincidencia con true o false
console.log(regex.test(text)) // Devuelve true si encuentra la secuencia "abc" en el texto, de lo contrario false.
console.log(regex2.test(text)) // Devuelve true si encuentra la secuencia "abc" en el texto, de lo contrario false.

const text2 = "Mi edad es 37"
// const regex3 = /\d/   // \d busca cualquier dígito (0-9)
const regex3 = /\d/g   // Lo que esta dentro de las barras diagonales es el patrón(criterio) de búsqueda, y el g, que es un flag, 
// es para modificar toda la expresion regular, es un modificador global de la expresion regular.
// Los flags son modificadores que cambian el comportamiento de la expresión regular. El flag siempre va fuera de las barras
// Lo que hace el modificador "g" es buscar todos los dígitos en lugar de solo el primero.
const regex4 = /[4-6]/ // ^[0-2] busca si el texto comienza con un dígito entre 0 y 2
console.log(regex3.test(text2)) // Devuelve true porque encuentra el dígito "3" en el texto.
console.log(regex4.test(text2)) // Devuelve false porque [0-2] no coincide con los digitos en el texto.




// Sintaxis: Replace
// Reemplaza el texto que coincide con el patrón de la expresión regular.
const regex5 = /JavaScript/
// console.log("Hola JavaScript".replace("JavaScript", "JS")) // Reemplaza "JavaScript" por "JS" en el texto.
console.log("Hola JavaScript".replace(regex5, "JS")) // El replace tambien soporta expresiones regulares.
const text3 = "Estoy contando 1 2 3 4 5 6 7"
console.log(text3.replace(regex3, "[número]")) // Reemplaza el primer dígito encontrado por "Esto es un número".




// Sintaxis: exec (retorna los detalles de la coincidencia)
// Regex101 regex 101 es una web que nos ayuda a entender las expresiones regulares, ya que nos explica todo.
console.log(regex3.exec(text3)) // Devuelve un array con detalles de la primera coincidencia del dígito en el texto.

while((match = regex3.exec(text3)) !== null) { // El exec tambien soporta el modificador global "g" para encontrar todas las coincidencias en el texto.
    // el match es un array con los detalles de la coincidencia encontrada.
    console.log(match)
}
// exec te retorna un array por cada ejecucion 


// i: modificador global para ignorar mayusculas y minusculas. Busca sin importar si es mayuscula o minuscula
// m: modificador global para busqueda multilínea (busqueda en diferentes lineas)
// . : busca cualquier caracter excepto saltos de linea (\n)