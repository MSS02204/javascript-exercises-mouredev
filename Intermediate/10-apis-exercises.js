// 1. Realiza una petición GET con fecth() a JSONPlaceholder y muestra en la consola la lista de publicaciones
fetch("https://jsonplaceholder.typicodes.com/posts")
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("Error:", error)
    })

// Otra forma de hacerlo:
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log("Error:", error))



// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error
fetch("https://jsonplaceholder.typicode.com/postffs")
    .then(response => {
        if(!response.ok) {
            throw new Error("Error en la petición: " + response.status)
        }
        return response.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(error => {
        console.log("Error", error)
    })



// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas
async function getData() {
    try {
        const url = "https://jsonplaceholder.typicode.com/posts"
        const response = await fetch(url)
        if(!response.ok) {
            throw new Error("Error en la petición: " + response.status)
        }
        const data = await response.json()
        console.log(data) // Muestra los datos (de la lista de posts) en la consola
    } catch(error) {
        console.log("Error", error)
    }
}

getData()



// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envia un objeto con propiedades como title o body
async function createPost() {
    const newPost = {
        "userId": 1,
        "title": "Mi nuevo post",
        "body": "Este es el nuevo contenido de mi nuevo post"
    }

    try {
        const url = "https://jsonplaceholder.typicode.com/posts"

        const response = await fetch(url, 
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                // body: JSON.stringify({title: "Mi title al nuevo post"})
                body: JSON.stringify(newPost)
            })  
        
        if(!response.ok) {
            throw new Error("Error en la petición: " + response.status)
        }

        const data = await response.json()

        console.log("Post creado: ", data)
    } catch (error) {
        console.log("Error:", error)
    }
}

createPost()



// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder
async function putData() {
    const updatePost = {
        "title": "Post actualizado",
        "body": "Este es el contenido actualizado del post",
        "userId": 1
        //"id": 11 // En esta fake API, el id no va a actualizarse ya que el id que estamos modificando es el 10, no el 11. Por ello, el id seguirá siendo 10 
    }

    try {
        const url = "https://jsonplaceholder.typicode.com/posts/10" // Actualizamos el post con id 10
        const response = await fetch(url, {
            method: "PUT", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatePost)
        })

        if(!response.ok) {
            throw new Error("Error en la petición: " + response.status)
        }
        const data = await response.json() 

        console.log("Post actualizado: ", data)
    } catch (error) {
        console.log("Error: ", error)
    }
}

putData()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente
async function patchData() {
    const url = "https://jsonplaceholder.typicode.com/posts/5" // Modificamos el post con id 5

    try {

        const patchPost = {
            title: "Propiedad modificado con patch" // Funciona
            // La otra forma sería asi, con comillas:
            // "title": "Propiedad modificado con patch" 
        }

        const response = await fetch( url, {
            method: "PATCH", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patchPost)
        })

        if(!response.ok) {
            throw new Error("Error en la petición: " + response.status)
        }

        const data = await response.json()

        console.log("Patch Post: ", data)
    } catch(error) {
        console.log("Error: ", error)
    }
}

patchData()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta
async function deletePost(){
    try {

        const url = "https://jsonplaceholder.typicode.com/posts/100" // Borramos el post con id 3

        const response = await fetch(url, {
            method: "DELETE"
        })

        if(!response.ok) {
            throw new Error("Error en la petición: " + response.status)
        }

        console.log("Post eliminado correctamente")
    } catch (error) {
        console.log("Error: ", error)
    }
}

deletePost()


// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap
async function getDataWeather(city) {

    try {
        const apiKey = "16dcae1a102e84cf4330b19d7aa94075"
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

        const response = await fetch(url)

        if(!response.ok) {
            throw new Error("Error en la petición: ", + response.status)
        }

        const data = await response.json()

        console.log(`Datos del clima en ${city}:`, data)
        console.log(`Temperatura en ${city}: ${data.main.temp} °C`)
        data.weather.forEach(weather => {
            console.log(weather)
            console.log(`Principal y descripción del clima: ${weather.main} y ${weather.description} `)
        })
    } catch (error) {
        console.log("Error: ", error)
    }

}

getDataWeather("Lima")


// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, 
// finalmente, la cadena evolutiva a partir de la especie. (aqui debemos concatenar varias llamadas a la API)
async function getDataPokemon(pokemonName) {

    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

        const pokemonResponse = await fetch(url) 

        if(!pokemonResponse.ok) {
            throw new Error("Error en la petición: " + pokemonResponse.status)
        }

        const data = await pokemonResponse.json()
        console.log(`Datos del pokemon ${pokemonName}: `, data)

        //Obtener la especie del pókemon
        const specieResponse = await fetch(data.species.url)
        
        if(!specieResponse.ok) {
            throw new Error("Error en la petición: " + specieResponse.status)
        }

        const specieData = await specieResponse.json()
        console.log("\nDetalles de la especie: ", specieData)

        //Obtener la cadena evolutiva de la especie
        const evolutionChainResponse = await fetch(specieData.evolution_chain.url)

        if(!evolutionChainResponse.ok) {
            throw new Error("Error en la petición: " + evolutionChainResponse.status)
        }

        const evolutionData = await evolutionChainResponse.json()
        console.log("\nDatos de la Cadena evolutiva: ", evolutionData)

        // console.log(data.species)
        // data.species.forEach(species => {
        //     console.log(species)
        // })
    } catch(error) {
        console.log("Error: ", error)
    }
}

getDataPokemon("charizard")


// OTRA FORMA PARA SIMPLIFICAR EL IF DEL CODIGO ANTERIOR:
async function fetchWithCheck(url) {
    const response = await fetch(url)
    if(!response.ok) {
        throw new Error("Error en la petición: " + response.status)
    }
    return response.json() // Devuelve los datos como JSON
}

async function getDataPokemon(pokemonName) {
    try {
        const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
        const pokemonData = await fetchWithCheck(url)
        console.log(`Datos del pokemon ${pokemonName}: `, pokemonData)

        //Obtener la especie del pókemon
        const specieData = await fetchWithCheck(pokemonData.species.url)
        console.log("\nDetalles de la especie: ", specieData)

        //Obtener la cadena evolutiva de la especie
        const evolutionData = await fetchWithCheck(specieData.evolution_chain.url)
        console.log("\nDatos de la Cadena evolutiva: ", evolutionData)
    } catch(error) {
        console.log("Error: ", error)
    }
}

getDataPokemon("pikachu")




// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API. 
// Hecho en Postman
