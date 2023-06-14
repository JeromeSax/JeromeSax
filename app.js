// Use array inside an object

// const adventurer = {
//     name: "Jethro",
//     hitPoint: 10,
//     belongings: ["chain sword", "ether", "Food"],
//     companion: {
//         name: "ozzy",
//         type: "dog",
//         belongings: ["ball of yarn", "healing potions", "health insurance" ],
//             companion: {
//                 name: "Tim",
//                 type:"Parasite", 
//                 belongings: ["Scuba tank", "Rogan josh", "health insurance"],
//             }
//     }
// }

// // access the companion object

// console.log(adventurer.companion)

// // access the companion's name:

// console.log(adventurer.companion.name)

// // access the companions's type

// console.log(adventurer.companion.type)

// // access the values in the array

// console.log(adventurer.belongings)

// // access the first belonging

// console.log(` first belongings: ${adventurer.belongings[0]}`);

// // Iterate over an array that is within an object

// for (let i=0; i < adventurer.belongings.length; i++) {
//     console.log(adventurer.belongings[i]);
// }

// create a property for an object that is an array

// const foo = {
//     someArray:[1, 2, 3]
// };
// foo.someArray[0];

// create a property for an object that is an object

// const foo = {
//     someObject: {
//         someProperty: 'oh hai!'
//     }
// };
// foo.someObject.someProperty;

// You can create a property for an object that is a function (method)

// const foo = {
//     someMethod: ()=>{
//         console.log('oh hai');
//     }
// };
// foo.someMethod();

// const player = {
//     name: 'Josh the great',
//     health: 1000,
//     power: 1000,
//     stamina: 1000
// }

// const bigBadBoss = {
//     name: 'Magnardo the Merciless',
//     health: 1000000,
//     power: 1000000,
//     stamina: Infinity
// }
// // What about function
// const createEnemy = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newEnemy = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: staminaIs
//     }
//     return newEnemy
// }

// const createPlayer = (nameIs, healthIs, powerIs, staminaIs) => {
//     const newPlayer = {
//         name: nameIs,
//         health: healthIs,
//         power: powerIs,
//         stamina: staminaIs
//     }
//     return newPlayer
// }


// // creating a class

// class Character {
//     constructor (name, age, eyes, hair, lovesCats = false, lovesDogs) {
//       this.legs = 2;
//       this.arms = 2;
//       this.name = name;
//       this.age = age;
//       this.eyes = eyes;
//       this.hair = hair;
//       this.lovesCats = lovesCats;
//       this.lovesDogs = lovesDogs || false;
//     }
//     greet (otherCharacter) {
//       console.log('hi ' + otherCharacter + '!');
//     }
//     smite () {
//       console.log('I smite thee you vile person');
//     }
//   }
//   const you = new Character('Cathy the Miraculous', 29, 'brown', 'locs of dark brown', true, true);
//   const me = new Character('Arthur the Wavy', 32, 'brown', 'his waves be spinnin keep of the g for greatness');
//   console.log(me);

// factory functions

class Car {
    constructor(make, vin) {
        this.make = make;
        this.vin = vin;
    }
    // methods
    drive() {
        console.log('vroom vroom')
    }
}

// create an object

// const mazda = new Car('Mazda', 12345678);
// console.log(mazda)

// class Factory {
//     constructor (company) {
//         this.company = company;
//         this.cars.push(newCar)
//     }
// }

// generateCar () {
//     const newCar = new Car(this.company, this.cars.length); {
//     this.cars.push(newCar);
//   }
//   findCar (index) {
//     return this.cars[index];
//   }
// }
// const tesla = new Factory('Tesla');
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// tesla.generateCar();
// console.log(tesla);
// console.log(tesla.findCar(0));

// const porche = new Factory('Porche');
// porche.generateCar();
// porche.generateCar();
// console.log(porche);
// console.log(porche.findCar(0));

// create static property for class

class Person {
    static eyeColors () {
      return ['blue', 'green', 'brown'];
    }
    // rest of class definition here...
  }
  // more code...
  const superman = new SuperHero('Clark Kent', 30, Person.eyeColors()[0], 'black');