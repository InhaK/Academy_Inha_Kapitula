class Vehicle {
    static transport() {
        return "Here are some options we can offer to you at the moment:";
    }
    constructor(carModel, carYear, carColor) {
        this.model = carModel;
        this.year = carYear;
        this.color = carColor;
    }

    displayInfo() {
        console.log(`Name: ${this.model};
Year: ${this.year};
Color: ${this.color};
Type: ${this.type};`);
    }
}

class Car extends Vehicle {
    constructor (carModel, carYear, carColor) {
        super (carModel, carYear, carColor);
        this.type = "car";
    }

    transportPeople() {
        console.log ("This car is used to transport the passangers");
    }
}

class Truck extends Vehicle {
    constructor (carModel, carYear, carColor) {
        super (carModel, carYear, carColor);
        this.type = "truck";
    }

    transportContainer() {
        console.log("This truck is used for transportation of the heavy containers");
    }
}

const car1 = new Car ("Audi", 2000, "black");
const truck1 = new Truck ("Jeep", 2015, "green");

console.log(Vehicle.transport());

console.log(" ");

console.log(car1.displayInfo());

console.log(" ");

console.log(car1.transportPeople());

console.log(" ");

console.log(truck1.displayInfo());

console.log(" ");

console.log(truck1.transportContainer());