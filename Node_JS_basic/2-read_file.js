
const fs = require('fs');

function countStudents(path) {
  try {
    // Read file synchronously
    const data = fs.readFileSync(path, 'utf8');

    // Split into lines and filter out empty ones
    const lines = data.split('\n').filter(line => line.trim() !== '');

    // Remove header
    const header = lines.shift();

    if (!header) {
      throw new Error('Cannot load the database');
    }

    const students = {};

    for (const line of lines) {
      const parts = line.split(',');

      // Ensure line has the expected number of columns
      if (parts.length < 4) continue;

      const firstName = parts[0].trim();
      const field = parts[3].trim();

      if (!students[field]) {
        students[field] = [];
      }

      students[field].push(firstName);
    }

    const totalStudents = Object.values(students).reduce((sum, curr) => sum + curr.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
