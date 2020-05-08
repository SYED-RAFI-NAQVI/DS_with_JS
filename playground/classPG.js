class Name {
  constructor(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
  }
}

let newName = new Name('syed', 'rafi')
console.log(newName);
console.log(newName.firstName);


//prototypes

function User(email, password){
  this.email = email,
  this.password = password
}

User.prototype.login = function () {
  console.log(this.email, 'logged in')
}

User.prototype.logout = function () {
  console.log(this.email, 'logged out')
}


let user1 = new User('rafi@gmail.com', 123456)

user1.login()
