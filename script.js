console.log('Hello!');
// document.getElementById('idSelect') // laays ra phan tu co id là idSelect
// innerHTHML - lấy ra nội dung html bên trong của phần từ và có thể set html cho phần tử đó
// innerText - lấy nôị dung dạng text và set
// style // thay đổi cách hiện thị
// insertChild,createElement
// remove - xoá phần từ
// onclick : click vào 1 phần tư
// onchange: thay đổi giá trị input
// onmouseover : di chuyển chuyển chuột
// onkeypress: khi gõ vào ô input
// function : tạo 1 hàm chưa 1 đoạn code thực hiện chức năng

/// may tinh
// nhap vao 2 so , in cac phep tinh ra man hinh
// 2 4 => 2+4 = 10
// 2 o input, 4 phep tinh=> 4 nut => 4 ham
// 1 the hien thi ket qua

// lay 2 input
let firstNumber = document.getElementById('firstNumber');
let secondNumber = document.getElementById('secondNumber');
let resultElememt = document.getElementById('result');
let addBtn = document.getElementById('addBtn');
let minusBtn = document.getElementById('minusBtn');

// click, change, keypress, keyup, keydown
addBtn.addEventListener('click', function () {
  console.log(1);
});

minusBtn.addEventListener('click', function () {
  minus();
});

firstNumber.addEventListener('keyup', function (event) {
  
});
//
function add() {
  console.log(firstNumber.innerText);
  let first = +firstNumber.value;
  let second = Number(secondNumber.value);
  let result = sum(first, second);
  resultElememt.innerHTML = `<b>${first} + ${second} = ${result} </b>`;
}

function minus() {
  console.log('minus');
  let first = +firstNumber.value;
  let second = +secondNumber.value;
  let result = first - second;
  resultElememt.innerText = `${first} - ${second} = ${result}`;
}

function sum(a, b) {
  return a + b;
}

function onKeyPress() {
  console.log('click');
}
