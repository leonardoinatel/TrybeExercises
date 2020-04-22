function squareNumber(num) {
  var squaredNumber = num * num;
  console.log('The result of squaring the number ' + num + ' is ' + squaredNumber);
  return squaredNumber;
}

function halfOf(num) {
  var half = num / 2;
  console.log('Half of ' + num + ' is ' + half);
  return half;
}

function percentOf(num1, num2) {
  var percent = (num1 / num2) * 100;
  console.log(num1 + ' is ' + percent + '% of ' + num2);
  return percent;
}

function areaOfCircle(radius) {
  var area = Math.PI * squareNumber(radius);
  console.log('The area of circle with radius ' + radius + ' is ' + area);
  return area;
}

const squareButton = document.getElementById("square-button");
const halfButton = document.getElementById("half-button");
const percentButton = document.getElementById("percent-button");
const areaButton = document.getElementById("area-button");
const solution = document.getElementById("solution");
const num1 = document.getElementById("percent1-input");
const num2 = document.getElementById("percent2-input");

squareButton.addEventListener("click", () => solution.innerHTML = squareNumber(document.getElementById("square-input").value));
halfButton.addEventListener("click", () => solution.innerHTML = halfOf(document.getElementById("half-input").value));
areaButton.addEventListener("click", () => solution.innerHTML = areaOfCircle(document.getElementById("area-input").value));
percentButton.addEventListener("click", () => solution.innerHTML = `${num1.value} equivale a ${percentOf(num1.value, num2.value)} % de ${num2.value}`);