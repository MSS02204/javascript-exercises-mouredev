// MANEJO DE APIs

// API ES EL ACRONIMO DE "APPLICATION PROGRAMMING INTERFACE" (INTERFAZ DE PROGRAMACIÓN DE APLICACIONES).
// Habitualmente iteractuamos con sistemas externos cuando estamos creando una aplicación 
// 
// Dos principios para hacer peticiones a una API:
// 1. De forma segura
// 2. De forma estandarizada
// API es un conjunto de reglas, protocolos, que permiten comunicarnos entre diferentes aplicaciones(web, movil, de servidor)  




// APIs REST (Representational State Transfer) es un estilo de arquitectura para diseñar servicios de red.) (Son mucho más potentes, flexibles y rápidas para implementarlas)
// RESTful APIs utilizan HTTP requests para realizar operaciones CRUD (Create, Read, Update, Delete).
// APIs RESTful se basan en el protocolo HTTP y utilizan URLs para acceder a la información. Se trabaja con objetos de 
// tipo JSON (JavaScript Object Notation), es un objeto para intercambiar datos entre cliente y servidor.

// APIs REST (HTTP + URLs + JSON), esos tres son estandares y lo que conforma las APIs REST
// Otras tipos de APIs: SOAP(hace años era super éstandar), GraphQL, gRPC




// HTTP (Hypertext Transfer Protocol) es el protocolo de comunicación que se utiliza en la web para 
// transferir datos entre un cliente (navegador web) y un servidor web.
// Las APIs REST utilizan métodos HTTP para podernos comunicar

// MÉTODOS HTTP (PRINCIPALES):
// GET: Obtener datos de un recurso
// POST: Enviar datos que van acabar creando un nuevo recurso
// PUT: Sirve para enviar datos al servidor, pero en este caso para actualizar un recurso existente
// DELETE: Solicitarle al servidor eliminar un recurso existente




// CÓDIGOS DE RESPUESTA HTTP:
// En el momento en que yo hago cualquier petición mediante HTTP, utilizando uno de los métodos (GET, POST, PUT, DELETE), 
// a una URL, ese servidor tiene que responder algo.  (responde con un código de estado HTTP)

// 200 OK: La solicitud se ha procesado correctamente.
// 201 Created: El recurso se ha creado correctamente (usado en respuestas a solicitudes POST).
// 400 Bad Request: La solicitud es inválida o está malformada. Hay un error por parte del cliente(frontend),
//                  he hecho algo mal. El servidor no está mal, se ha enviado algo que no se correspondia 
// 404 Not Found: El recurso solicitado no se ha encontrado en el servidor.
// 500 Internal Server Error: Ha ocurrido un error en el servidor al procesar la solicitud. Hay un error por parte del servidor(backend), no del lado cliente(frontend).




// CONSUMIR UNA API 
// GET
// Necesitamos ASYNC (asincronía) porque no queremos bloquear el flujo principal de nuestra aplicación
// y si yo hago una peticion al servidor (una aplicacion profesional puede estar haciendo mil cosas, llamando al servidor
// para traer datos) igual nuestra aplicación debe seguir funcionando, seguir moviendose, seguir haciendo cosas
// porque está trabajando de manera asincrona con el servidor.

// consumimos una API usando la funcion nativa de JS
// fetch() es una función nativa de JavaScript que nos permite hacer peticiones HTTP de manera sencilla y flexible.
// fetch()  =>  recibe como primer argumento la URL a la que queremos hacer la petición
// LAS PETICIONES QUE HACEMOS CUANDO ESCRIBIMOS EN LA BARRA DEL BUSCADOR, ES UNA PETICIÓN DE TIPO GET 
// FETCH HACE UNA CONSULTA A ESTA URL PERO DE MANERA ASINCRONA
// fetch("https://jsonplaceholder.typicodesdsd.com/posts") // Imprime Error TypeError: fetch failed
fetch("https://jsonplaceholder.typicode.com/posts") 
    .then(response => { // manejo de la respuesta
        // TRANSFORMA LA RPTA DE JSON A UN OBJETO DE JS
        // console.log(response.json()) // response.json() devuelve una promesa, por eso no podemos imprimirlo directamente. Imprime  Promise { <pending> } \n undefined
        // console.log(response) // Esto es un objeto de tipo Response. Imprime Response { status: 200, ok: true, headers: ..... }
        return response.json() // response.json() es un método que convierte la respuesta en formato JSON a un objeto de JavaScript
    })
    .then(data => { // procesamiento de los datos
        console.log(data)
    })
    .catch(error => { // CAPTURA ERRORES.
        console.log("Error", error)
    })




// ASYNC/ AWAIT EN APIs (trabajo de manera más profesional, más segura, más legible)
// Podemos usar fetch de manera asincrona con async/await
// Uso de Aync/await
async function getPosts() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")

        const data = await response.json() // response.json() devuelve una promesa, por eso usamos await

        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getPosts()




// SOLICITUD POST
// Si queremos hacer un POST tenemos que acabar indicandole 
// que en realidad ese fecth lo queremos hacer con un post
async function createPost() {
    try {
        const newPost = { // esto es un objeto JS
            userId: 1,
            title: "Este es el título de mi post",
            body: "Este es el cuerpo de mi post"
        }

        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Indicamos que es un POST
            headers: {
                "Content-Type": "application/json" // Indicamos que el contenido que enviamos es JSON (CON TEXT, CON AUDIO) )
                // (esto forma parte del propio protocolo REST)
            }, // body es el cuerpo de la solicitud, los datos que queremos enviar al servidor
            body: JSON.stringify(newPost) // body tiene que ser una cadena de texto (string), no un objeto JS 
            // Por eso tenemos que convertir el objeto newPost a JSON. Usamos JSON.stringify()
            // stringify convierte un objeto JS a una cadena de texto (string) en formato JSON
        })

        const data = await response.json() // response.json() devuelve una promesa, por eso usamos await
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

