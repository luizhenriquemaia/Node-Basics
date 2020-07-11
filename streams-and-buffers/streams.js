/**
 * Learning about streams and buffers, to follow along create a large file to read and se
 * the node using small parts of it as he reads
 */

const fs = require('fs')

const readStream = fs.createReadStream('./docs/larger-file-to-read1.txt', { encoding: 'utf8' })
const writeStream = fs.createWriteStream('./docs/created-file-to-write1.txt')

// // everytime we get a new chunk data we fire this callback function
// readStream.on('data', (chunk) => {
//     console.log('---- NEW CHUNK ----')
//     console.log(chunk)
//     writeStream.write('\nNew CHUNK\n')
//     writeStream.write(chunk)
// })

// piping -> do the same as above with less lines of code
readStream.pipe(writeStream)