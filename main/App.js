const ControllerUsers = require("../controllers/Users.js"); 
const ControllerReviews = require("../controllers/Reviews.js")
const ControllerUserReviews = require("../controllers/UserReviews.js")
const ControllerMessages = require("../controllers/Messages.js")

class App {
   
    #users = new ControllerUsers();
    #reviews = new ControllerReviews();
    #userReviews = new ControllerUserReviews();
    #messages = new ControllerMessages();
    #auth = null;
  
    signup(username, password, email) { 
      if (!this.#auth) 
        {
     const userCreated = this.#users.create(username, password, email);
    this.console.log(userCreated) }
else console.log("Already logged in")    }
  // EXAMPLE
  login(username, password) {
    if (!this.#auth) { 
    const user = this.#users.read(username, password, email); 
  if (!!user) { 
    this.#auth = user; 
    console.log("User logged in");
   } else console.log("Already logged in");
   } else console.log("Wrong credentials") ;
  }

  writeReview(rating, comment) {
    if (!!this.#auth) {
      const review = this.#reviews.create(rating, comment);
    this.console.log(review)
} else console.log("Not logged in"); 
  }
   
  ControllerUserReviews(){}
  
}
  
const app = new App();

