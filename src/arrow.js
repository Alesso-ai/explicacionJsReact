// const double = a => a*2;

function double(a) {
  return a * 2;
}

const sum = (a, b) => a + b;


//Ejemplo de recursividad

const factorial = a => {
    if(a <= 1){
        return 1;
    }

    return a * factorial(a - 1)

}

console.log("double: ", double(2))
console.log("sum: ", sum(1,2))
console.log("factorial: ", factorial(2))