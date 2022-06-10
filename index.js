console.log('f')
const root = document.getElementById('root');

// const introduce = (floors) => {
//     root.innerHTML =  `<<h2>this ${floors}-storey house was built in ${this.yearOfBuild}</h2>`;
// }

const house1 = {
    color: "white",
    yearOfBuild: 2020,
    // logThis: (floors) => { console.log( `color is ${this.color}`)},
    introduce: function(floors){
        root.innerHTML =  root.innerHTML + ` <br> <<h2>this ${floors}-storey house was built in ${this.yearOfBuild}</h2>`;
    }
}
const house2 = {
    color: "yellow",
    yearOfBuild: 2018,
}
house1.introduce.bind(house1, 3)();
house1.introduce.apply(house2, [2]);
house1.introduce.call(house1, 1);
