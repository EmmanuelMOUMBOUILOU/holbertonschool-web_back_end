process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  console.log(`Your name is: ${name}`);
});

// Laisser Node gérer automatiquement la fermeture
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// Nécessaire pour permettre à stdin de fonctionner dans tous les cas
process.stdin.resume();
