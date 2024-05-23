/** @format */

const ModelMatch = require('../models/Match');
const ModelUserMatch = require('../models/UserMatch');
class ModelMatch {
  constructor(userId1, userId2) {
    this.id = Math.random();
    this.userId1 = userId1;
    this.userId2 = userId2;
  }
}

class ControllerMatch {
  matches = [];

  like() {}
}
