const batsman = [
  {
    id: 1,
    name: 'Steven Smith',
    team: 'Australia',
    rating: 911
  },
  {
    id: 2,
    name: 'Virat Kohli',
    team: 'India',
    rating: 886
  },
  {
    id: 3,
    name: 'Marnus Labuschagne',
    team: 'Australia',
    rating: 827
  },
  {
    id: 4,
    name: 'Kane Williamson',
    team: 'New Zealand',
    rating: 813
  },
  {
    id: 5,
    name: 'Babar Azam',
    team: 'Pakistan',
    rating: 800
  }
];

const arrHtml = batsman

  .map((b, i) => {
    return `<div><span>\${}${i + 1}.</span> <span>${b.name}</span></div>`;
  })
  .join('');

const arrHtml1 = batsman
  .filter(d => d.rating > 850 && parseInt(d.id, 10) === 1)
  .map((b, i) => {
    return `<div><span>${i + 1}.</span> <span>${b.name}</span></div>`;
  })
  .join('');

document.body.innerHTML = arrHtml;

//Some and Every
const ages = [12, 14, 18, 20];

const adult = ages.some(d => d >= 18);

const allAdults = ages.every(d => d >= 18);

console.log('adult', adult);
console.log('allAdults', allAdults);

//Spread Operator

let featured = ['Veg Farmhouse', 'Mexicana'];
let specialty = ['Veg Capsicana'];

let pizzas = [...featured, 'New Pizza', ...specialty];

console.log('pizzas', pizzas);

//find

const bf = batsman.find(d => d.id === 1);
console.log(bf);

const bIndex = batsman.findIndex(d => d.id === 1);
console.log(bIndex, batsman[bIndex]);

featured.push(...specialty);
console.log('featured', featured);

//Object Entries
const a = ['1', '2'];
Object.entries(a);

const b = { name: 'Vishal', age: 30 };
Object.entries(b);
