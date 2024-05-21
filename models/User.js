class ModelUser {
  constructor(username, password, email) {
    this.id = Math.random();
    this.username = username;
    this.password = password;
    this.email = email;
  }

  register(username, email, password){ 
    const newUser = new ModelUser(username, password, email);
  }

  login (username, password){
    if (this.username === username && this.password === password)
      { console.log('Login succesful')}
    else console.log ('Invalid username or password')
    
    
}
    
    update (username, password, email){
      this.username = username;
      this.password = password;
      this.email = email;
     }
}

const user = new ModelUser('paolo', 'password123', 'paolo@example.com');
user.login('paolo', 'password123');
