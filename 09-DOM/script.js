// https://www.tutorialstonight.com/js/js-dom-introduction

let one = document.querySelector('.one');

one.style.width = '150px';
one.style.paddingBottom = '50px'; // если название стиля в CSS пишется через дефис тогда мы используем camelCase

//console.log(one.style);

// classList— это доступ к списку классов элемента
one.classList.add('two', 'three'); // конструкция с помощью которой можно добавлять любые CSS классы

/** Хотя classListсамо свойство доступно только для чтения, 
 * его можно изменить DOMTokenListс помощью методов add(), remove(), replace()и toggle().
 */
// one.classList.remove('three'); // С помощью свойства remove мы удаляем класс из DOM дерева

// Toggle ============
const toggle = document.querySelector('.toggle');

toggle.onclick = function() {
    this.classList.toggle('three'); // this — это элемент на котором происходит события, Получаем доступ к кнопке через this
}

// Атрибуты элементов
// data атрибуты позволяют хранить дополнительную информацию в HTML элементах. 
// Они всегда начинаются с data- и могут содержать любые данные.
// Есть две возможности Создавать атрибуты И читать атрибуты.

// читать атрибуты
console.log(one.getAttribute('data')); // Получаем значение атрибута data
console.log(document.querySelector('link').getAttribute('href')); // Получаем значение атрибута href

// Если у нас несколько элементов Link тогда мы используем такой синтаксис включаем массивы
console.log(document.querySelectorAll('link')[1].getAttribute('href'));

// Как Создать и перезаписать любое атрибут

// В HTML5 рекомендуют начинать атрибуты с приставкой data-, Атрибут может быть строка и число
one.setAttribute('data-num', 6);

// Задача как посчитать стоимость бензина На сохранение Состояние элемента
let gas = document.querySelectorAll('.gas');
for(let i = 0; i < gas.length; i++) {
    gas[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value;
        let ammount = this.getAttribute('data'); // this - Эта кнопка по которой нажали
        console.log(gallons * ammount);
    }
}

// Даем объекты в HTML
let a = document.createElement('div');
a.innerHTML = 'Hello';
a.classList.add('one');
console.log(a);
a.onclick = function() {
    alert('hello');
}
// Выводим элемент на страницу
document.querySelector('.test').appendChild(a);


// Append, prepend, before, after, replaceWith, remove - JavaScript
const base = document.querySelector('.base');
// append
let div = document.createElement('div'); // Создаем div
div.textContent = 'appand'; // Добавляем в DIV текст
div.classList.add('appand'); // Добавляем класс
base.append(div); // append() Вставляется в указанный элемент в конце

// prepend
let div1 = document.createElement('div'); // Создаем div
div1.textContent = 'preppand'; // Добавляем в DIV текст
div1.classList.add('prepand'); // Добавляем класс
base.prepend(div1); // prepend() Вставляется в начало указанного элемента

// before
let div2 = document.createElement('div'); // Создаем div
div2.textContent = 'before'; // Добавляем в DIV текст
div2.classList.add('before'); // Добавляем класс
base.before(div2); // before() Добавляется Перед основным элементом base

// after
let div3 = document.createElement('div'); // Создаем div
div3.textContent = 'after'; // Добавляем в DIV текст
div3.classList.add('after'); // Добавляем класс
base.after(div3); // after() Добавляется После основным элементом base

// replaceWith
let div4 = document.createElement('div'); // Создаем div
div4.textContent = 'replaceWith'; // Добавляем в DIV текст
div4.classList.add('replace-with'); // Добавляем класс
base.replaceWith(div4); // replaceWith() Заменяет основной элемент с собой

div4.remove(); // Удаляет элемент


//  Task 4
// По нажатию кнопки .b-4 запускайте функцию f4, которая делает toggle класса .bg-orange для блока out-4.
function f4() {
    let out = document.querySelector('.out-4');
    out.classList.toggle('bg-orange');
}

document.querySelector('.b-4').onclick = f4;

//  Task 5
// По нажатию .b-5 запускайте функцию f5, которая проверяет наличие класса .bg-orange у блока .out-4 (да, именно у out-4 ). Результат - true или false, выводите в .out-5.
function f5() {
    let out5 = document.querySelector('.out-5')
    let out4 = document.querySelector('.out-4');
    let bgOrange = out4.classList.contains('bg-orange'); // Метод classList.contains следует вызывать для элемента, который нужно проверить. 
    if (bgOrange) {
        out5.innerHTML = true;
    } else {
        out5.innerHTML = false;
    }
}

document.querySelector('.b-5').onclick = f5;

// Метод classList.contains('bg-orange')возвращает значение true, если класс присутствует, а false если нет. 
// Метод contains()интерфейса DOMTokenList возвращает логическое значение — true если базовый список содержит данный токен, в противном случае false.

/**Определение функции ( function f5() {...}) :

Здесь вы определяете функцию с именем f5. Он не принимает никаких аргументов и инкапсулирует логику, которую вы хотите выполнить при вызове этой функции.
Выбор элементов :

let out5 = document.querySelector('.out-5'): Эта строка выбирает первый элемент HTML с классом out-5и сохраняет его в переменной out5. Вы будете использовать его out5 для отображения результатов проверки класса.
let out4 = document.querySelector('.out-4'): Аналогично, эта строка выбирает первый элемент класса out-4и сохраняет его в переменной out4. Это элемент, который вы хотите проверить на наличие класса bg-orange.
Проверка присутствия класса :

let bgOrange = out4.classList.contains('bg-orange'): Эта строка проверяет, имеет ли элемент out4класс bg-orange. Метод classList.contains('bg-orange')возвращает значение true, если класс присутствует, а falseесли нет. Результат этой проверки сохраняется в переменной bgOrange.
Условное заявление ( ifоператор) :

if (bgOrange) {...} else {...}: это условный оператор, проверяющий значение bgOrange.
Если bgOrangeесть true(это означает, что класс bg-orangeприсутствует в ), то выполняется out4блок кода внутри оператора: . Это устанавливает внутренний HTML-код элемента в строку «true».ifout5.innerHTML = true;out5
Если bgOrangeесть false(это означает, что класс bg-orangeотсутствует в ), то выполняется out4блок кода внутри оператора: . Это устанавливает внутренний HTML-код в строку «false».elseout5.innerHTML = false;out5
Слушатель событий :

document.querySelector('.b-5').onclick = f5;: Эта строка присоединяет прослушиватель событий к первому элементу класса b-5. При нажатии на этот элемент функция f5будет выполнена. Вот как срабатывает ваша функция.
Итак, когда вы нажимаете на элемент с классом b-5, функция f5запускается. Он проверяет, имеет ли элемент с классом out-4класс bg-orange, и отображает результат ( trueили false) в элементе с классом out-5. */