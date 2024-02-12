// цикл это возможность выполнять операцию много раз подряд без описания каждого действия вручную
// циклы бывают трёх видов
// for () — внутри скобок идут условия на основании которых цикл выполняется либо не выполняется
// {} — в фигурной скобках И блок команд которые будут выполняться при работе цикла если условия верны
// while
// do while

// const { log } = require("console");

//const { log } = require("console");

//const { some } = require("lodash");

// for (стартовое условия; работаем пока верно; счётчик) - 
// внутри идут условия на основании которого цикл либо выполняется либо не выполняется
// {} - блок команд которые будут повторяться при условии цикла если эти условия верны

// practice for() loop *************************************
for (let i = 1; i < 5; i++) {
    console.log(i); // 0 1 2 3 4
}; // 5 !< 5 — цикл завершается
// работаем дальше когда цикл завершается
// цикл дает возможность повторять много раз одни и те же действия
// practice for loop *************************************
for (let i = 5; i > 0; i--) {
    console.log(i); // 5 4 3 2 1 
}; i = 0
// работаем дальше

// practice for() loop *************************************
for (let i = 0; i < 8; i = i + 2) { // В каждом круге итерации добавляется по два
    console.log(i); // 0 2 4 6
};

// из цикла можно выйти раньше
// practice for() loop *************************************
for (let i = 0; i < 8; i = i + 1) {
    if (i == 4) break; // из цикла можно выйти заранее
    // break эта команда будучи выполненной которая остановит круги цикла 
    // И перейдёт после закрытой фигурные скобки к следующей команде 
    // то есть цикл не будет выполняться
    console.log(i); // 
}; // 0 1 2 3

// В циклах важна логика, переместим if после console.log(i);
// practice for() loop *************************************
for (let i = 0; i < 8; i = i + 1) {
    console.log(i);
    if (i == 4) break;
}; // 0 1 2 3 4

// practice for() loop *************************************
for (let i = 0; i < 8; i += 1) {
    document.write(`************ — ${i}<br>`);
};

// practice for() loop *************************************
// что можно делать с помощью циклов
// let div = document.querySelector('.one'); // эта команда получает первый элемент встреченной на странице И прекращает свою работу
//     console.log(div);
//     div.style.background = 'red';
// for (let i = 0; i < 8; i = i + 1) {
// }

// practice for() loop + array *************************************
let div = document.querySelectorAll('.two'); // после querySelectorAll() мы получили массив элементов 
// и для того чтобы с ним работать его нужно перебрать используя циклы
    console.log(div);
    // div.style.background = 'red';
for (let i = 0; i < div.length; i = i + 1) {
    console.log(div[i]);
    div[i].style.background = 'red';
    div[i].onclick = two;
};
// функция при нажатии на div с классом two в конце лог выводится Ворк
function two() {
    for (let i = 0; i < 1; i++) {
        console.log('work');
         }
};

// practice for() loop *************************************
let b = document.getElementsByClassName('two');
let c = document.getElementsByTagName('div');

console.log(b);
console.log(c);

for (let i = 0; i < b.length; i++) {
    b[i].style.border = '2px solid green';
};

// practice for() loop - Radio Button *************************************
document.querySelector('button').onclick = () => {
    let radioButton = document.querySelectorAll('input[type="radio"]');
    console.log(radioButton);
    for (let i = 0; i < radioButton.length; i++) {
        if (radioButton[i].checked) {
            console.log(radioButton[i].value);
        }
    }
};

// practice for() loop *************************************

let out = ''; // чтобы складывать в строчку oна чему-то должна равняться!
for (let i = 0; i < 10; i++) {
    if (i == 7) continue; // 0 1 2 3 4 5 6 8 9 - continue прерывает текущий круг цикла, говорит перейди на следующий круг
    out += i + ' '; // чтобы не дёргать страницу 10 раз при поиске селектора #out 
    // мы накапливаем результат в переменной out, а затем выводим результат после функции.
    if (i == 8) break; // 0 1 2 3 4 5 6 8 - break прерывай полностью цикл
};
document.querySelector('#out').innerHTML = out;

// let out = ''; // что такое пустая строка?
// что означает плюс перед равно += ?

// Task 1 *************************************
// Кнопка .b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида:
// 1_2_3_4_5_6_7_8_9_10_11_12_13_14_15_16_

document.querySelector('.button-1').onclick = function t1() {
    let outText = document.querySelector('.out-1');
    for (let i = 1; i <= 16; i++){
        console.log(i);
        outText.innerHTML += [i] +'_';
    }
};

// Как сделать без дубляжа и вывода в цикле на страницу?
// Что плохо в этом решении? Плохо то, что браузер должен перерисовать страницу 6 раз. 
// А операции ввода, вывода, рендера - всегда самые затратные по ресурсам. 
// Как следствие, если вы запустит код 2 раза, то получите еще ко всему, и дубляж кода - данные будут дописываться на страницу.

function fff(){
	// важно объявлять out внутри функции
	let out = ''; // тут даже пробела нет просто 2 кавычки
	for (let i = 0; i < 6; i++ ){
		out += i;
	}    
	// после цикла одним махом выводим
	elem.innerHTML = out;
}

// Task 2 *************************************
// Кнопка .b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида:
// 12_14_16_18_20_22_24_26_28_30_32_34_36_38_

document.querySelector('.button-2').onclick = function t2() {
    let outText = document.querySelector('.out-2');
    for (let i = 12; i < 39; i++) {
        outText.innerHTML += [i] + '_';
    }
};

// Task 3 *************************************
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
document.querySelector('.button-3').onclick = function t3() {
    let outText = document.querySelector('.out-3');
    for (let i = 25; i >= 7; i--) {  
        outText.innerHTML += [i] + '_';
    }
};

