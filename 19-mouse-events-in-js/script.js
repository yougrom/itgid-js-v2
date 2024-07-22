document.querySelector('.one').onclick = function (event) {
  console.log(event);
  console.log('click');
};

// onclick - клик мышью на элемент
// document.querySelector('.two').onclick = function (event) {
//   console.log('click2');
// };

// ondblclick - двойное нажатие на элемент
document.querySelector('.two').ondblclick = (event) => {
  console.log(event);
  console.log('double click');
};

// oncontextmenu - правая кнопка мыши
document.querySelector('.two').oncontextmenu = (event) => {
  console.log(event);
  console.log('right click');
};

// onmousemove - движение мыши
// let w = 75;
// document.querySelector('.three').onmousemove = (event) => {
//   document.querySelector('.three').style.width = w + 'px';
//   w++;
// };

// onmouseenter - наведение на элемент
document.querySelector('.three').onmouseenter = () => {
  document.querySelector('.three').style.background = 'red';
  console.log('enter');
};

// onmousedown - нажатие на кнопку мыши
document.querySelector('.three').onmousedown = () => {
  document.querySelector('.three').style.background = 'green';
  console.log('leave');
};

// onmouseup - отпускание кнопки мыши
document.querySelector('.three').onmouseup = () => {
  document.querySelector('.three').style.background = 'blue';
  console.log('leave');
};

// Progres
let p = 10;
document.querySelector('button').onclick = function (event) {
  p++;
  document.querySelector('progress').value = p;
};
