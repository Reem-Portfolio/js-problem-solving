// ! 1. Write a function that uses a `for` loop to print numbers from 1 to 10. If the number is
// ! divisible by 3, skip printing the number. (0.5 Grade) Output: 1, 2, 4, 5, 7, 8, 10

function loop() {
  for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
      continue;
    }
    console.log(i);
  }
}
loop();
