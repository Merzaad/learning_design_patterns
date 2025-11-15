const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  fullName() {
    return `${this.firstName} ${this.lastName}`
  },
})


const user1 = createUser({firstName: 'name', lastName:'lastname', email: 'email@email.com'})
