const express = require('express');
const fs = require('fs');

const databaseFile = process.argv[2];

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      if (lines.length <= 1) { // juste l'en-tête
        resolve('Number of students: 0');
        return;
      }

      const students = lines.slice(1).map((line) => line.split(','));
      const total = students.length;

      const fields = {};
      students.forEach(([firstname, , , field]) => {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let output = `Number of students: ${total}\n`;
      Object.keys(fields).forEach((field) => {
        output += `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}\n`;
      });

      resolve(output.trim());
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let output = 'This is the list of our students\n';
  try {
    const studentsInfo = await countStudents(databaseFile);
    output += studentsInfo;
  } catch (err) {
    output += err.message;
  }
  res.send(output);
});

app.listen(1245);

module.exports = app;