createPost()




// HERRAMIENTAS PARA REALIZAR PETICIONES HTTP
// Postman(ES UN CLIENTE HTTP): Es una herramienta popular para probar y desarrollar APIs. Permite enviar solicitudes HTTP,
//          ver respuestas, gestionar colecciones de APIs y automatizar pruebas.
// Apidog(ES UN CLIENTE HTTP): Es una herramienta para diseñar, documentar y probar APIs RESTful de manera colaborativa.
// Extensión de VS CODE Thunder Client(ES UN CLIENTE HTTP): Permite realizar solicitudes HTTP directamente desde el editor de código VS Code,
//          facilitando las pruebas y el desarrollo de APIs sin necesidad de salir del entorno de desarrollo.




// MANEJO DE ERRORES 
fetch("https://jsonplaceholder.typicode.com/mouredev") 
    .then(response => { // manejo de la respuesta
        if(!response.ok) { // ok es un boolean que indica que todas las respuestas están 
        // entre 200 y 299 y significa que la respuesta es correcta
            throw Error(`Status HTTP: ${response.status}`) // si la respuesta no es correcta, lanzo un error
        }
        // console.log(response.status) // Imprime 404
        // console.log(response)
        return response.json() // response.json() es un método que convierte la respuesta en formato JSON a un objeto de JavaScript
    })
    .catch(error => { // CAPTURA ERRORES
        console.log("Error", error)
    })


    

// MÉTODOS HTTP ADICIONALES
// PATCH: Similar a PUT, pero se utiliza para actualizar parcialmente un recurso existente en lugar de reemplazarlo por completo.
// OPTIONS: Utilizado para describir las opciones de comunicación para el recurso de destino.
//          Permite consultar al servidor qué métodos HTTP están permitidos para un recurso específico.

async function partialPostUpdate() {
    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
            method: "PATCH", // Indicamos que es un PATCH
            headers: {
                "Content-Type": "application/json" // Indicamos que el contenido que enviamos es JSON (CON TEXT, CON AUDIO) )
                // (esto forma parte del propio protocolo REST)
            }, // body es el cuerpo de la solicitud, los datos que queremos enviar al servidor
            body: JSON.stringify({title: "Este es el nuevo título de mi post"}) // body tiene que ser una cadena de texto (string), no un objeto JS 
            // Por eso tenemos que convertir el objeto newPost a JSON. Usamos JSON.stringify()
            // stringify convierte un objeto JS a una cadena de texto (string) en formato JSON
        })

        const data = await response.json() // response.json() devuelve una promesa, por eso usamos await
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}
partialPostUpdate()




// AUTENTICACIÓN MEDIANTE API KEY
// API KEY es una clave que es personal para que cuando llamemos a una API, le pasemos una clave
//  que este asociado a nosotros, para que así el servidor y la gente que ha programado eso, 
// sepa quien está interactuando con el servidor, ya que asi va a tener claro que pasa
// GUARDA CIERTA SEGURIDAD LA API KEY YA QUE SOLO LA TIENE EL CLIENTE Y EL SERVIDOR

async function  getWeather(city) {
    const apiKey ="16dcae1a102e84cf4330b19d7aa94075" // ESTA API KEY ES SOLO DE EJEMPLO, NO LA USES EN PRODUCCIÓN
    const url = `https://api.openweathermap.org/data/2.5/weather?lq=${city}&appid=${apiKey}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error", error)
    }
}

getWeather("Madrid") // Imprime los datos del clima de Madrid




// OTROS MÉTODOS DE AUTENTICACIÓN Y AUTORIZACIÓN
// Tokens JWT (JSON Web Tokens): es un estándar abierto para la transmisión segura de información entre partes como 
//                               un objeto JSON (Puede ir mas datos asociados al usuario. Nos permite modelar un objeto
//                               mucho más seguro, encriptado, con mucha más información para pasarle al servidor datos muy potentes)
// Bearer Tokens: es un tipo de token de acceso que se utiliza en la autenticación y autorización de APIs RESTful. 
//                (Le pasamos un token en la cabecera para enviarlos de manera segura)




// VERSIONADO DE APIs (cambiar las APIs sin romper la compatibilidad con versiones anteriores, cuando se requiera su cambio)
// https://api.example.com/resources (asi no)
// Lo que se hace para poder mejorar el diseño de APIs, es el versionado de APIs 
// https://api.example.com/v1/resources 
// Así nos aseguramos que la especificación de la API siempre va a estar disponible, 
// siempre va a cumplir el estandar con el que nosotros estabamos hablando con esta API, tanto como el comunicarnos con ella, 
// darle datos o lo que sea, como las cosas que nos va acabar retornando, por lo menos que cumple un estandar

// https://api.example.com/v1/resources 
// https://api.example.com/v2/resources (hay cambio, ruptura o mecanismo que va a romper la manera de comunicarnos con la API. Por eso se aumenta la versión)
// si pueden acabar manteniendo las dos URLs dentro de su API. El versionado de APIs es muy común




// OTRAS APIs
// PokeApi: https://pokeapi.co/ (es una api que puedes usar de manera gratuita para obtener datos sobre pokemones)
async function  getPokemon(pokemon) {
    // Aqui no se necesita API KEY (ningun tipo de autenticacion no se necesita)
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
        const response = await fetch(url)
        const data = await response.json()
        console.log(`Habilidades de ${data.name}`)
        data.abilities.forEach(ability => {
            console.log(ability.ability.name)
        })
    } catch (error) {
        console.log("Error", error)
    }
}

getPokemon("pikachu") // Imprime los datos del pokemon Pikachu


