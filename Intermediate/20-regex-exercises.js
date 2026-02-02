// 1. Crea una RegEx que valide correos electrónicos.
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
// ^ significa "comienza con"
// + significa uno o más del elemento anterior.
// [a-zA-Z0-9._%+-]+ significa uno o más caracteres alfanuméricos o caracteres especiales permitidos en un correo electrónico.
// [a-zA-Z0-9.-]+ significa uno o más caracteres alfanuméricos, puntos o guiones (el dominio).
// @ significa el símbolo arroba.
// \. significa un punto literal.
// [a-zA-Z]{2,} significa al menos dos letras (el dominio de nivel superior). Ej: com, org, net.
// $ significa "termina con"

const text1 = "melisa"
console.log(regex.test(text1)) // false

const text2 = "melisa@gmail.com"
console.log(regex.test(text2)) // true
// ^[a-zA-Z0-9._%+-]+: Empieza con uno o más caracteres alfanuméricos o caracteres permitidos en un correo (puntos, guiones, etc.).
//@: El símbolo @.
// [a-zA-Z0-9.-]+: El dominio puede tener letras, números, puntos y guiones.
// \.[a-zA-Z]{2,}$: El dominio de nivel superior debe tener al menos dos letras (como .com, .org).




// 2. Crea una RegEx que obtenga Hashtags de un Texto
// para ecnontrar por ejemplo #ejemplo en un texto
const hashRegex2 = /#\w+/g
// # significa el simbolo de hashtag. Busca el símbolo # que indica un hashtag.
// \w+ coincide con uno o más caracteres alfanuméricos (letras, números o guiones bajos).
// g es un modificador global para encontrar todas las coincidencias en el texto. Asegura que la expresión regrese todos los hashtags del texto.

const text3 = "Este es un #ejemplo de #hashtag en un #texto."
console.log(hashRegex2.exec(text3)) // [ '#ejemplo', index: 10, input: 'Este es un #ejemplo de #hashtag en un #texto.', groups: undefined ]

while((match = hashRegex2.exec(text3)) !== null) {
    console.log(match)
}
// Otra forma de obtener todos los hashtags de una sola vez es usando el método match:
console.log(text3.match(hashRegex2)) // [ '#ejemplo', '#hashtag', '#texto' ]




// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// ^ significa "comienza con".
// (?=.*[A-Za-z]) es una afirmación de búsqueda anticipada que asegura que haya al menos una letra en la cadena.
// (?=.*\d) es otra afirmación de búsqueda anticipada que asegura que haya al menos un dígito en la cadena.
// [A-Za-z\d]{8,} asegura que la cadena tenga al menos 8 caracteres, que pueden ser letras o dígitos.
// $ significa "termina con".
let password1 = "password"
console.log(passwordRegex.test(password1)) // false
password1 = "password1"
console.log(passwordRegex.test(password1)) // true
password1 = "passwor1d"
console.log(passwordRegex.test(password1)) // true

// NOTA: Aplícalas utilizando diferentes operaciones.
