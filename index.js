const root = document.getElementById('root')
 
 
 const createDomain = (domain) => {
     return function(url){
        return `http://${url}.${domain}`
     }
 }

  const createName = createDomain('com');

 root.textContent = createName("dearian");