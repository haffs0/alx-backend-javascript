const fs = require('fs');

/**
 * Counts the students in a CSV data file.
 * @param {String} path The path to the CSV data file.
 */
const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const fileLines = data
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
      resolve(true);
    }
  });
});

module.exports = countStudents;
