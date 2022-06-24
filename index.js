const root = document.getElementById('root')
 
console.log('request data...');

const prom = new Promise(function(resolve, reject) {
   setTimeout(function(){
      console.log('preparing data...');
      const backendData = {
         server: "aws",
         port: 3000,
         status: 'working'
      }
      resolve(backendData)
   }, 2000)
})
prom.then((data) => {
   return new Promise((resolve, reject) =>{
      setTimeout(() => {
         data.modified = true;
         resolve(data)
      }, 2000)
   })
}).then(receivedData => {
   console.log('received data.', receivedData)
   return receivedData
}).then(clientData => {
   clientData.fromPromise = true
   console.log(clientData)
   return clientData
}).then(data => {
   console.log(data)
}).catch(error => console.error('ERROR:', error)) // if reject
  .finally(() => console.log('finally')) // in any case