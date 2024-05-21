// let a = 6;
// let b = 'Hello';
// console.log(a);

// Example
// document.querySelector('button').innerHTML = 'Hello';
let inputIn = document.querySelector(".input-in"); // input

let button = document.querySelector("button"); // button
let div = document.querySelector(".out"); //
let divNew = document.querySelector(".out-new");

// эта функция выполнится только при нажатии на кнопку
button.onclick = function () {
  console.log(inputIn.value);
  console.log("Work!!");
  let b = +inputIn.value; // ставим плюс если нам нужно выводить числа, + позволяет перевести в число
  console.log(b); // то что введено в инрут
  console.log(b * 2); // NaN - если в поле value ввели String
  console.log(b / 0); // infinity
  console.log(b + 10); //
  div.innerHTML = b; // b - то что было введено в Input
  divNew.innerHTML = b;
  inputIn.value = "";
  console.log(inputIn);
};

// onclick указывает некоторый сценарий, который будет запускаться при щелчке по элементу.
// события и функции
// события это то что произошло, если я кликнула по кнопке то это событие клик
