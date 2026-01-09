const http = require('http');
const fs = require('fs');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
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

      const students = lines.slice(1);

      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      const total = students.length;
      res.write(`Number of students: ${total}\n`);

      Object.keys(fields).forEach((field) => {
        res.write(
          `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`
        );
      });

      res.end();
    });
  } else {
    res.statusCode = 404;
    res.end();
  }
});

app.listen(1245);

module.exports = app;
