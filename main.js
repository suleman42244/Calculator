const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};



const operate = (a, b, op) => {
  switch (op) {
    case "+":
      return add(a, b);

    case "-":
      return subtract(a, b);

    case "*":
      return multiply(a, b);

    case "/":
      return divide(a, b);

    
  }
};

let firstNumber = "";
let operator = "";
let secondNumber = "";
let displayValue = "";

const numberButton = document.querySelectorAll(".numberButton");
const input = document.querySelector(".input");
const equal = document.querySelector("#equal");
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const items= document.querySelectorAll('.grid-item')

numberButton.forEach((button) => {
  button.addEventListener("click", function () {
    input.value += button.textContent;
    displayValue = input.value;
  });
});

equal.addEventListener("click", function () {
  let expression = displayValue;
  let arr = expression.split(/([+\-*/])/);
  firstNumber = parseInt(arr[0]);
  operator = arr[1];
  secondNumber = parseInt(arr[2]);

  if (!isNaN(firstNumber) && !isNaN(secondNumber) && operator) {
    let result = operate(firstNumber, secondNumber, operator);
    input.value = result;
  }
});

clear.addEventListener('click', function(){
    input.value = ''; 
    firstNumber = ''; 
    operator = '';
    secondNumber = '';
    displayValue = '';
})

del.addEventListener('click', function(){
    let inputValue = input.value;
    if(inputValue.length > 0){
        input.value = inputValue.slice(0, -1);
        displayValue = input.value;
    }
})

items.forEach(item => {
    item.addEventListener("click", function(){
        item.classList.add('button-click-animation');

        setTimeout(() => {
            item.classList.remove('button-click-animation');
        }, 200);
    })
})