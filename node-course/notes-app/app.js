//const fs = require('fs')
//fs.writeFileSync('notes.text','my name is manoj .')
//fs.appendFileSync('note.text', 'i am from andhra.')  


//require=('./utils.js')
//const name = 'manoj'
//console.log(name)


// var numbers=[0,2,4,6,8,10]; // array of even integirs
// var nameAGe={name:'manoj',age:19};// object
// var stg="123" //string
// var ny=23;//integirs

// var num=[];
// var obj={};
// var srin=""
// var num= null
// var nameAge=[{name:"manoj",age:22},{name:"ravi",age:33}];
// var marieed= true


const chalk = require('chalk')
const getNotes = require('./nodes.js')


const msg = getNotes()
console.log(msg)

const greenMsg = (chalk.blue.inverse.bold('success'))


console.log(greenMsg)
