// Массив это способ представления данных в связанном виде, Задача массивов логически предоставлять связанные структуры данных.

let ab = 'Yuriy';
let bc = '37';
let de = 'Aries';
// Чтобы обратиться к элементам массива используют индекс, элемент массива называется значением. Нумерация значений начинается с нуля
// В массиве могут содержаться разные типы данных
let c = ['Yuriy', 37, 'Aries'];
let e = [];
console.log(c[0]);
console.log(c[5]); // При обращении к несуществующему элементу джаваскрипт возвращает undefined
console.log(c);
console.log(c.length);
console.log(c[2]);

// чтобы изменить данные в массиве
c[0] = 'Yuriy Gromov';
console.log(c);

//********************************************************************************* */
// Как поменять местами значения массива
let a = [1, 2, 3, 4];
console.log(a);

let t = a[0]; // 1
a[0] = a[a.length - 1]; // Вычисляет последний элемент массива.
a[a.length - 1] = t;
console.log(a);
console.log(a[666]); // Обращение к элементу массива которого не существует возвращает значение undefined

//********************************************************************************* */
// Выводим массив на страницу
let out = ''; // Переменная out инициализируется как пустая строка, чтобы в дальнейшем в неё можно было добавлять данные.
for (let i = 0; i < a.length; i++) {
  // цикл for перебирает массив a. Он начинается с i = 0 и продолжается до тех пор, пока i меньше длины массива a. В каждой итерации цикла значение i увеличивается на 1.
  if (a[i] % 2 == 0) {
    out += a[i] + '_ _ '; // Доступ к элементу массива: a[i] обращается к элементу массива a, Конкатенация строк: += это оператор, который добавляет значение справа от него к переменной слева.
  }
}
document.querySelector('.out-1').innerHTML = out;

//********************************************************************************* */
// Запомните этот пример он вам в жизни пригодится, я имею в виду жизнь программистской, она не совсем нормальная.
//********************************************************************************* */
// Найти минимальный и найти максимальный элемент в массиве

let max = b[0]; // - объявляется переменная max и инициализируется первым элементом массива b, то есть 45. Это начальное предположение о максимальном значении.
for (let i = 0; i < b.length; i++) {
  if (b[i] > max) {
    // min Отличается только знаком <
    max = b[i];
  }
}
console.log('max: ' + max);

//********************************************************************************* */
// Нахождение суммы
let sum = 0;
for (let i = 0; i < b.length; i++) {
  sum = sum + b[i];
}
console.log('sum: ' + sum);

// Practice

const arr = [1, 2, 3]; // arr[0] - 1

const arr2 = [
  [1, 2, 3],
  [12, 15, 23],
  [4, 5, 6], // arr2
];

// for
const numbers = [10, 20, 30, 40];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i] * 2);
}

// forEach()
const num2 = [2, 4, 6, 8];
num2.forEach((item) => console.log(item * 2));

// map()
const num3 = [3, 6, 9, 12];
let q = num3.map((item) => item * 2);
console.log(q);

// Medium
// const fruits = ['apple', 'banana'];
// const addedFruits = fruits.push('cherry'); // Add 'cherry' to the end
// const removedFruit = fruits.pop(); // Remove and return 'cherry'
// console.log(fruits);
// console.log(addedFruits);
// console.log(removedFruit);

// MDN
const animals = ['pigs', 'goats', 'sheep'];

animals.push('cows');

console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens"]

animals.push('aligator');
console.log(animals);

animals.push(25);
console.log(animals);

animals.pop();
console.log(animals);

animals.unshift('Macbook');
console.log(animals);

// concat()
let fruits = ['apple', 'banana'];
let vegetables = ['carrot', 'spinach'];
let combined = fruits.concat(vegetables); // Merge arrays
console.log(fruits);
console.log(vegetables);
console.log(combined);

// slice() - 2 параметра с какого по какой
let fruitsNew = ['apple', 'banana', 'cherry', 'date', 'carrot', 'spinach'];
let slicedFruits = fruitsNew.slice(2, 5); // Extract 'banana' and 'cherry'
console.log(fruitsNew);
console.log(slicedFruits);

// splice() ???
let fruitsSplice = [
  'apple',
  'banana',
  'cherry',
  'date',
  'carrot',
  'spinach',
  'cherry',
];
let spliceNew = fruitsSplice.splice(1, 3, 'grape'); // Replace 'banana' with 'grape'
console.log(fruitsSplice);
console.log(spliceNew);

// filter()
let numbersFilter = [1, 2, 3, 4, 5];
let evenNumbers = numbersFilter.filter(function (num) {
  return num > 3; // Select even numbers
});
console.log(numbersFilter);
console.log(evenNumbers);

// every() and some()
let numbersEvery = [2, 5, 4, 12, 3];
// let allEven = numbersEvery.every(function (num) {
//  return num >= 2; // Если одно неверное все выражение неверно
// });
let hasEven = numbersEvery.some(function (num) {
  return num === 8; // Если хотя бы одно верно
});
console.log(numbersEvery);
// console.log(allEven);
console.log(hasEven);

// find() and findIndex()
let fruitsFind = ['apple', 'banana', 'cherry'];
// let foundFruit = fruitsFind.find(function (fruit) {
//  return fruit === 'orange'; // Find 'banana'
// });
// console.log(fruitsFind);
// console.log(foundFruit);

let foundIndex = fruitsFind.findIndex(function (fruit) {
  return fruit === 'cherry'; // Find the index of 'banana'
});
console.log(fruitsFind);
console.log(foundIndex);
