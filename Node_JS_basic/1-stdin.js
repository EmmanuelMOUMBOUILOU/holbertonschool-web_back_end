const readline = require('readline');

// Crée une interface pour lire depuis stdin
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Affiche le message d'accueil
console.log('Welcome to Holberton School, what is your name?');

// Écoute la saisie de l'utilisateur
rl.on('line', (input) => {
  console.log(`Your name is: ${input}`);
});

// Quand l'utilisateur termine le programme (Ctrl+D ou fin de stdin)
rl.on('close', () => {
  console.log('This important software is now closing');
});
