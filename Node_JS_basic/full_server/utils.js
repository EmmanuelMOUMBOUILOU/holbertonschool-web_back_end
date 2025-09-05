import fs from 'fs';

export default function readDatabase(path) { // default export
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database')); // ajout return explicite
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1); // enlever l'en-tête

      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      return resolve(fields); // ajout return explicite
    });
  });
}
