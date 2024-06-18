// loop for - цикл для массивов
// Предполагает перебор значений массива
let arr = [11, 21, 31, 41, 51];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]); // 1 2 3 4 5
// }

// loop for in - цикл для объектов
// Предполагает перебор ключей объекта
for (let key in arr) {
  // console.log(key); // ключи 0 1 2 3 4 (ключи массива)
  // console.log(arr); // значения (5) [11, 21, 31, 41, 51] (массив) 5 - длина массива
  // console.log(arr[key]); // значения 11 21 31 41 51  (значения массива)
}

// loop for of - цикл для массивов
// Предполагает перебор значений массива
// for (let value of arr) {
//   console.log(value); // 11 21 31 41 51
// }

// Example 1
let allP = document.getElementsByTagName('p');

console.log(allP); // HTMLCollection(3) [p, p, p]
// HTMLCollection - это коллекция, которая содержит все элементы с тегом p на странице в виде массива (псевдомассива)
console.log(allP[0]); // <p>1</p>
for (let i = 0; i < allP.length; i++) {
  allP[i].style.border = '1px solid red';
}

// Example 2
for (let value of allP) {
  console.log(value); // <p>1</p> <p>2</p> <p>3</p>
}

// Example 3
let qP = document.querySelectorAll('p');
console.log(qP); // NodeList(3) [p, p, p]
// NodeList - это коллекция, которая содержит все элементы с тегом p на странице в виде массива (псевдомассива)
// NodeList & HTMLCollection - это псевдомассивы, которые содержат элементы страницы и позволяют к ним обращаться
// NodeList - более универсальный, чем HTMLCollection
// NodeList - это результат работы метода querySelectorAll
// HTMLCollection - это результат работы методов getElementsByTagName, getElementsByClassName, getElementsByName
// difference between NodeList and HTMLCollection - https://www.geeksforgeeks.org/difference-between-nodelist-and-htmlcollection/

// ********************************************************************************************************
// for...of Example 4 —  — https://www.youtube.com/watch?v=_Jxe-WacgUs
const basket = [{ price: 20 }, { price: 30 }, { price: 40 }, { price: 50 }];
for (let item of basket) {
  console.log(`Price: ${item.price}`);
}

// for...of Example 5
const basket1 = [
  { name: 'apple', price: 20 },
  { name: 'orange', price: 30 },
  { name: 'banana', price: 40 },
  { name: 'kiwi', price: 50 },
];
for (const { name, price } of basket1) {
  // { name, price } — деструктурирующие оператор
  // деструктуризация объекта - достаем свойства объекта в переменные name и price
  console.log(`Price of ${name} is ${price}`);
}

// for...in - работает с Ключами объекта (не с массивами)
const basket2 = {
  laptop: 1500,
  smartphone: 1000,
  tablet: 800,
};
for (let key in basket2) {
  const price = basket2[key];
  console.log(`Price of ${key} is ${price}`);
}

// Замена цикла for...in На for...of — Object.keys()
const electronics = {
  laptop: 1500,
  smartphone: 1000,
  tablet: 800,
};
for (let name of Object.keys(electronics)) {
  const price = electronics[name];
  console.log(`Price of ${name} is ${price}`);
}
// Object.keys(electronics) возвращает массив ключей (названий свойств) объекта electronics, то есть ['laptop', 'smartphone', 'tablet'].
// Цикл for...of перебирает каждый ключ (название свойства) из этого массива.
// Внутри цикла значение price получается из объекта electronics по текущему ключу name.
// В данном примере мы сначала получаем массив ключей с помощью Object.keys(), а затем, уже внутри цикла, используя каждый ключ, обращаемся к значению.
// Таким образом, каждый шаг цикла включает два действия: получение ключа и использование этого ключа для доступа к значению.

// Замена цикла for...in На for...of — Object.entries()
const electronics1 = {
  laptop: 1500,
  smartphone: 1000,
  tablet: 800,
};
for (const [name, price] of Object.entries(electronics1)) {
  console.log(`Price of ${name} is ${price}`);
}
// Object.entries(electronics1) возвращает массив пар [ключ, значение] из объекта electronics1, то есть [['laptop', 1500], ['smartphone', 1000], ['tablet', 800]].
// Цикл for...of перебирает каждую пару [ключ, значение] из этого массива.
// Внутри цикла происходит деструктуризация каждой пары на переменные name и price.
// В данном примере мы сразу получаем массив пар ключ-значение с помощью Object.entries(), и каждая итерация цикла предоставляет нам уже готовые для использования ключ и значение.
// Это делает код более лаконичным и удобным, так как не требуется дополнительное обращение к объекту для получения значений.

// Task
let arrNew = ['1', '2', '3', '4'];
let q = arrNew.splice(1, 2, 'Hi', 'hello');
console.log(q);
console.log(arrNew);
