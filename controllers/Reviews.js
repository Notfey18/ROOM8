/** @format */

const ModelReview = require('../models/Reviews.js');

class ControllerReviews {
  #reviews = [];
  create(rating, comment) {
    const review = new ModelReview(rating, comment);
    this.#reviews.push(review);
    return { id: review.id, rating: review.rating, comment: review.comment };
  }
  read() {}
  update(id, rating, comment) {}
  delete(id) {}
}

module.exports = ControllerReviews;
