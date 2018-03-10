let monthlyTotal = 0
let employee = [];

class Employee{
  constructor ( first, last, id, title, salary ){
    this.first = first;
    this.last = last;
    this.id = id;
    this.title = title;
    this.salary = salary;
  }//end constructor
}//end class



$(document).ready(readyNow);

function readyNow(){

addEmployee();
}

function addEmployee(){
//on click
  $('#submitBtn').on('click', updateTable);

}

function updateTable(){
//get user inputs
  console.log('in update Table');
  console.log( $('#firstName').val() );
  console.log( $('#lastName').val() );
  console.log( $('#idNumber').val() );
  console.log( $('#title').val() );
  console.log( $('#annualSalary').val() );

  //create new Employee

  let newEmployee = new Employee ( $('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#title').val(), $('#annualSalary').val() );
  employee.push( new Employee );
}
