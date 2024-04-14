// // Set - Это новый объекты которые могут содержать только уникальное значение

const a = new Set([1, 2, 3, 'Hello']);
a.add(4);
a.add('Hello'); 
a.add(1); // Сайт устанавливает коллекцию уникальных элементов, Единица в данном случае не добавится в коллекцию set
a.add(5);
a.add('2'); // === Проверка проводится не только по значению а по типу
a.add(2);
// a.clear(); // Set 0
a.delete('Hello');
a.add('Hi');
console.log(a);
console.log(a.size);
console.log(a.length); // undefined
console.log(a[0]); // undefined
console.log(a.has(2)); // true
console.log(a.has('5')); // false

for (let i of a) {
  console.log(i);
};

let arr = [1, 2, 3, 4, 5, 'Hi', 6, 7, 8];
let b = new Set(arr);
console.log(b);
console.log(b.size);

let setToArr = Array.from(b);
console.log(setToArr);
console.log(setToArr[3]);


// Task
const myArry = [true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true];

const countSheeps = (sheep) => {
  const filterResult = sheep.filter(element => element === true);
  return filterResult.length;
}

console.log(countSheeps(myArry));



