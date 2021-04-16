//const fs = require('fs')
//fs.writeFileSync('notes.text','my name is manoj .')
//fs.appendFileSync('note.text', 'i am from andhra.')  


//require=('./utils.js')
//const name = 'manoj'
//console.log(name)

const validator = require('validator')
// const getNote = require('./nodes.js')
const getNotes = function(){
    return 'your notes....'

} 

const msg = getNotes()
console.log(msg)

console.log(validator.isEmail('manoj@gmail.com'))
 


