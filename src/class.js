//Atributos
//Metodos de instancia y ESTATICOS
// Herencia

//Diferencia entre valor estatico 
class Greeter{
    name = "unnamed"
    static greetWord = "Hello"

    constructor({name}){
        this.name = name
    }

    greet(){
        return `${Greeter.greetWord}, I'm ${this.name}`
    }
}

class User extends Greeter{
    surname = ""
    constructor({name, surname}){
        super({ name })
        this.surname = surname
    }

    greet(){
        return `${super.greet()} ${this.surname}`
    }
}

const user = new User({
    name: "John",
    surname: "Doe"
})
console.log(user.greet())
console.log(Greeter.greetWord = "Hello")
