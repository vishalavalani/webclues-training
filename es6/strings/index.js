const name = 'Vishal Avalani';
const age = 33;

const finalStr = `My name is ${name} and age is ${age}`;

console.log(finalStr);

const obj = {
  name: 'Vishal Avalani',
  age: 33,
  designation: 'Technical Consultant'
};

const finalStr1 = `My name is ${obj.name} and age is ${obj.age}`;

console.log(finalStr1);

const n1 = [1, 2, 3, 4];
console.log(n1);

const n2 = n1.map(d => {
  const pi = 3.14;
  return d * 2 * pi;
});

console.log(n2);

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
  }
];
function renderSkills(skills) {
  const skillsHtml = skills
    .map(skill => {
      return `<span class="skill">${skill}</span>`;
    })
    .join(' | ');
  return skillsHtml;
}
const traineesHtml = trainees
  .map(trainee => {
    return `
    <div>
    <h2>${trainee.name}</h2>
    <h3>Designation: ${trainee.designation}</h3>
    <h3>Experience: ${trainee.experience}</h3>
    <h3>Skills: ${renderSkills(trainee.skills)}</h3>
    <h3>Hobbies: ${trainee.hobbies.join(',')}</h3>
    <hr />
    </div>
    `;
  })
  .join('');

document.body.innerHTML = `<h1>Webclues Trainees</h1> ${traineesHtml}`;

console.log("name.startsWith('V')", name.startsWith('V'));
console.log("name.endsWith('V')", name.endsWith('V'));
console.log("name.includes('i')", name.includes('i'));
console.log("name.includes('Vish')", name.includes('Vish'));
console.log('name.repeat(2)', name.repeat(2));

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