// Task 4 *************************************
// Кнопка .b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
document.querySelector('.button-4').onclick = function t4() {
    let outText = document.querySelector('.out-4');
    outText.innerHTML = '';
    for(let i = 77; i >= 35; i -= 3) {
        outText.innerHTML += [i] + '_';
    }
};

// Task 5 *************************************
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
document.querySelector('.button-5').onclick = function t5() {
    let outText = document.querySelector('.out-5');
    outText.innerHTML = ''; // Очистите предыдущий вывод, чтобы начать заново при каждом клике
    for (let i = 1; i <= 17; i++) {
        if (i % 2 === 0) {
            outText.innerHTML += [i] + '_*';
        } else {
            outText.innerHTML += [i] + '_**';
        }
    }
};

// Task 6 *************************************
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******
document.querySelector('.button-6').onclick = function t6() {
    let outText = document.querySelector('.out-6');
    let totalLines = 3;
    let threeLines = '';
    for (let lines = 1; lines <= totalLines;  lines++) {
        let threeLines = '';
        for (let star = 1; star <= 6; star++){
            threeLines += '*';
        }
        outText.innerHTML += threeLines + '<br>';
    }
};

// Task ***** - как цикл работает шаг за шагом
let numberLines = 10;
for (let lines = 1; lines <= numberLines; lines++) {
    let newSpaseForStars = ''; // объясни мне эту строчку, для чего она предназначена, почему она находится в этой части кода?
    for (let star = 1; star <= lines; star++) {
        newSpaseForStars += '*'; // как цикл понимает что на каждой строчке кода на каждой линии он должен прибавлять по одной звёздочки
    }
    console.log(newSpaseForStars);
};

// let out = ''; Пустая строка — это строковое значение, не содержащее символов. 
// Он обозначается двумя кавычками, между которыми нет ничего (''). В вашем коде let out = ''; 
// инициализируется как пустая строка, что означает, что out готов к добавлению символов, 
// но начинается с нуля.

// Что означает знак плюс перед знаком равенства (+=)? 
// Оператор += в JavaScript используется для добавления или объединения строки справа со строкой, 
// хранящейся в переменной слева. Поэтому, когда вы видите — out += i + ' ';, 
// это означает «взять текущее значение out, добавить значение i, преобразованное в строку, 
// добавить после него символ пробела, а затем сохранить результат обратно в out». 
// Этот процесс повторяется для каждой итерации цикла, эффективно создавая строку чисел от 0 до 9, 
// разделенных пробелами.

// В конце цикла out содержит строку цифр от 0 до 9, за каждой из которых следует пробел, 
// из-за операции конкатенации внутри цикла. Document.querySelector('#out').innerHTML = out; —
// Затем строка берет эту строку и устанавливает ее как внутреннее HTML-содержимое HTML-элемента 
// с выходным идентификатором, отображая результат на веб-странице.

// Training Examples
for (let j = 2; j <= 6; j++) {
    console.log(j); // 2 3 4 5 6 
};
// Training Examples
for (let i = 5; i > 0; i--) {
    console.log(i); // 5 4 3 2 1
};
// Training Examples
for (let i = 1; i <= 10; i = i + 2) {
    console.log(i); // 1 3 5 7 9
};
// Training Examples
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 5; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
};

// Training Examples
// Initialize a sum variable
// Loop from 1 to 5
// Add each number to the sum variable within the loop
// After the loop, use console.log() and template literals to print "The sum is: [sum]"
let sum = 10;
for (let i = 5; i <= 5; i++) {
    sum = sum + i; // 15
};
console.log(`The sum is: ${sum}`);

// Training Examples
// Loop from 1 to 5
// Inside the loop, use a template literal to concatenate "Hello" with the current number
// Print the result using console.log()
for (let i = 1; i <= 5; i++) {
    console.log(`"hello " + ${i}`);
};

// вывести на экран уменьшающуюся последовательность звёздочек, 
// где каждая новая строка содержит на одну звёздочку меньше, чем предыдущая, 
// можно использовать вложенные циклы `for`.
let totalLines = 5;
for (let line = totalLines; line > 0; line--) {
    let stars = '';
    for (let i = 0; i < line; i++){
        stars +='*';
    }
    console.log(stars);
};


// Task 7 Var_1 *************************************
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт). 
// + По нажатию кнопки b-7 должна запускаться функция t7, 
// которая выводит в out-7 числа от введенного пользователем до нуля включительно.
// Разделитель - знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
// 4_3_2_1_0_
// Задача решается с помощью цикла.



// document.querySelector('.button-7').onclick = function t7() {

//     let inputValue = document.querySelector('.input-7').value;
//     console.log(inputValue);
//     console.log(inputValue.length);

//     let resultOut = '';

//     for (let i = 0; i < inputValue.length; i++) {
//         resultOut = resultOut + inputValue[i] + '_';

//     }
    
//     let outInput = document.querySelector('.out-7');
//     outInput.innerHTML = resultOut;
// }

// Task 7 Var_2 *************************************
document.querySelector('.button-7').onclick = function t7() {

    let inputValue = document.querySelector('.input-7').value;
    console.log(inputValue);
    console.log(inputValue.length);

    let resultOut = '';

    for (let i = 0; i < inputValue.length; i++) {
        resultOut = resultOut + inputValue[i] + '_';
        //i = i + 1;

    }
    
    let outInput = document.querySelector('.out-7');
    outInput.innerHTML = resultOut;
}

// Task by Yakhno *************************************
const myTestArray = [1, 2, 3, 4, 5];

for(let i = 0; i < myTestArray.length; i++) {
    console.log(myTestArray[i]);
}

// = equal

myTestArray.forEach((element) => {
    console.log(element);
});

