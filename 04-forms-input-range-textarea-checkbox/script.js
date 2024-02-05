// анонимную функцию мы используем если мы будем использовать эту функцию один раз
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


// input password practice *************************************
document.querySelector('button').onclick = () => {
    console.log(document.querySelector('#one').value); // value — это значение введённое в данный объект
}

// input color practice *************************************
document.querySelector('button.color').onclick = () => {
    console.log(document.querySelector('#oneColor').value); 

    // джаваскрипте можно присваивать стили элементом как в CSS, написав сам объект, далее через точку .style 
    // пишем то свойства которые хотим присвоить. если свойства CSS состоит из двух слов 
    // тогда свойства пишем в стиле camelCase — backgroundColor.
    // = дальше строкой присваиваем нужно нам значение — document.querySelector('#oneColor').value;
    let randomColor = document.querySelector('#oneColor').value; // всегда объявляем переменную перед использованием её в коде.
    document.querySelector('button.color').style.backgroundColor = randomColor;
};

// input date practice *************************************
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

// input range practice *************************************
document.querySelector('button.range').onclick = () => {
    console.log(document.querySelector('#oneRange').value);
}

// задача при изменении ползунка наблюдать как меняется события
// события oninput срабатывает каждый раз когда изменяется состояние элемента.
document.querySelector('#oneRange').oninput = () => {
    console.log(document.querySelector('#oneRange').value);
    document.querySelector('span').innerHTML = document.querySelector('#oneRange').value;
}

// input checkbox practice *************************************
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

// input textarea practice ************************************
document.querySelector('button.areaButton').onclick = () => {
    let text = document.querySelector('#oneTextarea');
    console.log(text.value);
    text.value = 'test inside';
}

// input form practice ************************************
// задача научиться внутри формы останавливать её поведение
document.querySelector('button.areaButtonForm').onclick = (event) => { // передаем внутрь функции параметр event - глобальный объект события
    event.preventDefault(); //  предотвращает стандартное поведение отправки формы.
    let form = document.querySelector('form');
    console.log(form);
    console.log(form.elements.textareaId.value);
    console.log(form.elements.inputText.value);
}