validator = require('validator')
console.log(validator.isEmail('its.charanp@gmail.com'))

chalk = require('chalk')
console.log(chalk.blue('HELLO'))

// IMPORT YOUR OWN FILES
const getNotes = require('./notes')
const mssg = getNotes()
console.log(mssg)
