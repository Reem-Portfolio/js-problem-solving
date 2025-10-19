// ! 2. Write a function that uses a `while` loop to calculate the sum of numbers from 1 to 100.

function sumNumbers() {
    let sum = 0;
    let i = 1;
  
    while (i <= 100) {
      sum += i;
      i++; 
    }
  
    return sum;
  }
  console.log(sumNumbers()); 