// анонимную функцию мы используем если мы будем использовать эту функцию один раз

//const { log } = require("console");

// Example 1
document.querySelector('button').onclick = function() {}

// мы даем имя функции если её будем вызывать больше одного раза
// Example 2
document.querySelector('button').onclick = myFunk;
function myFunk(){}

// стрелочные функция это дополнительная возможность писать функцию сокращенно;
// стрелочные функцию применяем там где раньше применяли анонимную
// Example 3
document.querySelector('button').onclick = () => {}


// forms password practice *************************************
document.querySelector('button').onclick = () => {
    console.log(document.querySelector('#one').value); // value — это значение введённое в данный объект
}

// forms color practice *************************************
document.querySelector('button.color').onclick = () => {
    console.log(document.querySelector('#oneColor').value); 

    // джаваскрипте можно присваивать стили элементом как в CSS, написав сам объект, далее через точку .style 
    // пишем то свойства которые хотим присвоить. если свойства CSS состоит из двух слов 
    // тогда свойства пишем в стиле camelCase — backgroundColor.
    // = дальше строкой присваиваем нужно нам значение — document.querySelector('#oneColor').value;
    let randomColor = document.querySelector('#oneColor').value; // всегда объявляем переменную перед использованием её в коде.
    document.querySelector('button.color').style.backgroundColor = randomColor;
};

// forms date practice *************************************
document.querySelector('button.date').onclick = () => {

    // задача* вывести дату на страницу
    // 1 — определяем куда хотим вывести дату
    let output = document.querySelector('.output');
    // 2 — получаем значение из input
    let text = document.querySelector('#oneDate').value;
    // 3 — устанавливаем это значение в качестве внутреннего HTML для элемента .output - ??? SASHA
    output.innerHTML = 'Date: ' + text;

    // задача* покрасить этот текст
    output.style.color = '#ff0000';

    console.log(text); // для проверки можно выводить значение в консоль
}

// forms range practice *************************************
document.querySelector('button.range').onclick = () => {
    console.log(document.querySelector('#oneRange').value);
}

// задача при изменении ползунка наблюдать как меняется события
// события oninput срабатывает каждый раз когда изменяется состояние элемента.
document.querySelector('#oneRange').oninput = () => {
    console.log(document.querySelector('#oneRange').value);
    document.querySelector('span').innerHTML = document.querySelector('#oneRange').value;
}

// forms checkbox practice *************************************
document.querySelector('button.checkButton').onclick = () => {
    console.log(document.querySelector('#oneCheckbox').value);

    // задача получить состояние чекбокса был ли он нажат или нет
    let myCheckBox = document.querySelector('#oneCheckbox');
    // У чекбокса есть свойства checked 
    console.log(myCheckBox.checked);
    if (myCheckBox.checked) {
        console.log('Push))');
    } else {
        console.log('Unpush((');
    }
}

// forms textarea practice ************************************
document.querySelector('button.areaButton').onclick = () => {
    let text = document.querySelector('#oneTextarea');
    console.log(text.value);
    text.value = 'test inside';
}

// forms form practice ************************************
// задача научиться внутри формы останавливать её поведение
document.querySelector('button.areaButtonForm').onclick = (event) => { // передаем внутрь функции параметр event - глобальный объект события
    event.preventDefault(); //  метода preventDefault() в обработчике события click предотвратит отправку формы и, соответственно, перезагрузку страницы.
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.textareaId.value);
    console.log(form.elements.inputText.value);
}

// Task 1 practice ************************************
// задача — При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

 document.querySelector('.button-1').onclick = () => {
    let output = document.querySelector('.output-1');
    output.innerHTML = '1';
    console.log('1');
};

// Task 1.01 practice ************************************
// задача — В форме При нажатии (click) на .b-1 запускайте f1, которая выводите в .out-1 число 1.

document.querySelector('.button-f1').onclick = (event) => {
    event.preventDefault();
    let output = document.querySelector('.output-f1');
    output.innerHTML = '1';
    console.log('1');
};

// Task 2 practice ************************************
// задача — При нажатии (click) на .i-2 запускайте f2, которая выводите в .out-2 число 2. 
// Т.е. как видите, мы можем повесить клик на любой элемент.

document.querySelector('.input-2').onclick = function f2() {
    let output = document.querySelector('.output-2');
    output.innerHTML = '2';
};

// Task 3 practice ************************************
// При нажатии (click) на .p-3 запускайте f3, которая выводите в .out-3 число 3. 
// Т.е. как видите, мы можем повеcить клик на любой элемент.

document.querySelector('.paragraph-3').onclick = function f3() {
    let output = document.querySelector('.output-3');
    output.innerHTML = '3';
    // задача покрасить цифру
    output.style.color = 'red';
};

// Task 4 practice ************************************
// При клике по кнопке .b-4 запускается функция f4. 
// Функция проверяет состояние .i-4 и если он checked - выводит true, если не выбран - false. 
// Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер задачи. 
// В данном случае - div.out-4

document.querySelector('.button-4').onclick = function f4() {
    console.log(document.querySelector('.input-4').value);
    
    let inputCheckbox = document.querySelector('.input-4');
    let output = document.querySelector('.output-4');
    
    console.log(inputCheckbox.checked); // true ot false

    if (inputCheckbox.checked) {
        output.innerHTML = 'true';
        console.log('Pushed:))');
    } else { 
        output.innerHTML = 'false';
        console.log('Unpushed:((');
    }
};

// Task 5 practice ************************************
// При клике по кнопке .b-5 запускается функция f5. 
// Функция проверяет состояние .i-5 и если он checked - выводит value данного элемента, 
// если не выбран - false. Вывод везде в задачах, где не указано другое, осуществляется в div.out-номер 
// задачи. В данном случае div.out-5

document.querySelector('.button-5').onclick = function f5() {
    let valueInput = document.querySelector('.input-5').value;
    let inputCheckbox = document.querySelector('.input-5');
    let output = document.querySelector('.output-5');
    if (inputCheckbox.checked) {
        output.innerHTML = valueInput;
    } else {
        output.innerHTML = inputCheckbox.checked;
    }
}
