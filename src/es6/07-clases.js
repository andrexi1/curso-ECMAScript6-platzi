//declarando 
class user{};
//haciendo una instancia de una clase
//const newUser = new user();

class User{
    //metodos 
    greeting(){
        return 'hello';
    }
};

const colomb = new User();
console.log(colomb.greeting());

const developr = new User();
console.log(colomb.greeting());

//constructor  donde se inicializan elementos de esta clase
class User{
    //constructor
    constructor(){
        console.log('nuevo ususario');
    }
    greeting(){
        return 'hello';
    }
}

const andres = new User();

//this hace la referencia al elemento padre que lo contiene 

class User{
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
}

const gus = new User('ana');
console.log(gus.greeting());

//setters and getters

class user{
    //metodo constructor
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //metodos
    speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get uAge(){
        return this.age;
    }
    set uAge(n){
        this.age=n;
    }
}

const bebeloper = new user('david', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge=20);
