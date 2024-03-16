class User {
  name: string;
  lastname: string;
  constructor(name: string, lastname: string) {
    this.name = name;
    this.lastname = lastname;
  }
  print() {
    console.log(`${this.name} ${this.lastname}`);
  }
}

export default User;
