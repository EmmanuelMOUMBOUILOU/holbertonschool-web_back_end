const express = require('express');
const fs = require('fs');

const app = express();
const database = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(new Error('Cannot load the database'));

      const lines = data.split('\n').filter(line => line.trim() !== '');
      const students = lines.slice(1); // enlever l'en-tête

      const fields = {};
      students.forEach((line) => {
        const [firstname,, , field] = line.split(',');
        const fieldName = field.trim();
        if (!fields[fieldName]) fields[fieldName] = [];
        fields[fieldName].push(firstname.trim());
      });

      resolve({ total: students.length, fields });
    });
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  let output = 'This is the list of our students\n';
  try {
    const { total, fields } = await countStudents(database);
    output += `Number of students: ${total}\n`;
    for (const field of Object.keys(fields).sort()) {
      const names = fields[field];
      output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
    }
    res.send(output.trim());
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(1245);

module.exports = app;
