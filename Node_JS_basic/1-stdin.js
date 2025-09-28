process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  console.log(`Your name is: ${name}`);

  // Fermer le stdin si l'entrée vient d'un pipe
  if (!process.stdin.isTTY) process.exit();

  // Sinon, demander à l'utilisateur de fermer manuellement (Ctrl+D)
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
