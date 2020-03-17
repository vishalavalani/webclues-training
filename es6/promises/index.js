const url = 'https://jsonplaceholder.typicode.com/todos';
const response = fetch(url)
  .then(data => {
    console.log('stage 1', data);
    if (data.status !== 200) {
      throw Error('404');
    }
    return data.json();
  })
  .then(d => {
    console.log('stage 2', d);
  })
  .catch(error => {
    console.log(error);
  });
console.log(response);

//POST

const obj = {
  title: 'foo',
  body: 'bar',
  userId: 1
};

const stringifiedObj = JSON.stringify(obj);

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: stringifiedObj,
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  }
})
  .then(response => response.json())
  .then(json => console.log(json));

var t = '{"title":"foo","body":"bar","userId":1}';
JSON.parse(t);

//Custom Promise

const customPromise = new Promise((resolve, reject) => {
  resolve('Yaay!');
});

customPromise.then(d => {
  console.log(d);
});

const customPromise1 = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve('Yaay!');
  //   }, 1000);
  try {
    //long process....
    resolve();
  } catch (e) {
    reject(e);
  }
});

customPromise1.then(d => {
  console.log(d);
});

//Promise All

const postsPromiseNew = fetch('https://jsonplaceholder.typicode.com/posts');

const streetCarsPromise = fetch(
  'https://jsonplaceholder.typicode.com/comments'
);

// Promise.all([postsPromiseNew,streetCarsPromise])

async function getData() {
  try {
    const resp1 = await fetch(url);
    console.log('resp1', resp1);

    throw Error('Test');
    const resp2 = await resp1.json();
    console.log('resp2', resp2);
  } catch (e) {
    console.log('Error', e.message);
  }
}

getData();

const customPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Yaay!');
  }, 5000);
});

async function getData1() {
  const resp11 = await customPromise2;
  console.log('resp11', resp11);
  const newStr = resp11 + 'Test';
  console.log('newStr', newStr);
}

getData1();
