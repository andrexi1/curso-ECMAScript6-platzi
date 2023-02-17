//setters and getters

class user{
    //metodo constructor
    constructor(name, age){
        this.name=name;
        this.age=age;
    }
    //metodos
    #speak(){
        return 'hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`;
    }
    get #uAge(){
        return this.age;
    }
    set #uAge(n){
        this.age=n;
    }
}

const bebeloper = new user('david', 15);
console.log(bebeloper.uAge);
console.log(bebeloper.uAge=20);
