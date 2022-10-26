// JavaScript Static Methods
// Static class methods are defined on the class itself
// Cannot call a static method on an object, only on an object class.

class Car {
    constructor(name) {
        this.name = name
    }

    static hello() {
        return "Hello!"
    }
}

let myCar = new Car("Mercedes Benz")

// Can call "hello()" on the Car Class:
console.log(Car.hello())
// But NOT on a Car object, this raises an error
// console.log(myCar.hello()) 

// If you want to use the myCar object inside the static method, can send it as a parameter:
console.log(Car.hello(myCar))