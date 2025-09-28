process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');
process.stdin.resume();

process.stdin.on('data', (data) => {
  const name = data.trim();

  // Important : utiliser \r à la place de \n
  process.stdout.write(`Your name is: ${name}\r`);
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
