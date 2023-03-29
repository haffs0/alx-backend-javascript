interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'haffs',
  lastName: 'laffs',
  age: 8,
  location: 'New Yoork'
};

const student2: Student = {
  firstName: 'haffs',
  lastName: 'laffs',
  age: 9,
  location: 'New Yoork'
};

const studentsList: Array<Student> = [student1, student2];

const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tHead = document.createElement('thead');
  const hRow = document.createElement('tr');
  const tBody = document.createElement('tbody');
  hRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  hRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tHead.insertAdjacentElement('beforeend', hRow);

  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tBody.insertAdjacentElement('beforeend', bodyRow);
  }

  table.insertAdjacentElement('beforeend', tHead);
  table.insertAdjacentElement('beforeend', tBody);
  document.body.insertAdjacentElement('beforeend', table);
};

displayStudents(studentsList);
