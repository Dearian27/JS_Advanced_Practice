const root = document.getElementById('root')
 
 const person1 = { name: 'Denys', age: 16, job: 'Frontend'}
 const person2 = { name: 'Serhiy', age: 16, job: 'lazing'} 

 const logPerson = () => {
    return console.log(`Person: ${this.name}, ${this.age}, ${this.job}`)
 }

 const bind = (person, logPerson) => {
    person.logPerson = logPerson;
    person.logPerson.bind(person);
     return logPerson();
 }