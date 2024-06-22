// String.prototype.split() - разбивает строку на массив по указанному разделителю 
let str = 'Hello, my name is John';
console.log(str.split(' ', 2)); // ["Hello,", "my", "name", "is", "John"]

// Array.prototype.join() - объединяет элементы массива в строку, разделенные указанным разделителем
let arr = ['Hello', 'my', 'name', 'is', 'John'];
console.log(arr.join(' ')); // Hello my name is John

// Array.prototype.forEach() - выполняет указанную функцию один раз для каждого элемента в массиве
let arrNew = ['Hello', 'my', 'name', 'is', 'John'];
arrNew.forEach(function(item, index, array) {
    console.log(`${index}: ${item} внутри массива ${array}`);
});