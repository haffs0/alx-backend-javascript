import Car from './10-car';

export default class EvCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  set range(value) {
    this._range = value;
  }

  get range() {
    return this._range;
  }

  cloneCar() {
    const Species = super.constructor[Symbol.species];
    return new Species();
  }
}
