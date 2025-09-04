
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const name = data.trim();
  process.stdout.write(`Your name is: ${name}\n`);
});

// When the input stream ends (e.g., piped input or Ctrl+D), this runs
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
