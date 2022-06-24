const root = document.getElementById('root')
 
const sleep = ms => new Promise(resolve => {
   setTimeout(() => resolve(), ms)
})

.then(() => console.log('After 5 seconds'))

Promise.all([sleep(2000), sleep(3000)]) // wait for all promises
.then(() => {
   console.log('all promises done')
})

Promise.race([sleep(2000), sleep(3000)]) // wait for first promise
.then(() => {
   console.log('race promise')
})