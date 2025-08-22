export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw new TypeError('sqft must be a number');
    }

    this._sqft = sqft;

    // Vérifie si la méthode evacuationWarningMessage est implémentée
    if (this.constructor !== Building && typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  // Getter pour sqft
  get sqft() {
    return this._sqft;
  }
}

