# team-profile-generator

# Minimum Requirements:
-Functional application.
-GitHub repository with a unique name and a README describing the project.
-User can use the CLI to generate an HTML page that displays information about their team.
-All tests must pass.

# Classes
The project must have the these classes: Employee, Manager, Engineer,
Intern. The tests for these classes in the tests directory must all pass.
The first class is an Employee parent class with the following properties and
methods:

# Employee must have:
-name
-id
-email
-getName()
-getId()
-getEmail()
-getRole() // Returns 'Employee'

**The other three classes will extend Employee.

In addition to Employee's properties and methods, 
# Manager will also have:
-officeNumber
-getRole() // Overridden to return 'Manager'

In addition to Employee's properties and methods, 
# Engineer will also have:
-github  // GitHub username
-getGithub()
-getRole() // Overridden to return 'Engineer'

In addition to Employee's properties and methods, 
# Intern will also have:
-school
-getSchool()
-getRole() // Overridden to return 'Intern'
