/* Showing how to read, write and delete files and directories */
const fs = require('fs')

/* Reading files */
// // path to file and function when node finish the read of the file
// // asynchronous function
// fs.readFile('./docs/file.txt', (err, data) => {
//     if (err) {
//         console.log(err)
//     }
//     // we get the buffer -> is basically a package of data
//     // console.log(data)
//     // turn the buffer into string
//     console.log(data.toString())
// })

/* Writing files */
// fs. writeFile('./docs/hello.txt', 'hello, world', () => {
//     console.log('file was written')
// })

/* Directories */
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('folder created')
        }
        
    })
} else {
    fs.rmdir('./assets', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("folder deleted")
        }
    })
}

/* Deleting files */
if (fs.existsSync('./docs/hello.txt')) {
    fs.unlink('./docs/hello.txt', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("file deleted")
        }
    })
}


// will be print first because the readFile is a asynchronous function
console.log("last line")
