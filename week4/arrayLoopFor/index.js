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
console.log("");
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
console.log("");
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
console.log("");
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
        // string = space.repeat(spacoPar+0.5) + ast.repeat(1) + space.repeat(spacoPar);
        // console.log(string);
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
console.log("");
piramideBase(8);
console.log("");
