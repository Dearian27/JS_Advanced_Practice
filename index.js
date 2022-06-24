const root = document.getElementById('root')
 
const person = Object.create({}, {
   name: {
      value: 'Den'  // keyword "value"
   },
   birthYear: {
      value: 2005,
      enumerable: true, // can use in for cycles
      writable: true, // can change value
      configurable: true // can delete
   }
})

console.log(person)

person.birthYear = 2000;
console.log(person)

delete person.birthYear;
console.log(person)