const productOne = document.getElementById('first');
const productTwo = document.getElementById('second');
const productThree = document.getElementById('third');
const productFour = document.getElementById('forth');

const sumOne = +productOne.innerHTML;
const sumTwo = +productTwo.innerHTML;
const sumThree = +productThree.innerHTML;
const sumFour = +productFour.innerHTML;

const totalPrice = document.getElementById('total');
const priceWithoutDiscount = document.getElementById('first-sum');

let totalSum = sumOne + sumTwo + sumThree + sumFour;
const countWithoutDiscount = () => {
  priceWithoutDiscount.innerHTML = `ОБЩАЯ СУММА: ${totalSum.toLocaleString('ru-RU')} галеонов.`
};
countWithoutDiscount();

const tapButton = document.querySelector('.price-container__btn');

const countWithDiscount = () => {
  const calculatePrice = totalSum * 0.8;
  totalPrice.innerHTML = `ИТОГО: ${calculatePrice.toLocaleString('ru-RU')} галеонов.`
  tapButton.disabled = true;
};

tapButton.addEventListener('click', countWithDiscount);



