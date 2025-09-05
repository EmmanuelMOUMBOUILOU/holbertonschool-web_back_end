const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf-8'); // Lecture synchrone du fichier
  } catch (err) {
    throw new Error('Cannot load the database'); // Erreur si fichier introuvable
  }

  // Découper en lignes et enlever les lignes vides
  const lines = data.split('\n').filter((line) => line.trim() !== '');
  if (lines.length === 0) {
    console.log('Number of students: 0');
    return;
  }

  // Retirer l'en-tête
  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  // Regrouper les étudiants par domaine
  const fields = {};
  students.forEach((line) => {
    const parts = line.split(',');
    if (parts.length < 4) return; // Ignorer les lignes malformées
    const firstname = parts[0].trim();
    const field = parts[3].trim();

    if (!fields[field]) fields[field] = [];
    fields[field].push(firstname);
  });

  // Afficher le nombre d'étudiants et la liste par domaine
  Object.keys(fields).forEach((field) => {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`,
    );
  });
}

module.exports = countStudents;
