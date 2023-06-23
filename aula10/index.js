let nome = 'Matheus'; //String
let nome2 = "Matheus"; //String
let nome3 = `Matheus`; //String

let numero = 10; //Number
let numero2 = 12.52; //Number

let nomeNumero; // Undefined = indefinido - não aponta para local nenhum na memória

let outroNome = null; 

let aprovado = true;
let aprovado2 = false;

console.log(typeof boolean2);

//VALOR POR REFERENCIA
let a = [1,2];
let b = a;

b.push(3);
console.log(a, b);