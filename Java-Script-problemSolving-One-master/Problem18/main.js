
function createCar(model, year) {
    return {
    model: model,
    year: year,
    displayDetails: function() {
        return `Model: ${this.model}, Year: ${this.year}`;
    }
    };
}
const car = createCar("Toyota", 2020);
console.log(car.displayDetails());
