// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // Declaring an ARRAY OF OBJECTS for data of the empployees
  const employeesArray = [
    {   firstName:String,
        lastName:String,
        salary:Number
    }
  ]

  // Initializing the array of objets
  employeesArray.length = 0;
  
  // Declaring a array of string to capture the data of one empleyee
  let inputEmployeeArray = {
        firstName:String,
        lastName:String,
        salary:Number 
  }

  // Initializing variable for the while loop
  anotherEmployee = true;

  // a loop while adding another employee
  while (anotherEmployee) {
         inputEmployeeArray = {
            "firstName" : window.prompt("First name"),
            "lastName" : window.prompt("Last name"),
            "salary" : Number(window.prompt("Salary"))
             }
        if (isNaN(inputEmployeeArray.salary)) {
            inputEmployeeArray.salary = 0;
        }
            // validating if the cancel button was clicked
        if ((inputEmployeeArray.firstName == null) ||
            (inputEmployeeArray.lastName == null) ||
            (inputEmployeeArray.salary == null)) {
                // nothing to do 
             }
            else {
                // adding a row to the array of objets 
                employeesArray.push(inputEmployeeArray); 
            }
        anotherEmployee = window.confirm("Do you want tu ADD another employee?")
        }
        // returning the parameter (array of objets) where the function is called (line 126)
  return employeesArray;
        // End of the function collectEmployees
}

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // initializing a var to sum up salaries
  let sumSalaries = 0

  // a loop for sum up the employees salaries 
  for (let index = 0; index < employeesArray.length; index++) {
      sumSalaries = sumSalaries + employeesArray[index].salary;
  }
  
  // declaring and initializing a var por de average
  let avgSalaries = 0
  // calculating  the average salary
  avgSalaries = sumSalaries / employeesArray.length;
  // display in the  console
  console.log(`The average salary employee between our ${employeesArray.length} employee(s)
is ${avgSalaries.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  })}`);
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  let randomEmployeeindex = 0;
  // generating a random number in the range of employees with two functions (FLOOR(RANDOM))
  randomEmployeeindex = Math.floor(Math.random()*employeesArray.length);
  console.log(`Congratulations to ${employeesArray[randomEmployeeindex].firstName} ${employeesArray[randomEmployeeindex].lastName}
our random drawing winner!`)
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {

    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency

    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  //  The next line was commented because the display was not inidcate in the acceptance criteria 
  // console.table(employees);
  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
