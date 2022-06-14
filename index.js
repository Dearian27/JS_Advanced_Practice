const root = document.getElementById('root')
 
 const person1 = { name: 'Denys', age: 16, job: 'Frontend'}
 const person2 = { name: 'Serhiy', age: 16, job: 'lazing'} 

 function logPerson() {
    return console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
 }

 const bind = (data, fn) => {  //1)аргумент: об'єкт 2)аргумент: функція
    return function(...args){  // використання оператора 'spread' для передання будь-якої к-сті елементів
        fn.apply(data, args)  // використання  метода 'apply' для того щоб позначити елемент під this та передати аргументи у вигляді масива
    }
 }

 bind(person1, logPerson)()
 bind(person2, logPerson)()