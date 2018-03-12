
let employees = [];


class Employee{
  constructor ( firstIn, lastIn, idIn, titleIn, salaryIn ){
    this.first = firstIn;
    this.last = lastIn;
    this.id = idIn;
    this.title = titleIn;
    this.salary = salaryIn;
  }//end constructor
}//end class



$(document).ready(readyNow);
  function readyNow(){
    clickCommands();
}

function clickCommands(){
  //on click
  $('#submitBtn').on('click', updateArray);
  $('#tableContent').on('click', '.deleteButton', deleteEmployee);


}

function updateArray(){
  //get user inputs
  //create new Employee
  firstIn = $('#firstName').val()
  lastIn = $('#lastName').val()
  idIn = $('#idNumber').val()
  titleIn = $('#titleIn').val()
  salaryIn = $('#annualSalary').val()

  let newEmployee = new Employee ( firstIn, lastIn, idIn, titleIn, salaryIn );
  employees.push( newEmployee );
  updateExpenses();
}

function updateExpenses(){
  console.log('in update Expenses');
  let monthlyTotal = 0
  let outputElement = $('#tableContent');
  outputElement.empty();
  for( employee of employees ){ //loop through and display expenses on DOM
  console.log( employee );

  //output on Table
  $('#tableContent').append ('<tr><td>' + employee.first + '</td><td>' + employee.last + '</td><td>' + Number(employee.id) + '</td><td>' + employee.title + '</td><td>$' + Number(employee.salary) + '<td><button class="deleteButton">Delete</button></td>' + '</td></tr>');
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
    $('#monthlyContent').css('color', 'white');

  }
}

function deleteEmployee(){
  console.log('PRESSED DELETE', $(this) );

  $(this).parent().parent().remove();

 //console.log($(this).parent().prev());
 //$(this).parent().prev() - the td holding the salary
 //<tr> ...<td><button> class="deleteButton">Delete</button></td></tr>
 //$(this) - that button that was clicked
 //$(this).parent()-the td (column)
 //$(this).parent().parent() - the tr

 /*$(this).parent().parent().remove();//remove the table row

 let removedSalary = $(this).parent().prev().text();//salary td
 console.log(removedSalary);
 totalYearlySalary -= removedSalary;*/
}
