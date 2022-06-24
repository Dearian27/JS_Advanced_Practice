const root = document.getElementById('root')
 
const person = Object.create({
   calcAge() {
      return new Date().getFullYear() - this.birthYear
   }
}, {
   name: {
      value: 'Den',  // keyword "value"
      enumerable: true, // can use in for cycles
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
      get(){ //func to give value to element of object
         return new Date().getFullYear() - this.birthYear
      },
      set(){ //func doing when sb change element of object
         document.body.style.background = "red"
         console.log('set age', value)
      }
   }
})

console.log(person)

person.name = 'not a Den';
console.log(person)

delete person.name;
console.log(person)

person.name = 'Den';
console.log(person)

for (let key in person) {
   if(person.hasOwnProperty(key))
   {
      console.log('Key', key, person[key])
   }
}