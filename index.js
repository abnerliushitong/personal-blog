Promise.resolve()
    .then(() => {
    console.log('then')
})
process.nextTick(() => {
    console.log('nextTick')
})

setImmediate(() => {
    console.log('setImmediate')
})
process.nextTick(() => {
    console.log('nextTick2')
})
console.log('end')
Promise.resolve()
    .then(() => {
    console.log('then2')
})
