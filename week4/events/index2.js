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


let squareButton = document.getElementById("square-button");
let halfButton = document.getElementById("half-button");
let percentButton = document.getElementById("percent-button");
let areaButton = document.getElementById("area-button");

squareButton.addEventListener("click", () => document.getElementById("solution").innerHTML = squareNumber(document.getElementById("square-input").value));
halfButton.addEventListener("click", () => document.getElementById("solution").innerHTML = halfOf(document.getElementById("half-input").value));
areaButton.addEventListener("click", () => document.getElementById("solution").innerHTML = areaOfCircle(document.getElementById("area-input").value));

percentButton.addEventListener("click", () => {
  var num1 = document.getElementById("percent1-input").value;
  var num2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML = `${num1} equivale a ${percentOf(num1, num2)} % de ${num2}`;
});
    


