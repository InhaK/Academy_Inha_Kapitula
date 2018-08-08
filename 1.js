class Vehicle {
    constructor(carModel, carYear, maxSpeed) {
        this.model = carModel;
        this.year = carYear;
        this.maxSpeed = maxSpeed;
    }

    displayInfo() {
        console.log(`Name: ${this.model};
        Year: ${this.year};
        Max Speed: ${this.maxSpeed};
        Type: ${this.type};`)
    }
}

class Car extends Vehicle {
    constructor (carModel, carYear, maxSpeed) {
        super (carModel, caryear, maxSpeed);
        this.type = "car";
    }

    transportPeople() {
        console.log (`i am starting transporting passangers`);
    }
}

class Truck extends Vehicle {
    constructor (carModel, carYear, maxSpeed) {
        super (carModel, carYear, maxSpeed);
        this.type = "truck";
    }

    transportContainer() {
        console.log(`I am starting transporting heavy container`);
    }
}

let x = 1;
let y = 2;

console.log(x + y);