// Global object


// console.log(global)

// global.setTimeout(() => {
//     console.log('in the timout')
// }, 3000)

/* Don't need to "global." because is the presence is implied */
/* This function runs only one time after 3 seconds */
// setTimeout(() => {
//     console.log('in the timout')
//     /* stops the int function of carrying on */
//     clearInterval(int)
// }, 3000)


/* This functions runs every one second */
// const int = setInterval(() => {
//     console.log('in the interval')
// }, 1000)


// /* Show us the absolute path to this file */
// console.log(__filename)
// /* Show us the absolute path to this folder */
// console.log(__dirname)

/* We can't access to window objects in node */
// console.log(document.querySelector)