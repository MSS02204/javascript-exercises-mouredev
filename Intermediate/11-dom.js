// Manejo del DOM (Document Object Model)
// El manejo del DOM en JS está relacionado con la programación web con el frontend, con una pagina web.
// Es una representación en forma de arbol de todos los elementos que tenemos en la web. 
// Es la manera en la que JS tiene una estructura que hace referencia a todo lo que esta en la pagina web.
// Y como tiene esa referencia, estructura, de todo lo que esta dibujandose en la pagina web entonces puede 
// acceder a cada uno de esos elementos(etiquetas, atributos, textos, etc) y puede interactuar con ese contenido
// modificandolo, eliminandolo, añadiendo elementos, setiando(de settings creo) diferentes propiedades.
// EJEMPLO: Tienes un párrafo en html, un elemento p con un texto, entonces le quieres cambiar el texto del parrafo,
// entonces lo haces con JS.





// Estructura del DOM
// Definicion y caracteristicas del DOM:
// Es una interfaz de programación que va a representar todos los documentos HTML, todos los tags a nivel de estructura XML
// que lo va a acabar convirtiendo en una estructura de objectos(document object model) por un lado y de nodos (diferentes 
// capas, anidaciones para tener esa representacion de toda la pagina web)
// Estructura: Objectos y nodos 
// A nivel de importancia general, El DOM permite que JS modifique, actualice esa presentacion, esa representacion del 
// contenido. Tambien que añada hasta cierta funcionalidad

// document es el objeto global que representa el DOM. 
console.log(document); // Imprime document is not defined, porque no existe el HTML que haga referencia al document, por lo cual este no es nada aún.


// Métodos de selección 
// Manejo del Dom( Document Object Model)

// Selección de elementos
// Métodos básicos (SELECTOR HTML) (para trabajar con el DOM, primero seleccionamos los elementos que queremos manipular)
// Si yo desde JS quiero interactuar con un elemento, primero tengo que poder acceder a ese elemento

// ESTO ES EL DOM:
const myElementById = document.getElementById("id") // de manera nativa tenemos la variable document que hace referencia a todo el documento HTML.
// Esto va a a poder retornar la referencia a un unico elemento de este DOM, el elemento que tenga el identificador que nosotros le pasemos en el parametro. 
// getElementById() // Selecciona un elemento por su ID, se le pasa un string en el parametro

const myElementsByClass = document.getElementsByClassName("class") // Selecciona elementos por su clase, se le pasa un string en el parametro, el nombre de la clase
// aqui no es element como el anterior, sino elements ya que aqui ya forma parte de como deberiamos desarrollar una aplicacion con HTML, CSS y JS a nivel de 
// utilizacion de componentes, como los atributos identificador, estos atributos class. La clase representa a diferentes elementos que son iguales, es decir todos los 
// botones que son iguales, podrian tener la misma clase, pero, en cambio, el identificador lo tenemos que asignar cuando solamente este asociado a un unico elemento
// Por eso cuando llamamos el getElementById lo que queremos recuperar es un solo elemento. En cambio, cuando hacemos el getElementsByClassName, lo que hace referencia es
// que ese nombre de clase, lo va a compartir diferentes elementos. Por eso lo que devuelve el getElementsByClassName es una coleccion de elementos, no un unico elemento.


const myElementByTag = document.getElementsByTagName("tag") // Selecciona elementos por su etiqueta, se le pasa un string en el parametro, el nombre de la etiqueta
//Esos son los métodos básicos, los más comunes 


// Métodos más modernos (SELECTOR CSS)
//querySelector sirve para seleccionar un solo elemento, el primero que coincida con el selector CSS que le pasemos como parametro
document.querySelector(".paragraph") // Para que siga un criterio que queremos para obtener esos elementos, incluso asociados a asociados al selector CSS.
// Tenemos un parrafo y queremos acabar llegando al primer elemento que coincida con esa clase, ese parrafo que tenemos acabar obteniendo. 
// Con el . tenemos ya la selección
// Con esto hacemos una seleccion de elementos mucho mas rapida, en algunos casos mucho más optima y sobretodo más potente, de cara a poder seleccionar más elementos.
document.querySelectorAll(".paragraph") // Selecciona todos los elementos que coincidan con el selector CSS que le pasemos como parametro
// De esta forma podemos obtener los elementos de nuestro DOM de cualquier manera.




// Manipulación de elementos
const title = document.getElementById("title") // Seleccionamos un elemento por su ID
// el const title guarda la referencia a ese elemento, no porque sea const signifique que no se puede modificar, esto es solo la referencia a ese objeto
title.textContent = "Hola JavaScript" // Modificamos el contenido de texto del elemento seleccionado. Esto lo modificas desde el código JS

const container = document.querySelector(".container") 
container.innerHTML = "<p>Esto es un nuevo párrafo</p>" // Modificamos el contenido HTML del elemento seleccionado. Esto lo modificas desde el código JS




// Modificación de atributos
// Primero debes obtener ese atributo
// Los atributos son las propiedades que tienen los elementos HTML, como el id, class, src, href, alt, etc.
// Obtención del atributo
const link = document.querySelector("a")
const url = link.getAttribute("href") // el getAttribute es para obtener el valor de un atributo

