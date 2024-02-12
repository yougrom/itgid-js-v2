// вложенные циклы
// когда создавать переменную?
// переменная повышает читабельность кода
// если нужно использовать один и тот же элемент несколько раз

// Exercise 1 *************************************
let out = document.querySelector('.out');

for (let i = 0; i < 5; i++) {
    // 1. i = 0
    for (let k = 0; k < 10; k++) {
        // 1. k = 0
        out.innerHTML += '*';  
    }
    out.innerHTML += '<br>';
};

// Exercise 2 *************************************
let out2 = document.querySelector('.out-2');
for (let i = 1; i < 5; i++) {
    // out2.innerHTML +='3*'+i+'='+(i*3)+'<br>'; // конкатенация
    for (let k = 1; k < 10; k++) {
        out2.innerHTML +=`${i}*${k}=${k * i}<br>`; // интерполяция
    }
    out2.innerHTML += '<hr>';
};