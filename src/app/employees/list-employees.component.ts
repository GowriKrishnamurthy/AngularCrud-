import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';

@Component({
  // router is used, selector can be removed.
  // selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

  listEmployees: Employee[] = [];
  employeeToDisplay: Employee;

  constructor(private empService: EmployeeService) {
  }

  ngOnInit() {
    this.listEmployees = this.empService.getEmployees();
    // Show first employee always
    this.employeeToDisplay = this.listEmployees[0];
  }

  nextEmployee(): void {
    if (this.employeeToDisplay.id <= this.listEmployees.length-1) {
      this.employeeToDisplay = this.listEmployees[this.employeeToDisplay.id];
    } else {
      this.employeeToDisplay = this.listEmployees[0];
    }
  }
}