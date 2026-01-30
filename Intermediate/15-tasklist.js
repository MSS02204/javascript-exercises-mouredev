const text = document.getElementById("text")
const button = document.getElementById("button")
const list = document.getElementById("list")

// buena practica: 
// No tiene mucho sentido empezar a realizar tareas con el DOM
// si el DOM no esta cargado
// Por eso se usa el evento DOMContentLoaded, ya que este evento
// se dispara cuando el DOM ya esta cargado

function addTask() {

    if(text.value === "")  return // para que no agregue tareas vacias, el input vacio
    
    const newElement = document.createElement("li") // crea un nuevo elemento li
    newElement.textContent = text.value // asigna el valor del input al nuevo elemento

    newElement.addEventListener("click", () => { // para eliminar la tarea al hacer click en ella
        newElement.remove() 
    })

    list.appendChild(newElement) // agrega el nuevo elemento a la lista
    // el input es el text
    text.value = "" // para limpiar el input despues de agregar la tarea
}

button.addEventListener("click", addTask) // cuando se haga click en el boton, se ejecuta la funcion addTask

text.addEventListener("keypress", (event) => { // para que al presionar Enter se agregue la tarea
    if (event.key === "Enter") {
        addTask()
    }
})