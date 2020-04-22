const btn1 = document.querySelector('#tak1');
const btn2 = document.querySelector('#tak2');

btn1.addEventListener('click', () => alert('You clicked the button'))
btn2.addEventListener('click', () => alert(`Descount ${Math.round(39.99*0.2)} % off!!!`))