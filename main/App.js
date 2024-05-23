/** @format */

const ControllerUsers = require('../controllers/Users.js');
const ControllerReviews = require('../controllers/Reviews.js');
const ControllerUserReviews = require('../controllers/UserReviews.js');
const ControllerMessages = require('../controllers/Messages.js');

class App {
  #users = new ControllerUsers();
  #reviews = new ControllerReviews();
  // #userReviews = new ControllerUserReviews();
  // #messages = new ControllerMessages();
  #auth = null;
  // #match = new ControllerMatch();
  // #userMatch = new ControllerUserMatch();

  getUsers() {
    return this.#users;
  }

  signup(username, password, email) {
    if (!this.#auth) {
      const userCreated = this.#users.create(username, password, email);
      console.log(userCreated);
    } else console.log('Already logged in');
  }

  login(username, password) {
    if (!this.#auth) {
      const user = this.#users.read(username, password, email);
      if (!!user) {
        this.#auth = user;
        console.log('User logged in');
      } else console.log('Already logged in');
    } else console.log('Wrong credentials');
  }

  writeReview(rating, comment) {
    if (!!this.#auth) {
      const review = this.#reviews.create(rating, comment);
      console.log(review);
    } else console.log('Not logged in');
  }

  // ControllerUserReviews(){}
}

const app = new App();
