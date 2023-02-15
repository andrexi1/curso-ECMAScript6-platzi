//enahced object literals

function newUser(user, age, country, uId){
    return {
        user ,
        age ,
        country,
        id:uId
    }
}
console.log(newUser("dx", 34, "colombia", 23))