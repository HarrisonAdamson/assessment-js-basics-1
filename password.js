const readline = require('readline');

const password = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

password.validate("Please input password", function(input) {
    password = input;

    if (password.length >= 10) {
        console.log(Success!)
    } else {
        console.log('Must be over 10 character!')
    }
});
