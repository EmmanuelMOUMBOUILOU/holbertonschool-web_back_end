const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

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
}

module.exports = countStudents;
