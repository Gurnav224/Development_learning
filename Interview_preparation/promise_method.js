

// Promise.resolve() method returns a Promise object that is resolved with a given value.

Promise.resolve(42)
  .then((value) => {
    console.log(value); // 42
  });


  // Promise.reject() method returns a Promise object that is rejected with a given reason.

Promise.reject(new Error('Something went wrong'))
  .catch((error) => {
    console.error(error.message); // Something went wrong
  });

// Promise.all() method takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have resolved, or rejects with the reason of the first Promise that rejects.

const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });

// Promise.allSettled() method takes an iterable of Promises and returns a single Promise that resolves when all of the Promises in the iterable have settled (either resolved or rejected), with an array of objects that each describe the outcome of each Promise.

const promise4 = Promise.resolve(4);
const promise5 = Promise.reject(new Error('Failed'));
const promise6 = Promise.resolve(6);

Promise.allSettled([promise4, promise5, promise6])
  .then((results) => {
    results.forEach((result) => {
      if (result.status === 'fulfilled') {
        console.log(`Value: ${result.value}`);
      } else {
        console.error(`Reason: ${result.reason}`);
      }
    });
  });



// Promise.race() method if first promise is settled, it returns that value. If the first promise is rejected, it throws that error.

const promise7 = new Promise((resolve) => setTimeout(() => resolve('First'), 100));
const promise8 = new Promise((resolve) => setTimeout(() => resolve('Second'), 200));

Promise.race([promise7, promise8])
  .then((value) => {
    console.log(value); // 'First'
  })
  .catch((error) => {
    console.error(error);
  });


// Promise.any() the first promise is resolved, it returns that value. If all promises are rejected, it throws an AggregateError containing all rejection reasons.

const promise9 = Promise.reject(new Error('Failed'));
const promise10 = Promise.resolve('Success');

Promise.any([promise9, promise10])
  .then((value) => {
    console.log(value); // 'Success'
  })
  .catch((error) => {
    console.error(error);
  });


// Chaining .then(), .catch(), and .finally() methods on a Promise allows you to handle the resolved value, errors, and cleanup actions respectively.

const promise11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Done');
  }, 1000);
});

promise11
  .then((value) => {
    console.log(value); // 'Done'
    return 'Next step';
  })
  .then((nextValue) => {
    console.log(nextValue); // 'Next step'
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log('Cleanup actions'); // 'Cleanup actions'
  }
);