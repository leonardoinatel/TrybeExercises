//Parte I - Objetos e For/In
console.log('Exercicio numero 1');
console.log("");
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

console.log("Bem vinda ", info.personagem);
console.log("");
console.log('Exercicio numero 2');

info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  recorrente: "Sim",
};
let info2 = {
  personagem: "Tio Patinhas", 
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas", 
  recorrente: "Sim"
};

console.log(info);
console.log("");
console.log('Exercicio numero 3');

for (let key in info){
  console.log(key);
}
console.log("");
console.log('Exercicio numero 3');

for (let key in info){
  console.log(key);
}

console.log("");
console.log('Exercicio numero 4');

for (let key in info){
  console.log(info[key]);
}

console.log("");
console.log('Exercicio numero 5');

for (let key in (info,info2)){
  console.log(info[key],"e", info2[key]);
}
console.log("");
// Parte II - Funções
console.log("");
console.log('Exercicio numero 1');
const palindrome = palavra => {
  let aux = '';
  for(let i = palavra.length-1; i >= 0; i-=1){
    aux += palavra[i];
  }
  return (palavra === aux) ? true:false;
}
console.log(palindrome('polidrome'));

console.log("");
console.log('Exercicio numero 2');

