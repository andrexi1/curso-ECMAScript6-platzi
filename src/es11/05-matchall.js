const regex = /\b(Apple)+\b/g;
//buscar una palabra 
const fruits = 'Apple, Banana, Kiwi, Apple, Orange, etc. etc. etc.'

for(const natch of fruits.matchAll(regex)){
    console.log(natch);
}