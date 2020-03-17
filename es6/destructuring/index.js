const person = {
  id: 1,
  name: 'Devanshi',
  designation: 'iOS Developer',
  experience: 2,
  social: {
    links: {
      f: 'http://fb.com',
      t: 'http://twitter.com'
    }
  }
};

const person1 = {
  id: 1,
  name: 'Devanshi',
  designation: 'iOS Developer',
  experience: 2,
  social: {
    links: {
      f: 'http://fb.com',
      t: 'http://twitter.com'
    }
  }
};

const { id, name, designation, experience, social } = person;

const { f: facebook, t: twitter } = social.links;

console.log('id', id, 'name', name, 'fb', facebook);

const persons = [
  { name: 'Vishal', age: 33 },
  { name: 'Harsh', age: 24 }
];

const [obj1, obj2, obj3] = persons;

console.log(obj1, obj2, obj3);
