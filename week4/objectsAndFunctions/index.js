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

const maior = maior => {
  let aux = maior[0];
  let indice = 0;
  maior.forEach((element, index) => {
    if (element > aux) {
      aux = element;
      indice = index;
    }
  });
  return indice;
}
console.log(maior([2, 3, 6, 7, 10, 1]));

console.log("");
console.log('Exercicio numero 3');

const menor = menor => {
  let aux = menor[0];
  let indice = 0;
  menor.forEach((element, index) => {
    if (element < aux) {
      aux = element;
      indice = index;
    }
  });
  return indice;
};
console.log(menor([2, 4, 6, 7, 10, 0, -3]));

console.log("");
console.log('Exercicio numero 4');

const maiorPalavra = arr => {
  let aux = arr[0];
  arr.forEach(element => {
    if(element.length > aux.length){
      aux = element;
    }
  })
  console.log(aux);
}
maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);

console.log("");
console.log('Exercicio numero 5');

const repetido = arr => {
  let num = {};
  let valor;
  let aux;
  arr.forEach(ele => {
    valor = ele;
    num[valor] = num[valor] === undefined ? 1 : num[valor] + 1;
  });
  valor = 0;
  for(let indice in num){
    if(num[indice] > valor){
      valor = num[indice];
      aux = indice;
    }
  }

  console.log(aux);
}
repetido([2, 3, 2, 5, 8, 2, 3])

console.log("");
console.log('Exercicio numero 6');

const somatoria = n => {
  let soma = 0;
  for(let i = 1; i <= n; i+=1){
    soma += i;
  }
  console.log(soma);
}
somatoria(5);

console.log("");
console.log('Exercicio numero 7');

const verificaFimPalavra = (word, end) => {
  const sub = word.slice(-(end.length));
  
  return (end === sub) ? true : false;
}

console.log(verificaFimPalavra("trybess", "bess"));

const romano = {
  //Unidade
  0 : [
     ''		//0
    ,'I' 	//1
    ,'II'	//2
    ,'III'//3
    ,'IV'	//4
    ,'V'	//5
    ,'VI'	//6
    ,'VII'//7
    ,'VIII'//8
    ,'IX'	//9				
  ]
  //Dezena
  ,1 : [
     ''		  //10
    ,'X'	  //10
    ,'XX'   //20
    ,'XXX'  //30
    ,'XL'   //40
    ,'L'    //50
    ,'LX'   //60
    ,'LXX'  //70
    ,'LXXX' //80
    ,'XC'   //90
  ]
  ,2 : [
    ''
    ,'C'	  //100
    ,'CC'   //200
    ,'CCC'  //300				
    ,'CD'   //400
    ,'D'    //500
    ,'DC'   //600
    ,'DCC'  //700
    ,'DCCC' //800
    ,'CM' 	//900
  ]
  ,3 : [
    ''
    ,'M'    //1000
  ]
};

const getDecimal = num => {
  const numString = num.toString();
  const tamanho = numString.length - 1;
  let string = '';
  let valorFinal = "";
  let aux = 0;

  for (let i = tamanho; i >= 0; i-=1) {
    string += numString.charAt(i);
    console.log(string)
  }  
  for (let i = tamanho; i >= 0; i-=1) {
    aux = parseInt(string.charAt(i));
    console.log(aux)
    valorFinal += romano[i][aux]; 
  }
  console.log(valorFinal)
}
getDecimal(1999);

