// ES5
var Person = function (name, age) {
    this.name = name
    this.age = age
}

Person.prototype.jump = function () {
    console.log('jump')
}

const person = new Person('Nicholas', 26)
person
person.jump()

// ES6 classes
class Animal {
    constructor (name, age) {
        this.name = name
        this.age = age
    }

    jump() {
        console.log('Jump!')
    }

    getName() { 
        return this.name
    }

    // static mathod
    static setName (animal, name) {
        animal.name = name
    }

}

class Reptile extends Animal {
    constructor (name, age, habitat) {
        super(name, age)
        this.habitat = habitat
    }

    // overriding parent method
    jump() { 
        super.jump()
        console.log('Small jump for lizard!');
    }

    getName() {
        return super.getName() + '!'
    }
}
     


const animal = new Animal('Lion', 12)
animal.jump()
console.log(animal.name)

const lizard = new Reptile('Lizard', 1, 'East Africa')
lizard
lizard.jump()
console.log(lizard.getName())

const gekko = new Animal('Lizard', 2)
Animal.setName(gekko, 'African Gekko')
gekko