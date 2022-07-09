const root = document.getElementById('root')
 
const person = Object.create({
   calcAge() {
      return new Date().getFullYear() - this.birthYear
   }
}, {
   name: {
      value: 'Den',  // keyword "value"
      enumerable: true, // is numerable in 'for' cycles
      writable: true, // can change value
      configurable: true // can delete
   },
   birthYear: {
      value: 2005,
      enumerable: false,
      writable: false,
      configurable: false 
   },
   age: {
      get(){ // give value to element using function
         return new Date().getFullYear() - this.birthYear
      },
      set(){ // func doing when element of object will change
         document.body.style.background = "red"
         console.log('set age', value)
      }
   }
})

console.log(person)

person.name = 'not a Den'; // change prop 'name' (writable: true) 
console.log(person)

delete person.name; // delete prop 'name' (configurable: true)
console.log(person)

person.name = 'Den'; // create prop 'name' again and set value
console.log(person)

for (let key in person) {
   if(person.hasOwnProperty(key)) // do not walk in _proto_
   {
      console.log('Key', key, person[key])
   }
}