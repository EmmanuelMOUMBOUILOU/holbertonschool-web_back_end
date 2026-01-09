const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
    return;
  }

  if (req.url === '/students') {
    res.statusCode = 200;
    res.write('This is the list of our students\n');

    const database = process.argv[2];

    if (!database) {
      res.end('Cannot load the database\n');
      return;
    }

    fs.readFile(database, 'utf-8', (err, data) => {
      if (err) {
        res.end('Cannot load the database\n');
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.length > 0);

      const studentsData = lines.slice(1); // ignore header

      const fields = {};

      studentsData.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      const totalStudents = studentsData.length;
      res.write(`Number of students: ${totalStudents}\n`);

      Object.keys(fields).forEach((field) => {
        res.write(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`
        );
      });

      res.end();
    });
    return;
  }

  res.statusCode = 404;
  res.end();
});

app.listen(1245);

module.exports = app;
