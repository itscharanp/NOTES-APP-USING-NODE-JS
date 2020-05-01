validator = require('validator')
console.log(validator.isEmail('its.charanp@gmail.com'))

chalk = require('chalk')
console.log(chalk.blue('HELLO'))

// IMPORT YOUR OWN FILES(app.js)
const getNotes = require('./notes')
const mssg = getNotes()
console.log(mssg)

//CREATE THE FILE(notes.js)
const getNotes = function()
{
    return "Your notes.."
}
module.exports = getNotes
