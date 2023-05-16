/**
 * Count number of students in each fields
 * @param {String} path
 */
const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path)) {
    throw new Error('Cannot load the database');
  }
  if (!fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const fileLines = fs
    .readFileSync(path, 'utf-8')
    .toString('utf-8')
    .trim()
    .split('\n');
  const students = fileLines.slice(1,);
  const fields = {};
  students.forEach((student) => {
    const studentDetails = student.split(',');
    if (fields.hasOwnProperty(studentDetails[3])) {
      fields[studentDetails[3]].names.push(studentDetails[0]);
      fields[studentDetails[3]].count += 1;
    }
    else {
      fields[studentDetails[3]] = {};
      fields[studentDetails[3]].names = [studentDetails[0]];
      fields[studentDetails[3]].count = 1;
    }
  });
  const keys = Object.keys(fields);
  console.log(`Number of students: ${students.length}`);
  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i];
    const obj = fields[key];
    console.log(`Number of students in ${key}: ${obj.count}. List: ${obj.names.join(', ')}`);
  }
};

module.exports = countStudents;
