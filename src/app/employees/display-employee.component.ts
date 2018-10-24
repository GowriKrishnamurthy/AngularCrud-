import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  // Parent component will use this Input property to pass
  // the employee object to which the template binds to
  // @Input() employee: Employee;
// Private backing field for the property
private _employee: Employee;

// This property setter is called anytime the input property changes
@Input()
set employee(val: Employee) {
  console.log('Previous : ' + (this._employee ? this._employee.name : 'NULL'));
  console.log('Current : ' + val.name);
  this._employee = val;
}

// This getter is called when reading and displaying data
get employee(): Employee {
  return this._employee;
}

  constructor() { }

  ngOnInit() {
  }
  // This life cycle hook receives SimpleChanges as an Input parameter. 
  // We can use it to retrieve previous and current values fro parent component
   ngOnChanges(changes: SimpleChanges) {
  /*    const previousEmployee = <Employee>changes.employee.previousValue;
      const currentEmployee = <Employee>changes.employee.currentValue;
    
      console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL') );
      console.log('Current : ' + currentEmployee.name);
    }
    */
   
}
