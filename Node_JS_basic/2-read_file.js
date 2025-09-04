const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8'); // lecture synchrone
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(line => line.trim() !== '');
  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  const students = lines.slice(1); // enlever l'en-tête
  console.log(`Number of students: ${students.length}`);

  const fields = {};
  students.forEach(student => {
    const [firstname, , , field] = student.split(',');
    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  });

  Object.keys(fields)
    .sort() // optionnel, pour l’ordre stable
    .forEach(field => {
      console.log(
        `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
      );
    });
}

module.exports = countStudents;
