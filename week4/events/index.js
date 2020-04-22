// exercicio 1 
const noun = document.querySelector('#noun');
const adjective = document.querySelector('#adjective');
const person = document.querySelector('#person');
const story = document.querySelector('#story');
const btn = document.querySelector('#lib-button');

const makeMadLib = () => {
    const string = `${noun.value} é algo muito ${adjective.value} por ${person.value}`;
    story.innerHTML = string;
}

btn.addEventListener('click', makeMadLib);
