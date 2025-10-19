
function chainedPromise() {
    return new Promise((resolve) => {
      resolve(5);
    })
      .then((num) => {
        console.log(`Initial number: ${num}`);
        return num * 2; 
      })
      .then((num) => {
        console.log(`After multiplication: ${num}`);
        return num + 10; 
      })
      .then((num) => {
        console.log(`After addition: ${num}`);
        return num - 3;
      });
  }
  chainedPromise();