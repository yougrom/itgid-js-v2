// функция это способ организации кода

// функции выполняют наборы действий либо возвращать свое значение

// когда говорят что функция возвращает свое значение понимается что её можно присвоить переменной 
// и внутрь переменной после выполнения функции попадёт какой-то результат

// функция может не только делать какие-то действия но и возвращать значения

/** var-1 */
let f1 = document.querySelector('.f1'); 

function one() {
    console.log('work');
}
one(); // вызов функции

// f1.onclick = one; // круглых скобок не пишем


// возвращать значение
console.log(1 + one()); // NaN
console.log(one()); // undefined. Если функция ничего не возвращает она undefined.

/** var-3 */
function two() {
    console.log('work two');
    return 54; // return это меткa функции - прекратить свою работу если функция выполняется в каком-то выражении тогда вместо функции возраст значение 54
}
two();
console.log(1 + two()); // вместо функции two() подставила значение 54 из return, можно использовать в математических действиях

/** var-4 */
let a = 8;
let b = 9;
function multi() { // () - круглые скобки специальное место для параметров
    console.log(a * b);
    return a * b; // return позволяет использовать функцию в выражениях
}
let c1 = multi();
let c2 = 10 * multi();
console.log(c1, c2);

/** var-5 */
function multi2 (x, y) { // 2. - multi2 (4, 5)
    return x * y; // 3. - 4 * 5
}
multi2(4, 5); 
console.log(multi2(4, 5)); // 1. 
// 4. - 20
// функция это способ повторного использования кода 


// ######################## Оператор нулевого слияния (`??`) - ??? 

/** var-6 */
function multi3(q, r) {
    return q + r;
    // все что написано ниже терн будет проигнорировано
}
multi2(4, 5); // почему функция не срабатывает когда её вызывает — ??? #######################
// В ES6 параметры можно использовать по умолчанию.
// если не передавать параметры
console.log(multi3(100, 50));
console.log(multi3(100, a)); // функции это способ повторного использования кода, можно подставлять как значение так и переменные

// Ключевое слово return используется в функциях для возврата значения из функции обратно тому, кто вызвал эту функцию. 
// Это означает, что когда функция достигает выражения return, выполнение функции останавливается, 
// и указанное значение возвращается вызывающей стороне.

// return позволяет функции "возвращать" результат её работы обратно вызывающему коду, 
// что делает функции чрезвычайно мощным инструментом для повторного использования кода и разделения программы на модули.

// анонимная функция
// анонимная функция принято использовать там где функция вызывается один раз
// анонимная функция это способ организации кода в один блок
f1.onclick = function() { // если после function И перед () нет названия эта функция называется анонимный
    console.log('Hello анонимная функция');
}

/** var-7 **/
// анонимная функция
document.querySelector('.f2').onclick = function() {
    console.log('++++++++');
}

// стрелочные функция
document.querySelector('.f2').onclick = () => {
    console.log('arrow');
}

// стрелочные функции существуют много способов сокращения записи
/** 1 */
function (a, b) {
};

/** 1 */
(a, b) => {
};

/** 2 */
function (a) {
};

/** 2 */
a => {
};

// стрелочные функция
// стрелочные функция это один из способов написания анонимной функции
f1.onclick = () => { // если после function И перед () нет названия эта функция называется анонимный
    console.log('Hello стрелочные функция');
}

// Task 3.
// Наша предыдущая функция, сильно все еще зависима от внешних переменных. Давайте сделаем ее более универсальной. 
// Пусть функция t3 принимает 2 аргумента и возвращает (return) их произведение. 
// Допишите код функции так, чтобы она возвращала произведение двух чисел, переданных ей в качестве аргументов a, b. 
// Протестируем функцию на двух примерах, с помощью кнопок .b-3-1 и .b-3-2.
// out-3-1
// out-3-2
function t3 (a, b) {
    return a * b;
}

document.querySelector('.b-3-1').onclick = function() {
    document.querySelector('.out-3-1').textContent = t3(4, 6);
}

// Task 4
// Напишите функцию t4 которая принимает ваш год рождения и вычисляет (возвращает) ваш возраст.
function t4(present, birth) {
    return present - birth;
}
document.querySelector('.b-4').onclick = function() {
    document.querySelector('.out-4').textContent = t4(2024, 1987);
};

// Task 6
// Напишите функцию t6, которая принимает 2 числа и возвращает случайное целое число от первого до второго принятого параметра. Внимание, это первая задача, решение которой нужно найти в google. Не пишите решение сами!

function t6(a, b) {
    return Math.floor(Math.random() * (b - a +1)) + a;
}

document.querySelector('.b-6').onclick = function () {
    document.querySelector('.out-6').textContent = t6(100, 107);
}
// Math.random() генерирует случайное число между 0 (включительно) и 1 (исключительно).

// Адаптация к диапазону: Чтобы получить случайное число в диапазоне от a до b, нужно сначала умножить результат Math.random() на разницу между b и a. 
// Затем добавить a к результату, чтобы сдвинуть диапазон так, чтобы он начинался с a.

// Math.floor() для округления полученного числа вниз до ближайшего целого числа, чтобы убедиться, что результат всегда будет целым числом.

// Здесь + 1 гарантирует, что b включается в диапазон возможных значений.

// Task 7
// Напишите функцию t7, которая возвращает случайный цвет в формате rgb(x,y,z)(строка).Где x, y, z - случайные числа в диапазоне[0, 255]. 

function t7() {
    // итак, одна из сложных задач. Нам нужно
    // сделать такую строку
    // rgb(33,123,255) - числа могут быть любые от 0 до 255
    // без пробелов, через запятые 33,123,255
    // у вас есть функция t6, которая может генерировать случайные целые числа в нужном диапазоне. 
    // давайте воспользуемся ней. Просто запустим ее три раза внутри строки ниже
    return `rgb(${t6(0,255)}, ${t6(0,255)}, ${t6(0,255)})`;
}

document.querySelector('.b-7').onclick = function () {
    document.querySelector('.out-7').style.background = t7();
    
}


// Task 4
// Напишите функцию t4 которая принимает ваш год рождения и вычисляет (возвращает) ваш возраст. 

function t4(birth) {
    let presentYear = new Date().getFullYear(); // $$$$$$$$$$$$$$
    return presentYear - birth;  
}

document.querySelector('.b-4').onclick = function () {
    document.querySelector('.out-4').textContent = t4(1987);
}
