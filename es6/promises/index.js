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
