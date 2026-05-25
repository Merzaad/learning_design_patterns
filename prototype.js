function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(this.name + " makes a sound");
};

function Dog(name) {
  Animal.call(this, name);
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.speak = function () {
  console.log(this.name + " says Woof!");
};

const animal = new Animal("Generic");
const dog = new Dog("Buddy");

animal.speak();
dog.speak();

console.log(dog.__proto__ === Dog.prototype);
console.log(Dog.prototype.__proto__ === Animal.prototype);
console.log(Animal.prototype.__proto__ === Object.prototype);

class LivingBeing {
  constructor(identity) {
    this.identity = identity;
  }

  communicate() {
    console.log(`${this.identity} emits a generic sound`);
  }
}

class Canine extends LivingBeing {
  constructor(identity) {
    super(identity);
  }

  communicate() {
    console.log(`${this.identity} barks: Woof!`);
  }
}

const genericBeing = new LivingBeing("Creature X");
const buddyTheDog = new Canine("Buddy");

genericBeing.communicate();
buddyTheDog.communicate();

console.log(buddyTheDog.__proto__ === Canine.prototype);
console.log(Canine.prototype.__proto__ === LivingBeing.prototype);
console.log(LivingBeing.prototype.__proto__ === Object.prototype);
