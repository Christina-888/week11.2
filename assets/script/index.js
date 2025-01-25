const productOne = document.getElementById('first');
const productTwo = document.getElementById('second');
const productThree = document.getElementById('third');
const productFour = document.getElementById('forth');

const sumOne = +productOne.innerHTML;
const sumTwo = +productTwo.innerHTML;
const sumThree = +productThree.innerHTML;
const sumFour = +productFour.innerHTML;

const totalPrice = document.getElementById('total');

let totalSum = sumOne + sumTwo + sumThree + sumFour;


