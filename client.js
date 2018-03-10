let monthlyTotal = 0
let employees = [];


class Employee{
  constructor ( first, last, id, title, salary ){
    this.first = $('#firstName').val();
    this.last = $('#lastName').val();
    this.id = $('#idNumber').val();
    this.title = $('#titleIn').val();
    this.salary = $('#annualSalary').val();
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
//create new Employee
  console.log('in update Table');


  let newEmployee = new Employee ( $('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#titleIn').val(), $('#annualSalary').val() );
  employees.push( new Employee );
  
  updateExpenses();
}

function updateExpenses(){
  console.log('in update Expenses');


  for( employee of employees ){
  console.log( employee );
  $('#tableContent').empty();
  $('#tableContent').append ('<tr><td>' + employee.first + '</td><td>' + employee.last + '</td><td>' + employee.id + '</td><td>' + employee.title + '</td><td>' + employee.salary + '</td></tr>');

  //loop through and display expenses on DOM
  //output on Table
  }

}
