import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EmployeeService } from './employee.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  // router is used, selector can be removed.
  // selector: 'list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  listEmployees: Employee[] = [];
  employeeToDisplay: Employee;
  dataFromChild: Employee;
  _searchQueryString: string;

  // Use this property to stored filtered employees, so we do not
  // lose the original list and do not have to make a round trip
  // to the web server on every new search
  filteredEmployees: Employee[];

  constructor(private empService: EmployeeService,
    private router: Router,
    private _route: ActivatedRoute) { }

  // We are binding to this property in the view template, so this
  // getter is called when the binding needs to read the value
  get searchQueryString(): string {
    return this._searchQueryString;
  }
  // This setter is called everytime the value in the search text box changes
  set searchQueryString(value: string) {
    this._searchQueryString = value;
    this.filteredEmployees = this.filterEmployees(value);
  }
  handleNotify(eventData: Employee) {
    this.dataFromChild = eventData;
  }
  ngOnInit() {
    this.listEmployees = this.empService.getEmployees();

    // Show first employee always
    //this.employeeToDisplay = this.listEmployees[0];
    this.filteredEmployees = this.listEmployees;
  }

  filterEmployees(searchString: string) {
    return this.listEmployees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }
  nextEmployee(): void {
    if (this.employeeToDisplay.id <= this.listEmployees.length - 1) {
      this.employeeToDisplay = this.listEmployees[this.employeeToDisplay.id];
    } else {
      this.employeeToDisplay = this.listEmployees[0];
    }
  }
  onClick(employeeId: number) {
    this.router.navigate(['/employees', employeeId]);
  }
}