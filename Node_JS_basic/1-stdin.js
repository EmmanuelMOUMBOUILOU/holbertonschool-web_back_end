process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

// Activer stdin (utile pour certains environnements)
process.stdin.resume();

process.stdin.on('data', (data) => {
  const name = data.trim();

  // ATTENTION : utiliser \n (pas \r !) pour que le test détecte la ligne
  console.log(`Your name is: ${name}`);
});

// Ce message doit apparaître quand le flux se termine (EOF, comme avec echo)
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
