/** @format */

class ModelUser {
  constructor(username, password, email) {
    this.id = Math.random();
    this.username = username;
    this.password = password;
    this.email = email;
  }
}
class ModelReview {
  constructor(rating, comment) {
    this.id = Math.random();
    this.rating = rating;
    this.comment = comment;
  }
}

class ModelUserReview {
  constructor(idUser, idReview) {
    this.idUser = idUser;
    this.idReview = idReview;
  }
}
// class ModelMessage {
//   constructor(text) {
//     this.id = Math.random();
//     this.text = text;
//   }
// }

class ControllerUsers {
  #users = [];

  getUsers() {
    return this.#users;
  }

  create(username, password, email) {
    const user = new ModelUser(username, password, email);
    this.#users.push(user);
    return { id: user.id, username: user.username, email: user.email };
  }

  read(username, password) {
    const userFound = this.#users.find(function (user) {
      if (user.username === username && user.password === password) return true;
      return false;
    });
    return userFound;
  }

  update(id, username, password, email) {}
  delete(id) {}
}
class ControllerReviews {
  #reviews = [];
  create(rating, comment) {
    const review = new ModelReview(rating, comment);
    this.#reviews.push(review);
    return { id: review.id, rating: review.rating, comment: review.comment };
  }
}
class ControllerUserReviews {
  #userReviews = [];
  create(idUser, idReview) {
    const userReview = new ModelUserReview(idUser, idReview);
    this.#userReviews.push(userReview);
    return userReview;
  }

  readUserId(idUser) {
    this.#userReviews.filter(function (userReview) {
      return userReview.idUser === idUser;
    });
  }

  readIdReview(idReview) {
    this.#userReviews.filter(function (userReview) {
      return userReview.idReview === idReview;
    });
  }
}
class ControllerMessages {
  messages = [];

  create(text) {}
  read(id) {}
  update(id, text) {}
  delete(id) {}
}

class App {
  #users = new ControllerUsers();
  #reviews = new ControllerReviews();
  #userReviews = new ControllerUserReviews();
  #messages = new ControllerMessages();
  #auth = null;

  getUsers() {
    return this.#users.getUsers();
  }

  signup(username, password, email) {
    if (!this.#auth) {
      const userCreated = this.#users.create(username, password, email);
      console.log(userCreated);
    } else console.log('Already logged in');
  }

  login(username, password) {
    if (!this.#auth) {
      const user = this.#users.read(username, password);
      if (!!user) {
        this.#auth = user;
        console.log('User logged in');
      } else console.log('Already logged in');
    }
  }

  logout() {
    if (!!this.#auth) this.#auth = null;
    else console.log('You are not logged in');
  }

  writeReview(rating, comment, userReceiver) {
    if (!!this.#auth) {
      const review = this.#reviews.create(rating, comment);
      console.log(review);
    } else console.log('Not logged in');
    if (!!this.#auth) {
      userReceiver === this.#userReviews;
    } else return false;
  }
  getUserReview() {
    return this.#userReviews;
  }
}

const app = new App();
