class Car {
  constructor(model, price) {
    this.type = "Car"
    this.model = model
    this.price = price
  }
}

class Motorcycle {
  constructor(model, price) {
    this.type = "Motorcycle"
    this.model = model
    this.price = price
  }
}

class VehicleFactory {
  createVehicle(type, model, price) {
    switch (type) {
      case "car":
        return new Car(model, price)
      case "motorcycle":
        return new Motorcycle(model, price)
      default:
        throw new Error(`Vehicle type ${type} not supported`)
    }
  }
}

const factory = new VehicleFactory()
const car = factory.createVehicle("car", "Tesla Model 3", 45000)
const bike = factory.createVehicle("motorcycle", "Harley Davidson", 20000)

console.log(car)
console.log(bike)
