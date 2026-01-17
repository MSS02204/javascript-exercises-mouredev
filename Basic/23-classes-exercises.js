// 1. Crea una clase que reciba dos propiedades
class Phone {
    constructor(brand, model) {
        this.brand = brand
        this.model = model
    }
}
let myPhone = new Phone("Apple", "iPhone 17")
console.log(myPhone)

// 2.Añade un método a la clase que utilice las propiedades
class PhoneWithMethod {
    constructor(brand, model, price) {
        this.brand = brand
        this.model = model
        this.price = price
    }

    getLaunchInfo() {
        console.log(`El celular ${this.brand}, modelo ${this.model}, cuesta ${this.price} dólares.`)
    }
}

let myPhone2 = new PhoneWithMethod("Samsung", "Galaxy S30", 999)

// 3. Muestra los valores de las propiedades e invoca a la función 
console.log(myPhone2.brand)
console.log(myPhone2.model)
console.log(myPhone2.price)
myPhone2.getLaunchInfo()


// 4. Añade un método estático a la primera clase
class Phone2 {

    static infoBattery() {
        console.log("La batería de este celular dura entre 12 y 48 horas dependiendo del uso.")
    }
}

// 5. Haz uso del método estático
Phone2.infoBattery()

// 6. Crea una clase que haga uso de herencia
class Food {
    constructor(name, color ) {
        this.name = name
        this.color = color
    }

}

class Fruit extends Food {
    constructor(name, color, calories ){
        super(name, color)
        this.calories = calories
    }
}

let myBanana = new Fruit("Banana", "Yellow", 89)
console.log(myBanana)
console.log(myBanana["name"])
console.log(myBanana.color)
console.log(myBanana.calories)

// 7. Crea una clase que haga uso de getters y setters

class Song {

    constructor(title, artist) {
        this._title = title 
        this.artist = artist
    }

    get title() {
        return this._title
    }

    set title(newTitle) {
        this._title = newTitle
    }   
}

let myMusic = new Song("Imagine", "John Lennon")
console.log(myMusic)
myMusic.title = "Hey Jude"
console.log(myMusic.title) // Imprime "Hey Jude"
myMusic.artist = "The Beatles"
console.log(myMusic.artist) // Imprime "The Beatles"
console.log(myMusic) // Imprime Song { _title: 'Hey Jude', artist: 'The Beatles' }
console.log("\n")

// 8. Modifica la clase con getters y setters para que use propiedades privadas
class SongPrivate {
    #title
    #artist
    #duration
    constructor(title, artist, duration) {
        this.#title = title
        this.#artist = artist
        this.#duration = duration
    }

    get title() {
        return this.#title
    }

    get artist() {
        return this.#artist
    }

    get duration() {
        return this.#duration
    }

    set title(title) {
        this.#title = title
    }

    set artist(artist) {
        this.#artist = artist
    }

    set duration(duration) {
        this.#duration = duration
    }
}

let myPrivateMusic = new SongPrivate("Bohemian Rhapsody", "Queen", "3:54")
console.log(myPrivateMusic) // Imprime SongPrivate {}, ya que todo es privado (las propiedades)
console.log(myPrivateMusic.duration) // Imprime "3:54"

// 9. Utiliza los get y set y muestra sus valores
console.log(myPrivateMusic.title) // Imprime "Bohemian Rhapsody"
myPrivateMusic.title = "I Want to Break Free"
console.log(myPrivateMusic.title) // Imprime "I Want to Break Free"
myPrivateMusic.artist = "Freddie Mercury"
console.log(myPrivateMusic.artist) // Imprime "Freddie Mercury"


// 10. Sobreescribe un método de una clase que utilice herencia.
class Console {
    constructor(brand) {
        this.brand = brand
    }

    version() {
        console.log("\nVersión genérica de consola")
    }
}

class PlayStation extends Console {
    constructor(brand, model) {
        super(brand)
        this.model = model
    }

    version() { //sobreescribimos el metodo version de la clase padre (Console)
        console.log("PlayStation 5 Digital Edition")
    }
}

let myConsoleGeneric = new Console("GenericBrand")
myConsoleGeneric.version() // Imprime "Versión genérica de consola"

let myConsole = new PlayStation("Sony", "PS5")
myConsole.version() // Imprime "PlayStation 5 Digital Edition"