/* Show the funcionality of modules and requires */

// require(relative path to the file)
// const xyz = require('./people')

// console.log(xyz.people, xyz.ages)

/* Same thing but using destructure */
// const { people, ages } = require('./people')
// console.log(people, ages)

/* We can require node modules */
const os = require('os')
console.log(os.platform(), os.homedir())

