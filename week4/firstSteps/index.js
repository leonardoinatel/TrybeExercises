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


