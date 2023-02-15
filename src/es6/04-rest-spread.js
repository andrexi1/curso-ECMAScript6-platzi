//asignacion de desestructuracion
// arrays destructuring

let fruits = ['apple', 'banana' ];
let [a, b] = fruits;
console.log(a, fruits[1]);

//object destructuring

let user = {userName:'oscar', age : 36};
let {userName, age} = user;
console.log(userName, age);


//spread operator

let person = {name : 'oscar', age : 28};
let country = 'colombia';

let data = { id:1, ...person, country};
console.log(data);


//rest 

function sun(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sun(1, 1, 2, 3, 4);