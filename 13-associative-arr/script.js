const a = {
  "a": 1,
  "b": 'Hello',
  "c": true,
  "d": [1, 2, 3],
  "e": {
    "name": 'Alex',
    "age": 25
  },
};
// Отличия ассоциативного массива от обычного:
// 1. В ассоциативном массиве ключи могут быть строками и числами, а в обычном только числа

a.y = 100; // Добавление нового элемента в массив
a.c = false; // Изменение значения элемента
// Как удалить значение элемента в массиве
delete a.b; // Удаление элемента
console.log(a);
console.log(a["a"]);
console.log(a.e);

let k = 'b';
console.log(a[k]); // Hello
console.log(a["e"]["name"]); // Alex

let out = '';
for (let key in a) {
  out += key + ' = ' + a[key] +'<br>'; // Вывод всех значений массива
}
document.querySelector('.out').innerHTML = out;


