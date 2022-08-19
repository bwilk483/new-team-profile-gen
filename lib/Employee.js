class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  gitName() {
    return { name: this.name };
  }
  getId() {
    return { id: this.id };
  }
  getEmail() {
    return { email: this.email };
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
