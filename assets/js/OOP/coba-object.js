class Car {
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    getInfo(){
        return `The car is ${this.brand} ${this.model}`;
    }
}
 class Ecar extends Car {
    constructor(brand, model, battery){
        super(brand, model)
        this.battery = battery;
    }
    getInfo(){
        return `${super.brand}`
    }
 }

 
let buyCar = new Car("toyota", "veloz");
console.log(Ecar.brand + " " + buyCar.model );