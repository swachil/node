const fs = require('fs');
const validator = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');

const name = 'Swachil';
// console.log(validator.isEmail('pswachil@name.com'));
console.log(chalk.inverse.yellow(name));

// If file doesn't exist it creates it, and if it exists then it rewrites that file.
// fs.writeFileSync('notes.txt', 'This is sample file created in node.');

// It appends content to end of file.
// fs.appendFileSync('notes.txt', 'My name is Swachil.');

// Command line arguments --> just pass arguments like node app.js <arg1>
// Also you can pass more than two arguments using node app.js <arg1> <arg2> <arg3>
const argValue = process.argv[2];
console.log(process.argv);
console.log('-----------------------Normal Command Line Argument Parsing---------------------------------');
console.log(chalk.inverse.blue(argValue));
if (argValue === 'add') {
    // console.log(parseInt(process.argv[3]) + parseInt(process.argv[4]));
} else if (argValue === 'sub') {
    // console.log(parseInt(process.argv[3]) - parseInt(process.argv[4]));
}

// Create add command using yargs
console.log('-----------------------Command Line Argument Parsing Using Yargs---------------------------------');
yargs.command({
    command: 'add',
    describe: 'Add numbers',
    builder: {
        num1: {
            describe: 'Number 1',
            demandOption: true,
            type: 'int'
        },
        num2: {
            describe: 'Number 2',
            demandOption: true,
            type: 'int'
        }
    },
    handler: function (argv) {
        console.log(argv.num1 + argv.num2)
    }
});

yargs.command({
    command: 'sub',
    describe: 'Subtract numbers',
    builder: {
        num1: {
            describe: 'Number 1',
            demandOption: true,
            type: 'int'
        },
        num2: {
            describe: 'Number 2',
            demandOption: true,
            type: 'int'
        }
    },
    handler: function (argv) {
        console.log(argv.num1 - argv.num2)
    }
});

yargs.parse();