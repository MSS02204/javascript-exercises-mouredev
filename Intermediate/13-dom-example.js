console.log(document)

const myH1 = document.querySelector("h1")
console.log(myH1)

myH1.textContent = "Mi nuevo título"

// aqui no se puede ejecutar el script porque JS va a seguir sin saber que es el documento
// porque el que tiene contexto del JS es el HTML, no al reves. Este JS no tiene contexto del HTML
// el que lo tiene es el HTML, él tiene el control de JS. 
// Por eso lo que se imprime se ve en la consola del navegador, no en Node.js. Ya que ahi se ejecuta el HTML