const ModelUserReview = require("../models/UserReview.js");

class ControllerUserReviews {
  create(idUser, idReview) {
    const userReview = new ModelUserReview(idUser, idReview);
    return userReview;
  }
  read(id) {}
  update(id, idUser, idReview) {}
  delete(id) {}
}

module.exports = ControllerUserReviews;