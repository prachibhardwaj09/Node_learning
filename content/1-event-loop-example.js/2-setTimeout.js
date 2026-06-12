console.log('first')
setTimeout(() =>{
    console.log('second') //set timeout is an asynchronous function so it gets offloaded and takes time to execute
}, 0)
console.log('third')