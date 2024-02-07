// цикл это возможность выполнять операцию много раз подряд без описания каждого действия вручную
// циклы бывают трёх видов
// for () — внутри скобок идут условия на основании которых цикл выполняется либо не выполняется
// {} — в фигурной скобках И блок команд которые будут выполняться при работе цикла если условия верны
// while
// do while

// const { log } = require("console");

// for (стартовое условия; работаем пока верно; счётчик) - внутри идут условия на основании которого цикл либо выполняется либо не выполняется
// {} - блок команд которые будут повторяться при условии цикла если эти условия верны

// practice for() loop *************************************
for (let i = 0; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
} // 5 !< 5 — цикл завершается
// работаем дальше когда цикл завершается
// цикл дает возможность повторять много раз одни и те же действия
// practice for loop *************************************
for (let i = 5; i > 0; i--) {
    console.log(i); // 5 4 3 2 1 
} i = 0
// работаем дальше

// practice for() loop *************************************
for (let i = 0; i < 8; i = i + 2) { // В каждом круге итерации добавляется по два
    console.log(i); // 0 2 4 6
} 

// из цикла можно выйти раньше
// practice for() loop *************************************
for (let i = 0; i < 8; i = i + 1) {
    if (i == 4) break; // из цикла можно выйти заранее
    // break эта команда будучи выполненной которая остановит круги цикла 
    // И перейдёт после закрытой фигурные скобки к следующей команде 
    // то есть цикл не будет выполняться
    console.log(i); // 
} // 0 1 2 3

// В циклах важна логика, переместим if после console.log(i);
// practice for() loop *************************************
for (let i = 0; i < 8; i = i + 1) {
    console.log(i);
    if (i == 4) break;
} // 0 1 2 3 4

// practice for() loop *************************************
for (let i = 0; i < 8; i = i + 1) {
    console.log('************');
}

// practice for() loop *************************************
// что можно делать с помощью циклов
// let div = document.querySelector('.one'); // эта команда получает первый элемент встреченной на странице И прекращает свою работу
//     console.log(div);
//     div.style.background = 'red';
// for (let i = 0; i < 8; i = i + 1) {
// }

// practice for() loop + array *************************************
let div = document.querySelectorAll('.two'); // эта команда получает первый элемент встреченной на странице И прекращает свою работу
    console.log(div);
    // div.style.background = 'red';
for (let i = 0; i < div.length; i = i + 1) {
    console.log(div[i]);
    div[i].style.background = 'red';
    div[i].onclick = two;
}

// С помощью цикла мы можем работать с коллекциями
// можно ли применить элемента какие-либо события
function two() {
    console.log('work');
}

// practice for() loop *************************************
let b = document.getElementsByClassName('two');
let c = document.getElementsByTagName('div');

console.log(b);
console.log(c);

for (let i = 0; i < b.length; i++) {
    b[i].style.border = '2px solid green';
}

// practice for() loop - Radio Button *************************************
document.querySelector('button').onclick = () => {
    let radioButton = document.querySelectorAll('input[type="radio"]');
    console.log(radioButton);
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            console.log(radioButton[i].value);
        }
    }
}

// practice for() loop *************************************
for (let i = 0; i < 10; i++) {
    
}