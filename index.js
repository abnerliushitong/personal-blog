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
console.log('end')
process.nextTick(() => {
    console.log('nextTick2')
})