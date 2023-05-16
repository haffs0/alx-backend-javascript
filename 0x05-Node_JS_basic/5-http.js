const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';
const app = http.createServer();
const DB_FILE = process.argv.length > 2 ? process.argv[2] : '';

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
      const report = []
      const keys = Object.keys(fields);
      report.push(`Number of students: ${students.length}`);
      for (let i = 0; i < keys.length; i += 1) {
        const key = keys[i];
        const obj = fields[key];
        report.push(`Number of students in ${key}: ${obj.count}. List: ${obj.names.join(', ')}`);
      }
      resolve(report.join('\n'));
    }
  });
});

const SERVER_ROUTE_HANDLERS = [
  {
    route: '/',
    handler(_, res) {
      const responseText = 'Hello Holberton School!';

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Length', responseText.length);
      res.statusCode = 200;
      res.write(Buffer.from(responseText));
    },
  },
  {
    route: '/students',
    handler(_, res) {
      const responseParts = ['This is the list of our students'];

      countStudents(DB_FILE)
        .then((report) => {
          responseParts.push(report);
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        })
        .catch((err) => {
          responseParts.push(err instanceof Error ? err.message : err.toString());
          const responseText = responseParts.join('\n');
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        });
    },
  },
];

app.on('request', (req, res) => {
  for (const routeHandler of SERVER_ROUTE_HANDLERS) {
    if (routeHandler.route === req.url) {
      routeHandler.handler(req, res);
      break;
    }
  }
});


app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

module.exports = app;
