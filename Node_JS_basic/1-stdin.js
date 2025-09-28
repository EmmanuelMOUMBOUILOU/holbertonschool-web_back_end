process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.resume();

process.stdin.on('data', (data) => {
  const name = data.trim();
  // Attention ici au \r
  process.stdout.write(`Your name is: ${name}\r`);
  
  // Ferme proprement pour le cas d’un pipe
  if (!process.stdin.isTTY) {
    process.stdin.emit('end');
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
