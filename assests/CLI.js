// classes Employee, Manager, Engineer, Intern

// Employee
function Employee(name, id, email) {
this.name = name;
this.id = id;
this.email = email;
}
-getName()
-getId()
-getEmail()
-getRole() // Returns 'Employee'

// Manager
function Manager(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
-getName()
-getId()
-getEmail()
-getRole() // Returns 'Employee'
// plus
-officeNumber
-getRole() // Overridden to return 'Manager'

// Engineer
function Engineer(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
-getName()
-getId()
-getEmail()
-getRole() // Returns 'Employee'
// plus
-github  // GitHub username
-getGithub()
-getRole() // Overridden to return 'Engineer'

// Intern
function Intern(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    }
-getName()
-getId()
-getEmail()
-getRole() // Returns 'Employee'
// plus
-school
-getSchool()
-getRole() // Overridden to return 'Intern'

