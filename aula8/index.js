const nome = 'Matheus';
const sobrenome = 'Henrique';
const idade = 21;
const peso = 72;
const altura = 1.76;
let imc;
let anoNasc;
imc = peso / (altura * altura);
anoNasc = 2023 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNasc}`);