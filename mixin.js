const flyMixin = {
  fly() {
    console.log(`${this.name} is flying!`)
  },
  land() {
    console.log(`${this.name} landed.`)
  },
}

const swimMixin = {
  swim() {
    console.log(`${this.name} is swimming!`)
  },
}

class Bird {
  constructor(name) {
    this.name = name
  }
}

class Duck {
  constructor(name) {
    this.name = name
  }
}

Object.assign(Bird.prototype, flyMixin)
Object.assign(Duck.prototype, flyMixin, swimMixin)

const eagle = new Bird("Eagle")
eagle.fly()

const mallard = new Duck("Mallard")
mallard.fly()
mallard.swim()
