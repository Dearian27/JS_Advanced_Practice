const root = document.getElementById('root')
 
class Animal {
   constructor(options)
   {
      this.name = options.name
      this.age = options.age
      this.hasTale = options.hasTale
   }
   voice()
   {
      console.log("Animal!!!")
   }
} 

class Dog extends Animal{
   constructor(options)
   {
      super(options)
      this.color = options.color
   }

   voice()
   {
      super.voice() // call method voice from class Animal
      console.log("ruff!!!")
   }
}
const Jack_Rassel = new Dog( {name: 'Jack', age: 3, hasTale: true, color: 'white'} )