// Establecimiento del atributo (incluso y que igual no lo tiene)
link.setAttribute("href", "https://www.example.com") // el setAttribute es para establecer o modificar el valor de un atributo


// Comprobación de atributo
// el target nos indica que en el momento que se active ese link(que el usuario haga click en ese link) se abra en la misma página o en una nueva pestaña.
const hasTarget = link.hasAttribute("target") // Devuelve true si el atributo existe, false si no existe


// Eliminación del atributo
// si es que tiene de atributo por ejemplo el target y luego lo deseas eliminar, entonces se hace así:
link.removeAttribute("target") // Elimina el atributo especificado del elemento"


// Interacción con clases CSS
const box = document.querySelector(".box") // hace referencia a un elemento con la clase box
box.classList.add("selected") // Añade la clase 'selected' al elemento. Significa que yo accedo al box, y en ese momento me voy a la lista de clases que tiene
// y le digo que ahora un nuevo nombre de clase que tiene asignado es selected. Este selected podria estar asociado a esa clase que tenemos en nuestro CSS
// que cuando le decimos que esta selected, lo que hace es pintar esta box en rojo. Interactuas con el elemento, accediendo a su listado de clases, le
// estoy añadiendo una nueva clase, y como le estoy dando una nueva clase, si esa clase tiene alguna definicion a nivel de hoja de estilos, se va a repintar ese elemento
// y se va a mostrar de otra forma.
box.classList.remove("selected") // Elimina la clase 'selected' del elemento.
box.classList.toggle("selected") // Alterna la clase 'selected' en el elemento. Si la clase existe, la elimina; si no existe, la añade.


const button = document.querySelector("button") // Seleccionamos un botón
button.style.backgroundColor = "blue" // Modificamos el estilo CSS del botón directamente desde JS
button.style.color = "white" // Cambiamos el color del texto del botón
button.style.padding = "10px" // Añadimos padding al botón





// Creación y eliminación de elementos

// Creación
const newParagraph = document.createElement("p") // Crea un nuevo elemento HTML (en este caso, un párrafo)
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS" // Establece el contenido de texto del nuevo párrafo
newParagraph.style.padding = "8px" // Añadimos padding al nuevo párrafo

container.appendChild(newParagraph) // Añade el nuevo párrafo al contenedor existente en el DOM

// listado de elementos
const itemsList = document.querySelector("ul") // Seleccionamos una lista desordenada
const newItem = document.createElement("li") // Creamos un nuevo elemento de lista
newItem.textContent = "Nuevo elemento" // Establecemos el contenido del nuevo elemento de lista

// Inserción en un lugar concreto
// Insertar en la segunda posición
const secondItem = itemsList.children[1] // Seleccionamos el segundo elemento de la lista
itemsList.insertBefore(newItem, secondItem) // Insertamos el nuevo elemento antes del segundo elemento en la lista de elementos(itemList)

itemsList.append(newItem) // También podemos usar append para añadir al final de la lista

itemsList.prepend(newItem) // O prepend para añadir al inicio de la lista

secondItem.before(newItem) // O usar before para insertar antes de un elemento específico
secondItem.after(newItem) // O usar after para insertar después de un elemento específico


// Eliminación (de ahora)
newParagraph.remove() // Elimina el nuevo párrafo del DOM

//antes se hacia así:
// Eliminación tradicional (antes era asi)
const parent = newParagraph.parentElement // Obtenemos el elemento padre del párrafo

parent.removeChild(newParagraph) // Eliminamos el párrafo del elemento padre




// Elementos y eventos del DOM
// Elementos que nos permiten atender o responder acciones del usuario 

// Click al elemento
function showMessage() {
    alert("Clic!") // Muestra una alerta cuando se hace clic en el botón
}

const sendButton = document.querySelector("#send") // Seleccionamos el botón de enviar y el #send significa que es un id del boton
sendButton.addEventListener("click", showMessage) // Añadimos un evento de clic al botón que muestra una alerta al hacer clic. Hay un evento que tiene los elementos del HTML que es un click. Entonces le decimos que cuando se haga click en ese boton(o puede ser un titulo o una tabla), ejecute la funcion showMessage que hemos definido antes.

// Se puede simplificar más:
sendButton.addEventListener("click", () => { // funcion anonima
    alert("Clic con una arrow function!")
})

// Eventos comunes
document.addEventListener("DOMContentLoaded", () => {
    console.log("El DOM está completamente cargado") // Se ejecuta cuando el DOM ha sido completamente cargado
})

sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green" // mouseenter es cuando el ratón entra en el área del botón, sobre encima del botón
})

sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue" // mouseleave es cuando el ratón sale del área del botón, ya no está encima del botón
})

const form = document.querySelector("form") // Seleccionamos un formulario
form.addEventListener("submit", (event) => {
    // Código
})





// Ejemplos: Acceso al DOM
// Archivos: 12-dom-example.html y 13-dom-example.js



// Ejemplos: lista de tareas
// Archivos: 14-tasklist.html y 15-tasklist.js






