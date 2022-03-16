const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);
  rl.question('What is your name? Nicknames are also acceptable :)', (answer) => {
    console.log(`Thank you for your valuable feedback, ${answer}`);
    rl.question('What is your superpower?', (answer) => {
        console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer) => {
            console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.close();
            });
        });
    });
});