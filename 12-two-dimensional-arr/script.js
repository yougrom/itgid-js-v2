let a = [4, 5, 6];
let b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
//console.log(b);

// for (let i = 0; i < b.length; i++) {
//   // console.log(b[i]);
//   let c = b[i];
//   // console.log(c);
//   for (let k = 0; k < c.length; k++) {
//     // console.log(c[k]); // 123456789
//   }

//   for (let z = c.length -1; z >= 0; z--) {
//     // console.log(c[z]); // 321 654 987
//   }

//   for (let r = 0; r < b[i].length; r++) {
//     // console.log(b[i][r]); // 1 2 3 4 5 6 7 8 9
//   }
// };

// Task 2
// let out = '';
// for (let i = 0; i < b.length; i++) {
//   for (let k = 0; k < b[i].length; k++) {
//     // console.log(b[i][k]);
//     out += b[i][k] + ' ';
//     // out = b[0][0];
//   }
//   out += '<br>';
// // }
// document.querySelector('.out').innerHTML = out;

// Task 3
let out = '';
for (let i = 0; i < b.length; i++) {
  for (let k = 0; k < b[i].length; k++) {
    // console.log(b[i][k]);
    if (b[i][k] > 3) {
      out += b[i][k] + ' ';
    }
  }
  out += '<br>';
}
console.log(out);
document.querySelector('.out').innerHTML = out;

// Task 4
let d = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0];
document.querySelector('.out2').innerHTML = d;
let k = 0;
document.querySelector('button').onclick = () => {
  if (k + 1 <= 9) {
    d[k] = 0;
    d[k + 1] = 1;
    k++;
  }
  document.querySelector('.out2').innerHTML = d;
};
