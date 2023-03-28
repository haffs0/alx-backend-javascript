const getListStudents = () => {
  const listOfStudents = [];
  listOfStudents.push({ id: 1, firstName: 'Guillaume', location: 'San Francisco' });
  listOfStudents.push({ id: 2, firstName: 'James', location: 'Columbia' });
  listOfStudents.push({ id: 5, firstName: 'Serena', location: 'San Francisco' });
  return listOfStudents;
};

export default getListStudents;
