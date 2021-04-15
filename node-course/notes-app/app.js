//const fs = require('fs')
//fs.writeFileSync('notes.text','my name is manoj .')
//fs.appendFileSync('note.text', 'i am from andhra.')  


//require=('./utils.js')
//const name = 'manoj'
//console.log(name)

const validator = require('validator')
const getNotes = require('./notes.js')

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('manoj@gmail.com'))
