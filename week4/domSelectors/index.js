/*
    Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
*/

// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
const twoYearsLater = document.getElementsByTagName('p')[1];
twoYearsLater.innerText = "Eu me vejo daqui dois anos em são paulo trabalhando e crescendo profissionalmente";

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe.
const mudaCor = (color) => document.getElementsByClassName('main-content')[0].style.backgroundColor = color;
mudaCor("#0fa36b");

// Crie uma função que mude a cor do quadrado vermelho para branco.
const mudaCor2 = (color) => document.getElementsByClassName('center-content')[0].style.backgroundColor = color;
mudaCor2("white");

// Crie uma função que corrija o texto da tag <h1>. Exercício 4.4 - JavaEscripito
const mudaTexto = (palavra) => document.getElementsByTagName('h1')[0].innerText = `Exercício 4.4 - ${palavra}`;
mudaTexto("DOM - Document Object Mananger");

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
const upperCase = () => twoYearsLater.innerText = document.getElementsByTagName('p')[1].innerHTML.toUpperCase();
upperCase();

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
const imprime = () => {
    const tagP = document.getElementsByTagName('p');
    for (let i = 0; i < tagP.length; i+=1){
        console.log(tagP[i].innerHTML)
    }

    tagP.forEach(element => {
        console.log(element.innerText)
    });
}
imprime();