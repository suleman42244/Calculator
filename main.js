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
const modulo = (a, b) => {
 return a % b;
}


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
    case '%':
        return modulo(a, b)
   }
}

let fistNumber, operator, secondNumber;