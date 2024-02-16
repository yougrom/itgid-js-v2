'use strict';
// Example
let a = 16;
// >= <= == !=
if ( undefined ) {
    // true
    console.log('Yes!!!'); // первая часть конструкции либо сработает либо нет
} else { 
    console.log('No!!!');
} // вот таком виде конструкция сработает либо одно либо второе

// Example
const button = document.querySelector('button');
const input = document.querySelector('.age'); // 

button.onclick = () => { // По нажатию кнопки onclick сделайте следующие действия
    let num = +input.value; // получаем из input значения value, добавляем плюс чтобы точно было число. Чтобы мы не вводили в input оно интерпретируется как строка.
    if (num >= 16 && num < 100) { // && когда обе части правдивы
        console.log('Welcome');
    } else if (num >= 100) {
        console.log('Are you joking??');
    } else {
        console.log('No Enter');
    }
    
    // если у нас большая конструкция тогда используем switch
    switch (num) {
        case 15:
            console.log('Take your time boy!');
            break;
        case undefined:
            console.log('You are adult!');
            break;
        case '19':
            console.log('Take your time boy!');
            break;
        case NaN:
            console.log('You are adult!');
            break;
        default:
            console.log('OK!!!!');
    }
};
// () => стрелочные функция — это дополнение к обычным функциям.
// функция у которой нет имени называется анонимной
// функция используется один раз в коде
// && — и - когда оба условия правдивы
// || — или - когда одно из условий правдиво
let b = 5;
console.log(b < 7 && b == 5);
console.log(b < 7 || b != 5);


// Task 1 
// const buttonOne = document.querySelector('.b-1');
// const inputOne = document.querySelector('.i-1');
// const outOne = document.querySelector('.out-1');

// buttonOne.onclick = function f1() {
//     let textOne = +inputOne.value;
//     if (textOne == 4) {
//         outOne.innerHTML = textOne;
//         inputOne.value = '';
//     } else {
//         outOne.innerHTML = textOne;
//         inputOne.value = '';
//     }
// };

// Task 1
// Определяем функцию f1
const buttonOne = document.querySelector('.b-1');
const inputOne = document.querySelector('.i-1');
const outOne = document.querySelector('.out-1');

buttonOne.onclick = function f1() {
    let textOne = +inputOne.value; // Преобразование строки в число
    let comparisonResult = textOne == 4; // Сравнение с 4 и сохранение результата (true или false)
    outOne.innerHTML = comparisonResult; // Вывод результата сравнения (true или false)
    inputOne.value = ''; // Очистка поля ввода
};

// Task 2
let a21 = 20;
let a22 = 20;

const buttonTwo = document.querySelector('.b-2');
const outTwo = document.querySelector('.out-2');

buttonTwo.onclick = function f2(){
    if (a21 <= a22) {
        outTwo.innerHTML = a21;
    } else if (a22 > a21) {
        outTwo.innerHTML = a21;
    } else {
        outTwo.innerHTML = 'Numbers are equal';
    }
};

// Task 3
let inputThreeOne = document.querySelector('.i-31');
let inputThreeTwo = document.querySelector('.i-32');
let buttonThree = document.querySelector('.b-3');
let outThree = document.querySelector('.out-3');

buttonThree.onclick = function f3() {
    let threeOneValue = +inputThreeOne.value;
    let threeTwoValue = +inputThreeTwo.value;
    if (threeOneValue > threeTwoValue) {
        outThree.innerHTML = threeOneValue;
    } else if (threeTwoValue > threeOneValue) {
        outThree.innerHTML = threeTwoValue;
    } else {
        outThree.innerHTML = 'Value is equal';
    }
};

// Task 4
// У переменных блочная область видимости внутри функции, переменная видна только внутри функции.
let buttonFour = document.querySelector('.b-4');
let inputFour = document.querySelector('.i-4');
let outFour = document.querySelector('.out-4');

buttonFour.onclick = () => {
    let inputValue = +inputFour.value;
    let comparisonResult = inputValue == 8;
    outFour.innerHTML = comparisonResult;
};

// It's important to note that == is the equality operator and will perform type coercion if necessary to compare the values. 

// Task 5 
let buttonFive = document.querySelector('.b-4');
buttonFive.onclick = () => {

    let a = +document.querySelector('.i-4').value;
    let outFour = document.querySelector('.out-4');
    if ( a > 8 ) {
        outFour.innerHTML = true;
    } else {
        outFour.innerHTML = false;
    }

    let comparisonResult = inputValue == 8;
    outFour.innerHTML = comparisonResult;
};

// Task 10
// Создайте функцию t10, которая принимает 2 числа и возвращает большее из них.В случае равенства - первое.

function t10(x, y) {
    if (x > y) {
        return x;
    }  else if (y > x) {
        return y;
    } else if (x == y) {
        return x;
    }
}

// function t10(x, y) {
//     return Math.max(x, y);
// }

document.querySelector('.b-10').onclick = function () {
    document.querySelector('.out-10').textContent = t10(13, 13);
}