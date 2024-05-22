class ModelReview {
  constructor(rating, comment) {
    this.id = Math.random();
    this.rating = rating;
    this.comment = comment;
  }
}

module.exports = ModelReview;