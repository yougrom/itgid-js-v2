const a = {
  a: 1,
  b: 'Hello',
  c: true,
  d: [1, 2, 3],
  e: {
    name: 'Alex',
    age: 25,
  },
  y43: 1999,
  'villa de': 3024,
};

// "a", "b" ... — это ключ или индекс
// y43 — включи могут быть без кавычек
// 'villa de' - Ключ может состоять из двух слов но он должен быть заключён в "

// Отличия ассоциативного массива от обычного:
// 1. В ассоциативном массиве ключи могут быть строками и числами, а в обычном только числа
// В обычном массиве индексом выступает число, в ассоциативном массиве индексом выступает строка и число.

a.y = 100; // Добавление нового элемента в массив
a.c = false; // Изменение значения элемента
// Как удалить значение элемента в массиве
delete a.b; // Удаление элемента
console.log(a);
console.log(a['a']);
console.log(a.e);

let k = 'b';
console.log(a[k]); // Hello

// document.querySelector('.out').innerHTML = a; — такой способ вывода ассоциативного массива не подходит

console.log(a['e']['name']); // Alex

let out = '';
for (let key in a) {
  out += key + ' = ' + a[key] + '<br>'; // Вывод всех Ключ и значений массива
}
document.querySelector('.out').innerHTML = out;

let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let out = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      out.push(arr[i]);
    }
  }
  return out;
}

let filtered = filterRange(arr, 1, 4);

console.log(filtered); // 3,1 (совпадающие значения)

console.log(arr); // 5,3,8,1 (без изменений)

// Task
let arr1 = [5, 2, 1, -10, 8];
arr1.sort().reverse().reverse().reverse();
// ... ваш код для сортировки по убыванию

console.log(arr1); // 8, 5, 2, 1, -10

const items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic', value: 13 },
  { name: 'Zeros', value: 37 },
];

// sort by value
const abc = items.sort((a, b) => a.value - b.value).reverse();

// sort by name
// const abc = items.sort((a, b) => {
//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// });

console.log(abc);
