// exercicio numero 1 
const quadrado = (n) => {
    if (n <= 1) return console.log("Erro, o numero precisa ser maior que 1");
    let string = '';
    for(let i = 0; i < n; i++){
        string = string + "*";
    }
    for(let i = 0; i < n; i++){
        console.log(string);
    }
}
console.log('Exercicio numero 1');
quadrado(5);
console.log("");


// exercicio numero 2
const triangulo = (n) => {
    if (n <= 1) return console.log("Erro, o numero precisa ser maior que 1");
    let string = '';
    for(let i = 0; i < n; i++){
        console.log(string = string + "*");
    }
}
console.log('Exercicio numero 2');
triangulo(5);
console.log("");

const trianguloInvertido = n => {
    if (n <= 1) return console.log("Erro, o numero precisa ser maior que 1");

    let string = "";
    for (let i = 0; i < n; i+=1){
        for (let j = 0; j < n ; j+=1){
            if(j < (n - (i + 1))) {
                string = string + " ";
            } else {
                string = string + '*'
            } 
        }
        console.log(string);
        string = "";
    }
}
console.log('Exercicio numero 3');
trianguloInvertido(5);
console.log("");

const piramideBase = n => {
    if (n <= 1) return console.log("Erro, o numero precisa ser maior que 1");

    let string = "";
    let spacoPar = (n / 2) - 1;
    let spacoImpar = n / 2;
    const ast = "*";
    const space = " ";

    if (n % 2 === 0){
        for (let i = 2; i <= n; i+=2){
            string = space.repeat(spacoPar) + ast.repeat(i) + space.repeat(spacoPar);
            console.log(string);
            spacoPar -= 1;
        }
    } else {
        for (let i = 1; i <= n; i+=2){
            string = space.repeat(spacoImpar) + ast.repeat(i) + space.repeat(spacoImpar);
            console.log(string);
            spacoImpar -= 1;
        }
    }
}
console.log('Exercicio numero 4');
piramideBase(8);
console.log("");

const piramideVazia = n => {
    if (n <= 1) return console.log("Erro, o numero precisa ser maior que 1");

    let string = "";
    let spacoImpar = n / 2;
    const ast = "*";
    const space = " ";

    for (let i = 1; i <= n; i+=2){
        if(i == 1) {
            string = space.repeat(spacoImpar) + ast.repeat(i) + space.repeat(spacoImpar);
            console.log(string);
            spacoImpar -= 1;
        } else if (i == n) {
            string = ast.repeat(i);
            console.log(string);
        } else {
            string = space.repeat(spacoImpar) + "*" + space.repeat(i - 2) + "*";
            console.log(string);
            spacoImpar -= 1;
        }
    }
    
}

console.log('BONUS : Exercicio numero 5');
piramideVazia(7);
console.log("");

let primoOrNot = (a) => {
    if (a%2 != 0 && a%3 != 0 && a%4 != 0 && a%5 != 0 && a%6 !=0 && a%7 != 0 && a%8 != 0 && a%9 != 0){
        console.log("Numero "+a+" é um numero primo")
    }
    else{
        console.log("O numero "+a+" não é um numero primo")
    }
}
console.log('BONUS : Exercicio numero 6');
primoOrNot(100)
console.log("");
