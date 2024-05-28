// Циклы While и Do while
// Цикл while — это оператор потока управления, который используется для выполнения блока кода снова и снова, пока заданное условие не станет истинным.
// Условие оценивается до того, как выполнение входит в тело цикла. Если условие истинно, выполняется тело цикла. Если условие ложно, тело цикла пропускается и цикл продолжается.
// Цикл while также известен как цикл предварительного тестирования, поскольку он выполняет оператор перед выполнением тела.
for (let i = 0; i < 6; i++) {
  console.log(typeof i);
  console.log(i);
}

// While — это ключевое слово которое запускает тело цикла
// тело цикла работает до тех пор пока в скобочках будет true

let k = 0;
while (k < 5) {
  // пока к меньше пяти условий внутри скобочках будет выполняться
  k++; // 1 2 3 4 5 — В начале `k` увеличивается потом выводится
  console.log('k: ' + k);
  if (k == 3) continue; // (цикл будет бесконечный) continue позволяет пропустить следующие итерации в цикле
  k++; // 0 1 2 3 4 — В konze `k` выводится потом увеличивается
}

/** Task 1
 * найти сумму чисел 0...10
 */

let sum = 0; // конверт куда мы будем складывать сумму всегда обозначается за пределами цикла, чтобы внутри цикла их можно было менять
let p = 0;
while (p <= 10) {
  sum = sum + p;
  p++;
}
console.log('sum = ' + sum);

/** Task 2
 * ****
 * ****
 * ****
 */

let out = document.querySelector('.out');
p = 0;
let outStr = '';
let flag = 3;

while (p < 4) {
  let p1 = 0;
  while (p1 < 4) {
    if (p1 < flag) {
      outStr += '0';
    } else {
      outStr += '*';
    }
    p1++;
  }
  flag--;
  outStr += '<br>';
  p++;
}
out.innerHTML = outStr;

/** Task 3 */
let outStar = document.querySelector('.out-2');
let i = 0;
let textOut = '';

while (i < 5) {
  // отвечает за строки
  let ins = 0;
  while (ins < 1 + i) {
    // количество звездочек в каждой строке определяется внутренним циклом, который зависит от текущего значения i.
    textOut += '*';
    ins++;
  }
  textOut += '<br>';
  i++;
}

outStar.innerHTML = textOut;
