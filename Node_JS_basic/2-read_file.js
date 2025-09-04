const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8'); // lecture synchrone
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Découper le contenu en lignes et ignorer les lignes vides
  const lines = data.split('\n').filter(line => line.trim() !== '');

  // Retirer l'en-tête
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  // Regrouper par domaine
  const fields = {};
  students.forEach(student => {
    const parts = student.split(',');
    const firstname = parts[0].trim();
    const field = parts[3].trim();

    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  });

  // Afficher le résultat par domaine
  for (const field in fields) {
    console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
  }
}

module.exports = countStudents;
