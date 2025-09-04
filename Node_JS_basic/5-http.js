const http = require('http');
const fs = require('fs');

const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1); // enlever l'en-tête
      console.log(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((line) => {
        const [firstname,, , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      for (const [field, names] of Object.entries(fields)) {
        console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
      }

      resolve({ total: students.length, fields });
    });
  });
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(database)
      .then(({ total, fields }) => {
        res.write(`Number of students: ${total}\n`);
        for (const [field, names] of Object.entries(fields)) {
          res.write(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`);
        }
        res.end();
      })
      .catch((err) => {
        res.write(err.message);
        res.end();
      });
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
