const user = {username: 'andres', age: 24, country: 'colombia' };
const { username, ...values } = user;
console.log(username);
console.log(values);