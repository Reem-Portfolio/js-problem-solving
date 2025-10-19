
async function asyncResolveAfter3Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Success');
      }, 3000);
    });
  }
  async function useAsyncFunction() {
    const result = await asyncResolveAfter3Seconds();
    console.log(result); // Output after 3 seconds: "Success"
  }
  useAsyncFunction();