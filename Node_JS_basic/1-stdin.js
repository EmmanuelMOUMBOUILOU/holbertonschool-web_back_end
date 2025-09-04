process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);
  // Si l'entrée vient d'un pipe (echo), on ferme après affichage
  if (!process.stdin.isTTY) process.exit();
});

// Message quand le programme se termine
process.on('exit', () => {
  console.log('This important software is now closing');
});
