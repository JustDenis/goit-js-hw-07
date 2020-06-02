let counterValue = document.querySelector('#value');
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);

btnIncrementRef.addEventListener('click', handeClickIncrement);
btnDecrementRef.addEventListener('click', handeClickDecrement);

function handeClickIncrement() {
    let number = Number(counterValue.textContent);
    number += 1;
    counterValue.textContent = number;
}

function handeClickDecrement() {
    let number = Number(counterValue.textContent);
    number -= 1;
    counterValue.textContent = number;
}
