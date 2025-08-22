import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // appel au constructeur de la classe parent
    if (typeof floors !== 'number') {
      throw new TypeError('floors must be a number');
    }
    this._floors = floors;
  }

  // Getter pour floors
  get floors() {
    return this._floors;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

