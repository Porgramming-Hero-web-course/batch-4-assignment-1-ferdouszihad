// Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

class Car {
  constructor(
    public make: string,
    public model: string,
    private year: number
  ) {}

  public getCarAge() {
    const currentYear = new Date().getFullYear();

    return currentYear - car.year;
  }
}
//sample input
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());
