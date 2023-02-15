

function newUser(name, age, country){
    var name = name || 'oscra';
    var age = age || 34;
    var country = country || 'colombia';
    console.log(name, age, country);
}

newUser();
newUser('david', 16, 'españa');

//parametros por defecto
function newAdmin(name = 'oscar', age = 345, country = 'argentina' ){
    console.log(name, age, country);
}

newAdmin();
newAdmin('ana', 28, 'peru');