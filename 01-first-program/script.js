'use strict';
let helloWorld = 'Hello World';
console.log(helloWorld);

// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';
console.log(document.getElementById('out'));

document.getElementById('out').innerHTML = '<h1>2024</h1>';

document.querySelector('h2.header').innerHTML = !500;

document.querySelector('#one').innerHTML = 'New Year';

let a; // объявление переменной
a = document.querySelector('#one'); // присвоение переменной

let b = document.querySelector('#one'); // переменная дает возможность манипулировать элементом не прописывая каждый раз путь к нему.

b.innerHTML = 'WOW!';

let c = 7;
let d = 9;
console.log(c * d);

console.log(helloWorld);



{
let a = 6;
}