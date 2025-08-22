export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Crée une nouvelle instance de la même classe
    const Cls = this.constructor;
    const clone = Object.create(Cls.prototype);

    // Copie tous les attributs propres de l'instance
    Object.getOwnPropertyNames(this).forEach(prop => {
      clone[prop] = this[prop];
    });

    return clone;
  }

  // Getters
  get brand() { return this._brand; }
  get motor() { return this._motor; }
  get color() { return this._color; }
}
