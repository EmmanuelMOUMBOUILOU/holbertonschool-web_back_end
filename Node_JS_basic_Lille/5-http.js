const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) {
        resolve('Number of students: 0');
        return;
      }

      lines.shift(); // Supprime l'entête
      const students = lines.map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname, lastname, age, field,
        };
      });

      const fields = {};
      students.forEach((student) => {
        if (!fields[student.field]) fields[student.field] = [];
        fields[student.field].push(student.firstname);
      });

      let output = `Number of students: ${students.length}\n`;
      ['CS', 'SWE'].forEach((field) => {
        if (fields[field]) {
          output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
        }
      });

      resolve(output.trim());
    });
  });
}

const app = express(); // ✅ Express au lieu de http.createServer

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const dbFile = process.argv[2];
  if (!dbFile) {
    res.status(500).send('Cannot load the database');
    return;
  }

  try {
    const result = await countStudents(dbFile);
    res.type('text/plain');
    res.send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(1245, () => {
  console.log('Server running on http://localhost:1245');
});

module.exports = app; // ✅ conforme à la consigne
