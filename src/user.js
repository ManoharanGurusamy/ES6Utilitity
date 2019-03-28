let userName = 'Manoharan Gurusamy';
const greetUser = (user = userName) => `Hello ${user}`;
console.log(greetUser());
console.log(greetUser('Bindhu'));
