// document.addEventListener("DOMContentLoaded", () => {
//     const text = document.getElementById("text")
//     const button = document.getElementById("button")
//     const list = document.getElementById("list")

document.addEventListener("DOMContentLoaded", () => { // buena practica. Esperar a que el DOM este cargado
    console.log("DOM está cargado y listo")
})

// 1. 
const myTitle = document.querySelector("#title")
myTitle.textContent = "¡Ganador del AO!"


// 2.
// const myImage = document.querySelector("img")
// myImage.id = "myImage"
// myImage.src = "https://pbs.twimg.com/media/G_7AEmbXQAEQsVK.jpg"

// window.onload = function() { // esto es para que se ejecute al cargar la pagina
//     const myImage = document.createElement("img")
//     myImage.id = "myImage"
//     myImage.src = "https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/73b0c0f2-a428-40f5-9172-627f4d3eff64/atleta-de-nike-carlos-alcaraz.jpg"
//     document.body.appendChild(myImage)
    
//     myImage.src = "https://pbs.twimg.com/media/G_7AEmbXQAEQsVK.jpg"
// }

// 3. 
// window.onload = function() {
//     const myBox = document.createElement("div")
//     myBox.id = "box"
//     document.body.appendChild(myBox)
    
//     myBox.classList.add("resaltado")
// }


// 4. 
// window.onload = function() {
//     const myParagraph = document.createElement("p")
//     myParagraph.id = "paragraph"
//     myParagraph.textContent = "Este es mi párrafo."
//     document.body.appendChild(myParagraph)

//     myParagraph.addEventListener("click", () => {
//         myParagraph.style.color="blue"
//     })
// }

// Si utilizas window.onload = function... varias veces, solo se ejecutará el último que hayas definido. 
// Esto sucede porque cada asignación sobrescribe a la anterior. Para ejecutar múltiples funciones al 
// cargar la página, se recomienda usar window.addEventListener("load", ...)`, que permite acumular 
// funciones sin sobrescribirla



// 5. 
// window.onload = function() {
//     const myBoton = document.createElement("button")
//     myBoton.textContent = "Agregar elemento"
//     document.body.appendChild(myBoton)

//     const myList = document.createElement("ul")
//     myList.id = "list"
//     document.body.appendChild(myList)
    
//     myBoton.addEventListener("click", () => {
//         const newElement = document.createElement("li")
//         newElement.textContent = "Nuevo elemento"
//         myList.appendChild(newElement)
//     })

//     // Otra forma
//     // myBoton.onclick = function() {
//     //     const newElement = document.createElement("li")
//     //     newElement.textContent = "Nuevo elemento"
//     //     myList.appendChild(newElement)
//     // }
// }


// 6. 
// window.onload = function() {
//     const myParagraphToDelete = document.createElement("p")
//     myParagraphToDelete.id = "deleteParagraph"
//     myParagraphToDelete.textContent = "Este es el párrafo."
//     document.body.appendChild(myParagraphToDelete)
    
//     const btn = document.createElement("button")
//     btn.textContent = "Eliminar párrafo"
//     document.body.appendChild(btn)
    
//     btn.addEventListener("click", () => {
//         myParagraphToDelete.remove()
//         alert("¿Estás seguro de que deseas eliminar el párrafo?")
//     })
// }


// 7. 
// window.onload = function() {
//     const myDiv = document.createElement("div")
//     myDiv.id = "content"
//     myDiv.textContent = "Este es un div"

//     document.body.appendChild(myDiv)

//     // const myH2 = document.createElement("h2")
//     // myH2.textContent = "Nuevo contenido"

//     // myDiv.textContent = "" // limpia el contenido del div
//     // myDiv.appendChild(myH2) // agrega el h2 al div
//     myDiv.innerHTML = "<h2>Nuevo Contenido</h2>" // otra forma de hacerlo
// }


// 8. 
// window.onload = function() {
//     const myBtn = document.createElement("button")
//     myBtn.id = "greetBtn"
//     myBtn.textContent = "Saludar"

//     document.body.appendChild(myBtn)
//     myBtn.addEventListener("click", (event) => {
//         if(event.target.id === "greetBtn") { // verifica que el boton clickeado es el correcto
//             alert("¡Hola!")
//         }
//     })
// }


// 9.
// window.onload = function() {
//     const myInput = document.createElement("input")
//     myInput.id = "textInput"
//     this.document.body.appendChild(myInput)

//     const myDiv = document.createElement("div")
//     myDiv.id = "result"
//     this.document.body.appendChild(myDiv)

//     // // otras formas de hacerlo
//     // myInput.oninput = function() {
//     //     myDiv.textContent = myInput.value // actualiza el div con el valor del input
//     // }

//     // myInput.addEventListener("input", () => { 
//     //     myDiv.textContent = myInput.value // actualiza el div con el valor del input
//     // })

//      // otra forma de hacerlo
//     myInput.addEventListener("keypress", (event) => { 
//         if(event.key === "Enter") {
//             myDiv.textContent = myInput.value // actualiza el div con el valor del input
//         }
//     })
// }


// 10.
window.onload = function() {
    const btn = document.createElement("button")
    btn.id = "backgroundBtn"
    btn.textContent = "Cambiar color de fondo"
    document.body.appendChild(btn)
    
    
    btn.addEventListener("click", () => {
        const myBody = document.querySelector("body")
        myBody.style.backgroundColor = "yellow"
    })

    // // Otra forma de hacerlo:
    // btn.onclick = function() {
    //     document.body.style.backgroundColor = "lightblue"
    // }
}
