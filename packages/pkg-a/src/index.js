new Promise((resolve) => {
  console.log('this is new Promise');
  resolve(100);
})
  .then((res) => {
    console.log(`this is ${res}`);
    return;
  })
  .catch((err) => {
    console.log(err);
  });
