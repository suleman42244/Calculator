const add = (a, b) => {
    return a + b;
}

const subtract =(a, b) => {
    return a - b;
}

const multiply = (a, b) =>{
    return a * b;
} 

const divide = (a, b)=>{
    return a / b;
}


let firstNumber;
let  operator;
let  secondNumber;

const operate = (a, b, op) => {
   switch(op){
    case '+':
        return add(a,b);
      
    case '-':
        return subtract(a,b);
        
    case '*':
        return multiply(a,b);
        
    case '/':
        return divide(a,b);
        
    default:
        "Unsupported Operation"
   }
}
console.log(operate(2, 5, '*'))