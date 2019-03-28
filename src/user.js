let userName = 'Manoharan Gurusamy';
const greetUser = (user = userName) => `Hello ${user}`;
console.log(greetUser());
console.log(greetUser('Bindhu'));

// Assume that this was updated while we develop our future branch.
const members = [
  {
    firstName: 'Manoharan',
    lastName: 'Gurusamy',
    sex: 'male',
    profession: 'IT Consultant',
    officeCommute: true,
    adult: true
  },
  {
    firstName: 'Bhagyalakshmi',
    lastName: 'Balu',
    sex: 'female',
    profession: 'Catering Consultant',
    officeCommute: false,
    adult: true
  },
  {
    firstName: 'Rhiya',
    lastName: 'Manoharan',
    sex: 'female',
    profession: 'Student',
    officeCommute: false,
    adult: false
  },
  {
    firstName: 'Guru Aditya',
    lastName: 'Manoharan',
    sex: 'male',
    profession: 'Student',
    officeCommute: false,
    adult: false
  }
];

console.log(
  'List of adult Members',
  members.filter(member => member.adult === true)
);

console.log(
  'List of members fullName',
  members.map(member => `${member.firstName} ${member.lastName}`)
);
