'use strict';
let helloWorld = 'Hello World';
console.log(helloWorld);

// alert('Hello');

document.getElementById('out').innerHTML = 'Hello';

document.getElementById('out').innerHTML = '<em>2024</em>';

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