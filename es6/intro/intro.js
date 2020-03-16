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

const traineesHtml = trainees
  .map(trainee => {
    return `
    <div>
    <h2>${trainee.name}</h2>
    <h3>Designation: ${trainee.designation}</h3>
    <h3>Experience: ${trainee.experience}</h3>
    <h3>Skills: ${trainee.skills.join(',')}</h3>
    <h3>Hobbies: ${trainee.hobbies.join(',')}</h3>
    <hr />
    </div>
    `;
  })
  .join('');

document.body.innerHTML = `<h1>Webclues Trainees</h1> ${traineesHtml}`;
