let number = 0;
const firstCard = document.querySelector('.first-card');
const firstCardNumber = firstCard.querySelector('.card-goods-text');
const firstCardNumberReduse = firstCard.querySelector('.card-goods-reduce');
const firstCardNumberIncrease = firstCard.querySelector('.card-goods-increase');

firstCardNumberReduse.addEventListener('click', () => {
    number = Number(firstCardNumber.textContent);
    number -= 1;
    if(number > 0) {
        firstCardNumber.textContent = number;
    } else {
        firstCardNumber.textContent = 0;
    }
});

firstCardNumberIncrease.addEventListener(('click'), () => {
    number = Number(firstCardNumber.textContent);
    number += 1;
    firstCardNumber.textContent = number;
});


const secondCard = document.querySelector('.second-card');
const secondCardNumber = secondCard.querySelector('.card-goods-text');
const secondCardNumberReduse = secondCard.querySelector('.card-goods-reduce');
const secondCardNumberIncrease = secondCard.querySelector('.card-goods-increase');
secondCardNumberReduse.addEventListener('click', () => {
    number = Number(secondCardNumber.textContent);
    number -= 1;
    if(number > 0) {
        secondCardNumber.textContent = number;
    } else {
        secondCardNumber.textContent = 0;
    }
});

secondCardNumberIncrease.addEventListener(('click'), () => {
    number = Number(secondCardNumber.textContent);
    number += 1;
    secondCardNumber.textContent = number;
});


const thirdCard = document.querySelector('.third-card');
const thirdCardNumber = thirdCard.querySelector('.card-goods-text');
const thirdCardNumberReduse = thirdCard.querySelector('.card-goods-reduce');
const thirdCardNumberIncrease = thirdCard.querySelector('.card-goods-increase');

thirdCardNumberReduse.addEventListener('click', () => {
    number = Number(thirdCardNumber.textContent);
    number -= 1;
    if(number > 0) {
        thirdCardNumber.textContent = number;
    } else {
        thirdCardNumber.textContent = 0;
    }
});

thirdCardNumberIncrease.addEventListener(('click'), () => {
    number = Number(thirdCardNumber.textContent);
    number += 1;
    thirdCardNumber.textContent = number;
});