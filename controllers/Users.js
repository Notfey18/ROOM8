class ControllerUsers {
  users = [];

  create(username, password, email) {
    const user = new ModelUser(username, password, email);
    this.users.push(user);
  }
  read(id) {}
  update(id, username, password, email) {}
  delete(id) {}
}
