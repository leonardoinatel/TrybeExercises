let a;
let b;
let c;

// 1 
let soma = (a,b) => {
    console.log(a+b)
}

let subtracao = (a,b) => {
    console.log(a-b)
}

let divisao = (a,b) => {
    if (a > b) {    
            console.log(a/b)
    }
    else {
            console.log(b/a)
        }
}

let multiplicacao = (a,b) => {
    console.log(a*b)
}

let modulo = (a,b) => {
    console.log(a%b)
}

soma(10,2)
subtracao(8,5)
divisao(30,5)
multiplicacao(60,2)
modulo(5,2)

// exercicio numero 2

let maior1 = (a,b) => {
    if(a>b){
        console.log("Esse e o maior numero: " + a)
    }else{
        console.log("Esse e o maior numero: " + b)
    }
}

maior1 (30,1)

// exercicio numero 3

let maior2 = (a,b,c) => {
        if(a>b & a>c){
            console.log("Esse e o maior numero: " + a)
        }else if (b>a & b>c){
            console.log("Esse e o maior numero: " + b)
        }else{
            console.log("Esse numero é maior: " + c)
        }
}
    
maior2 (30,1,40)

// exercicio numero 4

let positivo = (a) => {
    if (a>0){
        console.log("Numero positovo")
    }else if (a<0){
        console.log("Numero negativo")
    }else {
        console.log("Numero e igual a 0")
    }
}

// exercicio 5 - Faça um programa que define três variáveis com 
// os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um 
// triângulo e false caso contrário.

let angulo = (a,b,c) => {
    if((a+b+c) === 180){
        console.log("E um triangulo")
    }else{
        console.log("Nao e um triangulo")
    }
}


// 6
let movimento = (peca) =>{
    if (peca === "peao" || peca === "PEAO"){
        console.log("Peao -> straight")
    }else if (peca === "cavalo" || peca === "CAVALO"){
        console.log("Cavalo -> L")
    }else if (peca === "torre" || peca == "TORRE"){
        console.log("Torre -> Horizontal/Vertical")
    }else if (peca === "bispo" || peca ==="BISPO"){
        console.log("Bispo -> diagonals")
    }else if (peca === "rei" || peca === "REI"){
        console.log("Rei -> All directions")
    }else if (peca === "rainha" || peca === "RAINHA"){
        console.log("Rainha -> All directions")
    }else {
        console.log("Peca invalida, não existe")
    }
}


// for (let linha = 0; linha <n; linha +=2){
//     let linhaAsterisco = '';
//     let rn=n-i;
//     let y=i/2;
//         for (let ri=0; ri<y; ri++){
//             linhaAsterisco += ' ';
//         }
//         for(let nAsteriscos = 0; nAsteriscos < rn; nAsteriscos++){
//         linhaAsterisco += '*';
//         }
//         console.log(linhaAsterisco);
//     i-=2;
// }

// 7
let nota = (a) =>{
    if(a<=100 && a>=0){
        if(a>=90){
            console.log("Parabens, voce recebeu um A!!!")
        }else if(a>=80){
            console.log("Muito bem, voce tirou um B")
        }else if(a>=70){
            console.log("Voce tirou um C")
        }else if(a>=60){
            console.log("Nota D")
        }else if(a>=50){
            console.log("E")
        }else{
            console.log("f")
        }
    }else{
        console.log("Erro na nota")
    }
}

nota(45)

// 8- Escreva um programa que define três números em variáveis no seu começo e retorna true se uma das três for par. Caso contrário, ele retorna false.
let vairavelPar = (a, b, c) => {
    if (a % 2 == 0 || b % 2 == 0 || c % 3 == 0) {
        return true
    }else{
        return false
    }
}

console.log(vairavelVar(15,20,23))
// =====================================================================================================================================================================
// Bonus: use somente um if.
// 9- Escreva um programa que define três números em variáveis no seu começo e retorna true se uma das três for ímpar. Caso contrário, ele retorna false.
let vairavelInpar = (a, b, c) => (a % 2 == 1 || b % 2 == 1 || c % 3 == 1) ? true : false;
// {
//     if (a % 2 == 1 || b % 2 == 1 || c % 3 == 1) {
//         return true
//     }else{
//         return false
//     }
// }
// =====================================================================================================================================================================
// Bonus: use somente um if.
// 10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20% que deve ser considerado no calculo do lucro.
// Seu programa também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.

let lucro = (a,b) => {
    if(a >=0 && b>=0){
        lucro = ((b*1.2)-a)*1000
        return console.log(lucro)
    }else{
        return console.log("Voce nao pode ter valores de entrada menores de 0")
    }
}


// =====================================================================================================================================================================
// 11- Um trabalhador de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcula o líquido a ser recebido pelo trabalhador.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
// INSS Salário bruto até R$ 1.556,94: alíquota de 8% Salário bruto 
//                        R$ 1.556,95 a R$ 2.594,92: alíquota de 9%  Salário bruto
//                        R$ 2.594,93 a R$ 5.189,82: alíquota de 11% Salário bruto
//                        R$ 5.189,83: alíquota máxima de R$ 570,88 
// IR Até R$ 1.903,98: isento de imposto de renda 
//     De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//     De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto 
//     De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//     lllllll....De R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

// Exemplo: Um trabalhador possui o salário bruto de R$ 3.000,00, o cálculo será:
// O salário bruto está entre R$ 2.594,93 a R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
// Para descobrir o salário base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.

// Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:

// R$ 2.670,00: salário com INSS já deduzido;
// 7.5%: alíquota de imposto de renda;
// R$ 142,00 parcela a se deduzir do imposto.
// Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

// O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário base - valor IR) = R$ 2.612,55.
// Resultado: R$ 2.612,55.
// Dica: que tal identificar as alíquotas com variáveis de nomes explicativos?


