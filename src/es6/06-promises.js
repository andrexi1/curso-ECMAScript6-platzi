const anoherFunction = () => {
    return new Promise((resolve,reject) =>{
        if(false){
            resolve('hey!');
        }else{
            reject('ouch!');
        }
    })
} 

anoherFunction()
    .then(response => console.log(response))
    .catch(error => console.log(error));
