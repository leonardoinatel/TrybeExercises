// parentNode: retorna o elemento pai.
// childNodes: retorna um array com todos os elementos filhos
// firstChild: retorna o primeiro filho
// lastChild: retorna o último filho
// nextSibling: retorna o próximo nó.
// previousSibling: retorna o nó anterior.
// nextElementSibling: retorna o próximo elemento.
// previousElementSibling: retorna o elemento anterior.}

// Acesse o elemento elementoOndeVoceEsta.
const voceSta = document.getElementById('elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
voceSta.parentNode.style.color = 'red';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
console.log(voceSta.firstChild.nodeName = "PrimeiroFilho"); 
// Acesse o primeiroFilho a partir de pai.
const pai = document.getElementById('pai');
console.log(pai.childNodes[1]);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
console.log(voceSta.previousElementSibling);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(voceSta.parentNode.textContent);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(voceSta.nextElementSibling);
// Agora acesse o terceiroFilho a partir de pai.
console.log(pai.childNodes[5]);
