class App {
  constructor() {
    this.users = new ControllerUsers();
    this.reviews = new ControllerReviews();
    this.messages = new ControllerMessages();
    this.userReviews = new ControllerUserReviews();
  }
  // EXAMPLE
  signup(username, password, email) {
    this.users.create(username, password, email);
  }
}

const app = new App();
