import readDatabase from '../utils'; // suppression de .js

export default class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2];
    try {
      const fields = await readDatabase(database);
      let output = 'This is the list of our students\n';
      const sortedFields = Object.keys(fields)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      let total = 0;
      for (const field of sortedFields) {
        const names = fields[field];
        total += names.length;
        output += `Number of students in ${field}: ${names.length}. `
          + `List: ${names.join(', ')}\n`; // ligne coupée pour max-len
      }
      output = `Number of students: ${total}\n${output}`;
      return res.status(200).send(output.trim()); // ajout return
    } catch (err) {
      return res.status(500).send(err.message); // ajout return
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const database = process.argv[2];
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      return res.status(500).send('Major parameter must be CS or SWE');
    }
    try {
      const fields = await readDatabase(database);
      const names = fields[major] || [];
      return res.status(200).send(`List: ${names.join(', ')}`); // ajout return
    } catch (err) {
      return res.status(500).send(err.message); // ajout return
    }
  }
}
