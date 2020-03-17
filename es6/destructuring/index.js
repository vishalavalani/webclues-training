//Destructuring
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

//loops

const trainees = [
  {
    id: 1,
    name: 'Devanshi',
    designation: 'iOS Developer',
    experience: 2,
    skills: ['iOS'],
    hobbies: ['travelling']
  },
  {
    id: 2,
    name: 'Parth',
    designation: 'iOS Team Lead',
    experience: 6,
    skills: ['iOS', 'Leadership'],
    hobbies: ['Cricket']
  },
  {
    id: 3,
    name: 'Yash',
    designation: 'Android Developer',
    experience: 5,
    skills: ['Android', 'React Native'],
    hobbies: ['Football', 'Video Games']
  },
  {
    id: 4,
    name: 'Avinash',
    designation: 'iOS Developer',
    experience: 4,
    skills: ['iOS'],
    hobbies: ['Cricket']
  },
  {
    id: 5,
    name: 'Suraj',
    designation: 'Mobile Team Lead',
    experience: 7,
    skills: ['Android', 'Leadership', 'Python'],
    hobbies: ['Video Games']
  },
  {
    id: 6,
    name: 'Amita',
    designation: 'Android Developer',
    experience: 4,
    skills: ['Android'],
    hobbies: ['Travelling']
  },
  {
    id: 7,
    name: 'Harsh',
    designation: 'iOS Developer',
    experience: 2,
    skills: ['iOS'],
    hobbies: ['Travelling', 'Programming']
  },
  {
    id: 8,
    name: 'Jayesh',
    designation: 'iOS Developer',
    experience: 5,
    skills: ['iOS'],
    hobbies: ['Cricket', 'Travelling', 'Programming']
  },
  {
    id: 9,
    name: 'Pankit',
    designation: 'Tech Lead',
    experience: 11,
    skills: ['PHP', 'MVC Frameworks', 'Leadership'],
    hobbies: ['Cricket']
  }
];

for (const trainee of trainees) {
  console.log(`${trainee.name} am enjoying training`);
}

for (const [index, trainee] of trainees.entries()) {
  const { name } = trainee;
  console.log(`id: ${index} ${name} am enjoying training`);
}

//forEach
trainees.forEach((trainee, index) => {
  const { name } = trainee;
  console.log(`id: ${index} ${name} am enjoying training`);
});

//keys

console.log(Object.keys(person));
