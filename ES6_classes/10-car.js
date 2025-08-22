export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  // Symbol pour la méthode cloneCar
  static [Symbol.hasInstance](instance) {
    return instance instanceof this;
  }

  cloneCar() {
    // Crée une nouvelle instance de la même classe
    return new this.constructor(this._brand, this._motor, this._color);
  }

  // Getters optionnels si besoin
  get brand() {
    return this._brand;
  }

  get motor() {
    return this._motor;
  }

  get color() {
    return this._color;
  }
}

