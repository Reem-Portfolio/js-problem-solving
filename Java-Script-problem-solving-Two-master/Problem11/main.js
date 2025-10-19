function resolveAfter3Seconds() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Success');
      }, 3000);
    });
  }
  resolveAfter3Seconds().then((message) => console.log(message));