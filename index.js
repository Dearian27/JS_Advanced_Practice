const root = document.getElementById('root')
 
// 'https://jsonplaceholder.typicode.com/todos/';


const delay = (time) => new Promise(r => setTimeout(()=>{r()},time));


// async function fetchAsyncToDos() {
//    console.log('Fetch todos started...')
//    await delay(2000)
//    const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
//    const data = await response.json()
//    console.log('Data:', data)
// }

async function fetchAsyncToDos() {
   try{
      console.log('Fetch todos started...')
      await delay(2000)
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/')
      const data = await response.json()
      console.log('Data:', data)
   } catch(el){
      console.log(el)
   } finally {
      // success or error
   }
  
}

fetchAsyncToDos();