const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      const header = lines.shift(); // enlever l'entête
      const students = lines.map(line => {
        const [firstname, lastname, age, field] = line.split(',');
        return { firstname, lastname, age, field };
      });

      const fields = {};
      students.forEach(student => {
        if (!fields[student.field]) fields[student.field] = [];
        fields[student.field].push(student.firstname);
      });

      let output = `Number of students: ${students.length}\n`;

      // Ordre CS puis SWE pour correspondre à l’exemple
      ['CS', 'SWE'].forEach(field => {
        if (fields[field]) {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      });

      resolve(output.trim());
    });
  });
}

const app = http.createServer(async (req, res) => {
  const dbFile = process.argv[2]; // CSV file passed as argument
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    if (!dbFile) {
      res.statusCode = 500;
      res.end('Cannot load the database');
      return;
    }

    res.statusCode = 200;
    res.write('This is the list of our students\n');

    try {
      const result = await countStudents(dbFile);
      res.end(result);
    } catch (err) {
      res.statusCode = 500;
      res.end(err.message);
    }
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

module.exports = app;
