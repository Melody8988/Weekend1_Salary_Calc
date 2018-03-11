
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
  let newEmployee = new Employee ( $('#firstName').val(), $('#lastName').val(), $('#idNumber').val(), $('#titleIn').val(), $('#annualSalary').val() );
  employees.push( new Employee );

  updateExpenses();
}

function updateExpenses(){
  console.log('in update Expenses');
  let monthlyTotal = 0
  let outputElement = $('.tableContent');
  outputElement.empty();

  for( employee of employees ){ //loop through and display expenses on DOM
  console.log( employee );
  //output on Table
  $('.tableContent').append ('<tr><td>' + employee.first + '</td><td>' + employee.last + '</td><td>' + Number(employee.id) + '</td><td>' + employee.title + '</td><td>$' + Number(employee.salary) + '</td></tr>');
  monthlyTotal += Number(employee.salary)/12
  console.log('monthlyTotal', monthlyTotal);
  $('#monthlyContent').empty();
  $('#monthlyContent').append('<h2>'+ 'Total Monthly: $' + monthlyTotal.toFixed(2) + '</h2>');

  //clear inputs
  $('#firstName').val('');
  $('#lastName').val('');
  $('#idNumber').val('');
  $('#titleIn').val('');
  $('#annualSalary').val('');

  }

  if ( monthlyTotal > 20000){
    console.log( 'red');
    $('#monthlyContent').css('background-color', '#900C3F');
    $('#monthlyContent').css('color', 'white')
  }
}
