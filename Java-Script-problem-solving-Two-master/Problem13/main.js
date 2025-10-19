
function randomNumberPromise() {
    return new Promise((resolve, reject) => {
      const randomNum = Math.floor(Math.random() * 10) + 1; 
      if (randomNum > 5) {
        resolve(`Success, number is ${randomNum}`);
      } else {
        reject(`Failure, number is ${randomNum}`);
      }
    });
  }
  randomNumberPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error(error));
