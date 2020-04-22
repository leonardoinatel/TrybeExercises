// -------------------------------- CRIAÇÂO -----------------------------------------------------------------------------------------------------------------------
// Adicione a tag h1 com o texto Exercício 4.5 - JavaScript DOM como filho da tag body;
const h1 = document.createElement('h1');
h1.innerText = "Exercício 4.5 - JavaScript DOM";
const body = document.querySelector('body');
body.appendChild(h1);
// Adicione a tag div com a classe main-content como filho da tag body;
const div = document.createElement('div');
div.className = 'main-content';
body.appendChild(div);
// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
const divFilha = document.createElement('div');
divFilha.className = 'center-content';
div.appendChild(divFilha);
// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
const pFilha = document.createElement('p');
pFilha.innerText = 'Algum texto motivacional'
divFilha.appendChild(pFilha);
// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
const divLeft = document.createElement('div');
divLeft.className = 'left-content';
div.appendChild(divLeft);
// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
const divRigth = document.createElement('div');
divRigth.className = 'right-content';
div.appendChild(divRigth);
// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do div criado no passo 5;
const img = document.createElement('img');
img.src = 'https://picsum.photos/200';
img.alt = 'Uma imagem que choca';
img.className = 'small-image';
divLeft.appendChild(img);
// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do div criado no passo 6;
const ul = document.createElement('ul');
const numeros = ["um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dezmil"];

divRigth.appendChild(ul);

numeros.forEach(ele => {
    const li = document.createElement('li');
    li.innerHTML = ele;
    ul.appendChild(li);
})
// Adicione 3 tags h3, todas sendo filhas do div criado no passo 2.
for(let i = 0; i < 3; i+=1){
    const h3 = document.createElement('h3');
    div.appendChild(h3) 
}
// ---------------------------------------------  ALTERACAO  ------------------------------------------------------------------------------------------
// Adicione a classe title na tag h1 criada;
h1.className = 'title'
// Adicione a classe description nas 3 tags h3 criadas;
const elementH3 = document.querySelectorAll('h3');
elementH3.forEach(ele => ele.className = "description");
// Remova o div criado no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
div.removeChild(divLeft);
// Centralize o div criado no passo 6 (aquele que possui a classe right-content). Dica: para centralizar, basta configurar o margin-right: auto do div;
divRigth.style.marginRight = 'auto';
// Troque a cor de fundo do elemento pai da div criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
divFilha.style.backgroundColor = 'green'
// Remova os dois últimos elementos (nove e dez) da lista criada no passo 8.
for(let i = 0; i < 2; i+=1){
    const last = ul.lastChild;
    ul.removeChild(last)
}