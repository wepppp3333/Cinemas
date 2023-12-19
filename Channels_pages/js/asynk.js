// Event loop

// const timeout = setTimeout(() => {
//   console.log("after 2 seconds");
// }, 2000);

// clearTimeout(timeout)

// setTimeout(() => {
//   console.log("after 3 seconds");
// }, 3000);

// let coint = 0
// setInterval(() => {
//   console.log('tick', ++coint);
// },1000)

// function delay(callback, time = 1000) {
//   setTimeout(callback, time);
// }

// delay(() => {
//   console.log("timeout");
// }, 3000);

// Promise

const delay = (time = 1000) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([1, 2, 3]);
      reject("error in delay"); //Для ошибки
    }, time);
  });
  return promise;
};

// delay(2500).then((resolve) => {
//   console.log("Timeout", resolve);
//   return resolve.map((x) => x ** 2)
// }).then((resolve) => {
//   console.log(resolve);
// }).catch((err) => {
//   console.log(err);
// })
// .finally(() => {
//   console.log('finaly');
// })

const getData = () => new Promise((resolve) => resolve([1, 2, 3]));

// getData().then((array) => console.log(array))

async function asyncExample() {
    try {
      await delay(3000)
      const data = await getData()
      console.log(data);
    } catch (err) {
      console.log(err);
    } finally {
      console.log('finaly');
    }
}

asyncExample()